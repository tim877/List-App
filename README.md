# List App

## Beskrivning

List App är en webbaserad applikation som gör det möjligt för användare att skapa, organisera och hantera listor med olika kategorier. Applikationen låter användaren lägga till nya kategorier, redigera och ta bort objekt inom en kategori, samt rensa data i en specifik kategori. Den är designad för att vara enkel och intuitiv att använda.

## Dependencies

```bash
npm install
npm install @mui/material @emotion/react @emotion/styled axios cors concurrently react-router-dom
```

## Funktioner

### 1. Skapa nya kategorier

- Användare kan skapa nya kategorier för att organisera data.

### 2. Visa data i en kategori

- Användare kan välja en kategori och visa tillhörande data.

### 3. Lägg till nya objekt

- Användare kan lägga till nya objekt till en specifik kategori.

### 4. Redigera och ta bort objekt

- Användare kan redigera texten i objekt eller ta bort dem från listan.

### 5. Rensa data i en kategori

- Användare kan rensa all data inom en specifik kategori.

### 6. Ta bort kategorier

- Användare kan ta bort hela kategorier, förutom den förvalda kategorin "General".

## Starta Appen

### Starta utvecklingsservern:

```bash
npm start
```

## Användning

### 1. Skapa en lista:

- Fyll i textfältet med önskat objekt och välj en kategori.
- Klicka på "Submit" för att lägga till objektet i den valda kategorin.

### 2. Redigera och ta bort objekt:

- Klicka på "Edit" för att ändra texten i ett objekt.
- Klicka på "Delete" för att ta bort ett objekt från listan.

### 3. Rensa data i en kategori:

- Välj en kategori från dropdown-menyn och klicka på "Clear All Data In Category" för att rensa all data i den valda kategorin.

### 4. Hantera kategorier:

- Klicka på "Add Category" för att skapa en ny kategori.
- Välj en kategori från dropdown-menyn och klicka på "Delete Selected Category" för att ta bort en kategori.

## Teknologier

- **React**: För användargränssnittet och komponentstruktur.
- **Material-UI**: För styling och UI-komponenter.
- **Axios**: För att hantera API-anrop.
- **Node.js & Express**: Används på server-sidan för att hämta och spara data.
