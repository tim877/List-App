# Project Functions Overview

This project includes the following key functions to manage categorized text data:

## Functionalities

### Text Submission

- **Description**: Allows users to submit text with an associated category.
- **Usage**: Users enter text in the input field, select a category, and click "Submit."

### Category Management

1. **Add Category**
   - **Description**: Allows users to create new categories for organizing text.
   - **Usage**: Users can click "Add Category" to enter and add a new category.

2. **Delete Category**
   - **Description**: Enables users to delete an existing category.
   - **Usage**: Users select a category to delete and confirm the deletion.

3. **Select Category**
   - **Description**: Users can choose a category to view only the data entries within that category.
   - **Usage**: The selected category filters the displayed data accordingly.

### Data Editing and Deletion

1. **Edit Entry**
   - **Description**: Users can edit an existing text entry.
   - **Usage**: Clicking "Edit" beside an entry allows the user to modify the text.

2. **Delete Entry**
   - **Description**: Users can delete an individual text entry.
   - **Usage**: Clicking "X" beside an entry removes it from the list.

### Clear Category

- **Description**: Deletes all text entries within the currently selected category.
- **Usage**: Users click "Clear all text in selected category" and confirm the action.

---

Each of these functions works with a server-side backend that updates a `data.json` file, allowing the text data to persist between sessions.
