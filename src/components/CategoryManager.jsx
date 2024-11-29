import React, { useState, useEffect } from 'react';
import { fetchData, saveData } from '../api/dataService';
import CustomForm from '../components/CustomForm';
import CategorySelector from '../components/CategorySelector';
import DataList from '../components/DataList';
import ActionButtons from '../components/ActionButtons';

const CategoryManager = ({ categories, setCategories }) => {
    const [category, setCategory] = useState('General');
    const [categoryToDelete, setCategoryToDelete] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
                if (!uniqueCategories.includes('General')) uniqueCategories.unshift('General');
                setCategories(uniqueCategories);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [setCategories]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return alert('Please enter valid input.');
        const newData = { text: inputValue, category };
        const updatedList = [newData, ...data];
        saveData(updatedList).then(() => setData(updatedList));
        setInputValue('');
    };

    const handleClear = () => {
        if (window.confirm(`Are you sure you want to clear all items in "${category}"?`)) {
            const updatedList = data.filter((item) => item.category !== category);
            saveData(updatedList).then(() => setData(updatedList));
        }
    };

    const handleRemove = (itemToRemove) => {
        const updatedList = data.filter((item) => item !== itemToRemove);
        saveData(updatedList).then(() => setData(updatedList));
    };

    const handleEdit = (itemToEdit) => {
        const newText = prompt('Edit your text:', itemToEdit.text);
        if (newText !== null) {
            const updatedList = data.map((item) =>
                item === itemToEdit ? { ...item, text: newText } : item
            );
            saveData(updatedList).then(() => setData(updatedList));
        }
    };

    const handleAddCategory = () => {
        const newCategory = prompt('Enter new category:');
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
        }
    };

    const handleDeleteCategory = () => {
        if (!categoryToDelete || categoryToDelete === 'General') {
            return alert('Cannot delete General.');
        }
        if (window.confirm(`Are you sure you want to delete category "${categoryToDelete}"?`)) {
            const updatedCategories = categories.filter((cat) => cat !== categoryToDelete);
            setCategories(updatedCategories);

            const updatedData = data.filter((item) => item.category !== categoryToDelete);
            setData(updatedData);

            if (category === categoryToDelete) setCategory('General');
            saveData(updatedData);
        }
    };

    const filteredData = data.filter((item) => item.category === category);

    return (
        <div>
            {/* Form for input */}
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

            {/* Category Selector */}
            <CategorySelector
                categories={categories}
                category={category}
                setCategory={setCategory}
                label="Select Category"
            />

            {/* Data List */}
            <DataList
                filteredData={filteredData}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
            />

            {/* Action Buttons */}
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
