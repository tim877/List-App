import { useState, useEffect, useRef } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('General'); // Default category
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState(['General']); // Default category
    const [categoryToDelete, setCategoryToDelete] = useState(''); // Selected category for deletion

    useEffect(() => {
        fetch('/data')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
                if (!uniqueCategories.includes('General')) {
                    uniqueCategories.unshift('General');
                }
                setCategories(uniqueCategories); // Update categories
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputRegex = /\S/; // Check for non-whitespace character
        if (!inputRegex.test(inputValue) || !category) {
            alert('Please enter valid input and select a category.');
            return; // Prevent submission
        }

        const newData = { text: inputValue, category }; // Store input with category
        const updatedList = [newData, ...data];

        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        })
            .then((response) => response.text())
            .then(() => {
                setData(updatedList);
                setInputValue('');
            })
            .catch((error) => console.error('Error saving data:', error));
    };

    const handleRemove = (itemToRemove) => {
        const updatedList = data.filter((item) => item !== itemToRemove);

        fetch('/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedList),
        })
            .then((response) => response.text())
            .then(() => {
                setData(updatedList);
            })
            .catch((error) => console.error('Error updating data:', error));
    };

    const handleEdit = (itemToEdit) => {
        const newText = prompt('Edit your text:', itemToEdit.text);
        if (newText !== null) { // Check if user clicked "Cancel"
            const updatedList = data.map(item =>
                item === itemToEdit ? { ...item, text: newText } : item
            );

            fetch('/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedList),
            })
                .then((response) => response.text())
                .then(() => {
                    setData(updatedList);
                })
                .catch((error) => console.error('Error updating data:', error));
        }
    };

    const handleClear = () => {
        const confirmation = prompt(`Are you sure you want to delete all data in ${category}? Type 'y' to confirm.`);

        // Normalize the input by trimming whitespace and removing parentheses
        const normalizedConfirmation = confirmation ? confirmation.trim().replace(/^\((.*)\)$/, '$1') : '';

        // Check for 'y' or 'Y'
        if (normalizedConfirmation.toLowerCase() === 'y') {
            const updatedList = data.filter(item => item.category !== category); // Filter out items in the selected category

            fetch('/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedList),
            })
                .then((response) => response.text())
                .then(() => {
                    setData(updatedList); // Update state to the filtered list
                })
                .catch((error) => console.error('Error updating data:', error));
        } else {
            alert('Clear action canceled.');
        }
    };


    const handleAddCategory = () => {
        const newCategory = prompt('Enter new category:');
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]); // Add only if not exists
        } else {
            alert(`Category "${newCategory}" already exists or is invalid.`);
        }
    };

    const handleDeleteCategory = () => {
        if (!categoryToDelete) {
            alert('Please select a category to delete.');
            return;
        }

        const confirmation = prompt(`Type DELETE to confirm deletion of category "${categoryToDelete}":`);
        if (confirmation === 'DELETE') {
            const updatedCategories = categories.filter(cat => cat !== categoryToDelete);
            setCategories(updatedCategories);

            const updatedData = data.filter(item => item.category !== categoryToDelete);
            setData(updatedData);

            if (category === categoryToDelete) {
                setCategory('General'); // Switch to General category
            }

            fetch('/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            })
                .then((response) => response.text())
                .then(() => {
                    console.log(`Category "${categoryToDelete}" deleted successfully.`);
                })
                .catch((error) => console.error('Error deleting category:', error));
        } else {
            alert('Deletion canceled. You did not type DELETE.');
        }

        // Reset the categoryToDelete state to allow re-selection
        setCategoryToDelete('');
    };


    // Filter data based on the selected category
    const filteredData = data.filter(item => item.category === category);

    return (
        <div className="form-container">
            <h1>Text Input</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your text here..."
                />

                <label htmlFor="categories" className="category-label">Category</label>
                <select id="categories" className='categories' value={category} onChange={(e) => setCategory(e.target.value)}>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Keep the Lock Category button with WIP functionality */}
                {category !== 'General' && (
                    <button
                        type="button"
                        className="lock-category-button"
                        onClick={() => alert('WIP')} // Display WIP on click
                    >
                        Lock Category
                    </button>
                )}

                <button type="submit">Submit</button>
            </form>
            <button className='addCategory' onClick={handleAddCategory}>Add Category</button>

            {/* Container for deleting a category */}
            <div className="delete-category-container">
                <select
                    className='deleteSelected'
                    value={categoryToDelete}
                    onChange={(e) => setCategoryToDelete(e.target.value)}
                >
                    <option value="">Select category to delete</option> {/* Make it selectable */}
                    {categories.map((cat, index) => (
                        <option key={index} value={cat} disabled={cat === 'General'}>
                            {cat}
                        </option>
                    ))}
                </select>
                <button
                    className='delete-category-button'
                    onClick={handleDeleteCategory}
                >
                    Delete Selected Category
                </button>
            </div>

            <div className="data-container">
                <h2>Saved Data for: {category}</h2>
                <ul>
                    {filteredData.map((item, index) => (
                        <li key={index}>
                            <div className="text-container">
                                <span>{item.text}</span> {/* Text in a span for wrapping */}
                            </div>
                            <div className="button-container">
                                <button
                                    className="edit-button"
                                    onClick={() => handleEdit(item)} // Edit functionality
                                >
                                    Edit
                                </button>
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemove(item)} // Remove functionality
                                >
                                    X
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button className="clear-button" onClick={handleClear}>Clear all text in selected category</button>
        </div>
    );
}

export default App;
