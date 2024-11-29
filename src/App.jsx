import React, { useState, useEffect } from 'react';
import { fetchData, saveData } from './api/dataService';
import { Container, Typography } from '@mui/material';
import CustomForm from './components/CustomForm'; // Use only CustomForm
import CategorySelector from './components/CategorySelector';
import DataList from './components/DataList';
import ActionButtons from './components/ActionButtons';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('General');
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState(['General']);
    const [categoryToDelete, setCategoryToDelete] = useState('');

    useEffect(() => {
        fetchData()
            .then((data) => {
                setData(data);
                const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
                if (!uniqueCategories.includes('General')) uniqueCategories.unshift('General');
                setCategories(uniqueCategories);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return alert('Please enter valid input.');
        const newData = { text: inputValue, category };
        const updatedList = [newData, ...data];
        saveData(updatedList).then(() => setData(updatedList));
        setInputValue('');
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

    const handleClear = () => {
        if (window.confirm(`Are you sure you want to clear all items in ${category}?`)) {
            const updatedList = data.filter((item) => item.category !== category);
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
        if (!categoryToDelete) return alert('Please select a category to delete.');
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
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Material-UI Text Input App
            </Typography>
            <CustomForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleSubmit={handleSubmit}
            />
            <CategorySelector
                categories={categories}
                category={category}
                setCategory={setCategory}
            />
            <DataList
                filteredData={filteredData}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
            />
            <ActionButtons
                handleClear={handleClear}
                handleAddCategory={handleAddCategory}
                handleDeleteCategory={handleDeleteCategory}
                categoryToDelete={categoryToDelete}
                setCategoryToDelete={setCategoryToDelete}
                categories={categories}
            />
        </Container>
    );

};

export default App;
