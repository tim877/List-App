import React, { useState, useEffect } from 'react';
import { fetchData, saveData } from '../api/dataService';
import CustomForm from '../components/CustomForm';
import CategorySelector from '../components/CategorySelector';
import DataList from '../components/DataList';
import ActionButtons from '../components/ActionButtons';

// CategoryManager-komponenten som hanterar data och kategorier
const CategoryManager = ({ categories, setCategories }) => {
    // State för olika delar av komponenten
    const [category, setCategory] = useState('General');
    const [categoryToDelete, setCategoryToDelete] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);

    // useEffect-hook för att hämta data från servern vid komponentens montering
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
    }, [setCategories]); // Dependency array för att köra useEffect vid ändring av setCategories

    // Funktion för att skicka in data från formuläret
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return alert('Please enter valid input.'); // Validering av input
        const newData = { text: inputValue, category }; // Skapar ny dataobjekt
        const updatedList = [newData, ...data]; // Lägger till ny data i början av listan
        saveData(updatedList)
            .then(() => setData(updatedList))
            .catch((error) => {
                console.error('Error saving data:', error);
                alert('Failed to save data. Please try again later.');
            });
        setInputValue(''); // Tömmer inputfältet efter inlämning
    };

    // Funktion för att rensa all data i den valda kategorin
    const handleClear = () => {
        if (window.confirm(`Are you sure you want to clear all items in "${category}"?`)) {
            const updatedList = data.filter((item) => item.category !== category); // Skapar en lista utan data i vald kategori
            saveData(updatedList)
                .then(() => setData(updatedList))
                .catch((error) => {
                    console.error('Error clearing data:', error);
                    alert('Failed to clear data. Please try again later.');
                });
        }
    };

    // Funktion för att ta bort en specifik dataobjekt
    const handleRemove = (itemToRemove) => {
        const updatedList = data.filter((item) => item !== itemToRemove); // Filtrerar bort objektet
        saveData(updatedList)
            .then(() => setData(updatedList))
            .catch((error) => {
                console.error('Error removing data:', error);
                alert('Failed to remove data. Please try again later.');
            });
    };

    // Funktion för att redigera en specifik dataobjekt
    const handleEdit = (itemToEdit) => {
        const newText = prompt('Edit your text:', itemToEdit.text); // Användare kan redigera texten
        if (newText !== null) {
            const updatedList = data.map((item) =>
                item === itemToEdit ? { ...item, text: newText } : item // Uppdaterar texten för objektet
            );
            saveData(updatedList)
                .then(() => setData(updatedList))
                .catch((error) => {
                    console.error('Error editing data:', error);
                    alert('Failed to edit data. Please try again later.');
                });
        }
    };

    // Funktion för att lägga till en ny kategori
    const handleAddCategory = () => {
        const newCategory = prompt('Enter new category:'); // Ber användaren om att namnge den nya kategorin
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]); // Lägger till ny kategori i listan
        }
    };

    // Funktion för att ta bort en kategori
    const handleDeleteCategory = () => {
        if (!categoryToDelete || categoryToDelete === 'General') {
            return alert('Cannot delete General.'); // Hindrar borttagning av 'General'-kategorin
        }
        if (window.confirm(`Are you sure you want to delete category "${categoryToDelete}"?`)) {
            const updatedCategories = categories.filter((cat) => cat !== categoryToDelete); // Filtrerar bort den valda kategorin
            setCategories(updatedCategories);

            const updatedData = data.filter((item) => item.category !== categoryToDelete); // Filtrerar bort data i den valda kategorin
            setData(updatedData);

            if (category === categoryToDelete) setCategory('General'); // Återställer kategorin till 'General' om den borttagna är den aktuella
            saveData(updatedData)
                .catch((error) => {
                    console.error('Error deleting category:', error);
                    alert('Failed to delete category. Please try again later.');
                });
        }
    };

    // Filtrerar data baserat på den valda kategorin
    const filteredData = data.filter((item) => item.category === category);

    return (
        <div>
            {/* Formulär för inmatning */}
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

            {/* Kategori-väljare */}
            <CategorySelector
                categories={categories}
                category={category}
                setCategory={setCategory}
                label="Select Category"
            />

            {/* Lista över data */}
            <DataList
                filteredData={filteredData}
                handleEdit={handleEdit}
                handleRemove={handleRemove}
            />

            {/* Åtgärdsknappar */}
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
