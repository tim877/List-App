# List App

## Description

List App is a web-based application that allows users to create, organize, and manage lists with different categories. The application enables users to add new categories, edit and delete items within a category, and clear data in a specific category. It is designed to be simple and intuitive to use.

## Dependencies

```bash
npm install
npm install @mui/material @emotion/react @emotion/styled axios cors concurrently react-router-dom
```

## Features

### 1. Create New Categories

- Users can create new categories to organize data.

### 2. View Data in a Category

- Users can select a category and view the associated data.

### 3. Add New Items

- Users can add new items to a specific category.

### 4. Edit and Delete Items

- Users can edit the text of items or delete them from the list.

### 5. Clear Data in a Category

- Users can clear all data within a specific category.

### 6. Delete Categories

- Users can delete entire categories, except for the default "General" category.

## Start the App

### Start the Development Server:

```bash
npm start
```

## Användning

### 1. Create a List:

- Fill in the text field with the desired item and select a category.
- Click "Submit" to add the item to the selected category.

### 2. Edit and Delete Items:

- Click "Edit" to change the text of an item.
- Click "Delete" to remove an item from the list.

### 3. Clear Data in a Category:

- Select a category from the dropdown menu and click "Clear All Data In Category" to clear all data in the selected category.

### 4. Manage Categories:

- Click "Add Category" to create a new category.
- Select a category from the dropdown menu and click "Delete Selected Category" to remove a category.

## Technologies

- **React**: For the user interface and component structure.
- **Material-UI**: For styling and UI components.
- **Axios**: For handling API requests.
- **Node.js & Express**: Used on the server-side for fetching and saving data.
