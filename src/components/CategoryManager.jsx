import React, { useState, useEffect } from 'react';
import { fetchJsonData, saveJsonData } from '../api/dataServiceAxios';
import CustomForm from '../components/CustomForm';
import CategorySelector from '../components/CategorySelector';
import DataList from '../components/DataList';
import CategoryActions from './CategoryActions';

// The CategoryManager component that manages data and categories
const CategoryManager = ({ categories, setCategories }) => {
    // State for various parts of the component
    const [category, setCategory] = useState('General');
    const [selectedCategoryToDelete, setCategoryToDelete] = useState('');
    const [formInputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

    // useEffect hook to fetch data from the server when the component mounts
    useEffect(() => {
        fetchJsonData()
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
        console.log('Before submit, inputValue:', formInputValue); // Debug log
        if (!formInputValue.trim()) return alert('Please enter valid input.');
        const newData = { text: formInputValue, category };
        const updatedList = [newData, ...data];
        saveJsonData(updatedList)
            .then(() => {
                setData(updatedList);
                setInputValue('');
                console.log('After submit, inputValue should be cleared:', formInputValue); // Debug log
            })
            .catch((error) => {
                console.error('Error saving data:', error);
                alert('Failed to save data. Please try again later.');
            });
    };

    // Function to clear all data in the selected category
    const handleClearCategoryData = () => {
        if (window.confirm(`Are you sure you want to clear all items in "${category}"?`)) {
            const updatedList = data.filter((item) => item.category !== category); // Create a list excluding the selected category
            saveJsonData(updatedList)
                .then(() => setData(updatedList))
                .catch((error) => {
                    console.error('Error clearing data:', error);
                    alert('Failed to clear data. Please try again later.');
                });
        }
    };

    // Function to remove a specific data object
    const handleRemoveSpecificData = (itemToRemove) => {
        const updatedList = data.filter((item) => item !== itemToRemove); // Filter out the object
        saveJsonData(updatedList)
            .then(() => setData(updatedList))
            .catch((error) => {
                console.error('Error removing data:', error);
                alert('Failed to remove data. Please try again later.');
            });
    };

    // Function to edit a specific data object
    const handleEditSpecificData = (itemToEdit) => {
        const newText = prompt('Edit your text:', itemToEdit.text); // Prompt user to edit text
        if (newText !== null) {
            const updatedList = data.map((item) =>
                item === itemToEdit ? { ...item, text: newText } : item // Update text for the object
            );
            saveJsonData(updatedList)
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
        if (!selectedCategoryToDelete || selectedCategoryToDelete === 'General') {
            return alert('Cannot delete General.'); // Prevent deleting the 'General' category
        }
        if (window.confirm(`Are you sure you want to delete category "${selectedCategoryToDelete}"?`)) {
            const updatedCategories = categories.filter((cat) => cat !== selectedCategoryToDelete); // Filter out the selected category
            setCategories(updatedCategories);

            const updatedData = data.filter((item) => item.category !== selectedCategoryToDelete); // Filter out data in the selected category
            setData(updatedData);

            if (category === selectedCategoryToDelete) setCategory('General'); // Reset category to 'General' if the deleted one is currently selected
            saveJsonData(updatedData)
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
                formInputValue={formInputValue}
                setInputValue={setInputValue}
                handleSubmit={handleSubmit}
                categories={categories}
                categoryToDelete={selectedCategoryToDelete}
                setCategoryToDelete={setCategoryToDelete}
                handleDeleteCategory={handleDeleteCategory}
                handleAddCategory={handleAddCategory}
                handleClear={handleClearCategoryData }
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
                handleEdit={handleEditSpecificData}
                handleRemove={handleRemoveSpecificData}
            />

            {/* Category Actions */}
            <CategoryActions
                handleClear={handleClearCategoryData }
                handleAddCategory={handleAddCategory}
                handleDeleteCategory={handleDeleteCategory}
                categoryToDelete={selectedCategoryToDelete}
                setCategoryToDelete={setCategoryToDelete}
                categories={categories}
                category={category}
                setCategory={setCategory}
            />
        </div>
    );
};

export default CategoryManager;
