import React, { useState, useEffect } from 'react';
import { fetchData, saveData } from '../api/dataService';
import CustomForm from '../components/CustomForm';
import CategorySelector from '../components/CategorySelector';
import DataList from '../components/DataList';
import ActionButtons from '../components/ActionButtons';

// The CategoryManager component that manages data and categories
const CategoryManager = ({ categories, setCategories }) => {
    // State for various parts of the component
    const [category, setCategory] = useState('General');
    const [categoryToDelete, setCategoryToDelete] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

    // useEffect hook to fetch data from the server when the component mounts
    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
                if (!uniqueCategories.includes('General')) uniqueCategories.unshift('General');
                setCategories(uniqueCategories);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data. Please check your connection or try again later.');
            });
    }, [setCategories]); // Dependency array to run useEffect when setCategories changes

    // Function to submit data from the form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return alert('Please enter valid input.'); // Input validation
        const newData = { text: inputValue, category }; // Create new data object
        const updatedList = [newData, ...data]; // Add new data to the beginning of the list
        saveData(updatedList)
            .then(() => setData(updatedList))
            .catch((error) => {
                console.error('Error saving data:', error);
                alert('Failed to save data. Please try again later.');
            });
        setInputValue(''); // Clear input field after submission
    };

    // Function to clear all data in the selected category
    const handleClear = () => {
        if (window.confirm(`Are you sure you want to clear all items in "${category}"?`)) {
            const updatedList = data.filter((item) => item.category !== category); // Create a list excluding the selected category
            saveData(updatedList)
                .then(() => setData(updatedList))
                .catch((error) => {
                    console.error('Error clearing data:', error);
                    alert('Failed to clear data. Please try again later.');
                });
        }
    };

    // Function to remove a specific data object
    const handleRemove = (itemToRemove) => {
        const updatedList = data.filter((item) => item !== itemToRemove); // Filter out the object
        saveData(updatedList)
            .then(() => setData(updatedList))
            .catch((error) => {
                console.error('Error removing data:', error);
                alert('Failed to remove data. Please try again later.');
            });
    };

    // Function to edit a specific data object
    const handleEdit = (itemToEdit) => {
        const newText = prompt('Edit your text:', itemToEdit.text); // Prompt user to edit text
        if (newText !== null) {
            const updatedList = data.map((item) =>
                item === itemToEdit ? { ...item, text: newText } : item // Update text for the object
            );
            saveData(updatedList)
                .then(() => setData(updatedList))
                .catch((error) => {
                    console.error('Error editing data:', error);
                    alert('Failed to edit data. Please try again later.');
                });
        }
    };

    // Function to add a new category
    const handleAddCategory = () => {
        const newCategory = prompt('Enter new category:'); // Prompt user to name the new category
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]); // Add new category to the list
        }
    };

    // Function to delete a category
    const handleDeleteCategory = () => {
        if (!categoryToDelete || categoryToDelete === 'General') {
            return alert('Cannot delete General.'); // Prevent deleting the 'General' category
        }
        if (window.confirm(`Are you sure you want to delete category "${categoryToDelete}"?`)) {
            const updatedCategories = categories.filter((cat) => cat !== categoryToDelete); // Filter out the selected category
            setCategories(updatedCategories);

            const updatedData = data.filter((item) => item.category !== categoryToDelete); // Filter out data in the selected category
            setData(updatedData);

            if (category === categoryToDelete) setCategory('General'); // Reset category to 'General' if the deleted one is currently selected
            saveData(updatedData)
                .catch((error) => {
                    console.error('Error deleting category:', error);
                    alert('Failed to delete category. Please try again later.');
                });
        }
    };

    // Filter data based on the selected category
    const filteredData = data.filter((item) => item.category === category);

    return (
        <div>
            {/* Form for data input */}
            <CustomForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSubmit={handleSubmit}
                categories={categories}
                categoryToDelete={categoryToDelete}
                setCategoryToDelete={setCategoryToDelete}
                handleDeleteCategory={handleDeleteCategory}
                handleAddCategory={handleAddCategory}
                handleClear={handleClear}
            />

            {/* Category selector */}
            <CategorySelector
                categories={categories}
                category={category}
                setCategory={setCategory}
                label="Select Category"
            />

            {/* List of data */}
            <DataList
                filteredData={filteredData}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
            />

            {/* Action buttons */}
            <ActionButtons
                handleClear={handleClear}
                handleAddCategory={handleAddCategory}
                handleDeleteCategory={handleDeleteCategory}
                categoryToDelete={categoryToDelete}
                setCategoryToDelete={setCategoryToDelete}
                categories={categories}
                category={category}
                setCategory={setCategory}
            />
        </div>
    );
};

export default CategoryManager;
