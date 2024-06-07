# Met Museum Artwork Explorer

The Met Museum Artwork Explorer is a web application that allows users to explore artworks from the Metropolitan Museum of Art. It provides a user-friendly interface to browse artworks by department, view artwork details, and discover random selections of highlighted works by artists.

## Features

- Browse artworks by selecting a department from the dropdown menu
- View artwork details, including title, artist, year, and a link to the artwork's page on the Met Museum website
- Click on an artist's name to navigate to a separate page showcasing a random selection of their highlighted works
- Responsive design that adapts to different screen sizes

## Technologies Used

- React.js
- Bootstrap
- Met Museum Collection API

## Getting Started

To run the Met Museum Artwork Explorer on your local machine, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/amandagun-ag/met.git
   ```

2. Navigate to the project directory:
   ```
   cd met
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your web browser and visit the localhost URL provided by the development server. It may be one of the following:
   - `http://localhost:3000`
   - `http://localhost:5173`
   - `http://localhost:5175`

   The exact URL will be displayed in the terminal when you run `npm run dev`.

## Folder Structure

The project structure is organized as follows:

```
met-museum-artwork-explorer/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── api/
  │   │   └── metAPI.js
  │   ├── components/
  │   │   ├── ArtistWorks.jsx
  │   │   ├── ArtworkDisplay.jsx
  │   │   └── DepartmentDropdown.jsx
  │   ├── App.css
  │   ├── App.jsx
  │   └── index.js
  ├── .gitignore
  ├── package.json
  └── README.md
```

- The `public/` directory contains the `index.html` file, which serves as the entry point for the application.
- The `src/` directory contains the application source code.
  - The `api/` directory contains the `metAPI.js` file, which handles API requests to the Met Museum Collection API.
  - The `components/` directory contains reusable components used in the application.
    - `ArtistWorks.js`: Displays a random selection of highlighted works by a specific artist.
    - `ArtworkDisplay.js`: Renders the artwork cards and handles shuffling of artworks.
    - `DepartmentDropdown.js`: Provides a dropdown menu to select a department.
  - `App.css`: Contains custom styles for the application.
  - `App.jsx`: The main component that brings together all the components and handles the application logic.
  - `index.js`: The entry point of the application.
- `.gitignore`: Specifies files and directories that should be ignored by Git.
- `package.json`: Contains project dependencies and scripts.
- `README.md`: Provides information about the project and instructions for running the application.

## API Usage

The Met Museum Artwork Explorer utilizes the Met Museum Collection API to fetch artwork data. The API endpoints used in this application are:

- `https://collectionapi.metmuseum.org/public/collection/v1/departments`: Retrieves a list of departments.
- `https://collectionapi.metmuseum.org/public/collection/v1/search`: Searches for artworks based on department and other criteria.
- `https://collectionapi.metmuseum.org/public/collection/v1/objects/{objectID}`: Retrieves details of a specific artwork.

Please note that the Met Museum Collection API has certain usage limits and requires adherence to their terms of service. Make sure to review and comply with their guidelines when using the API.

## Acknowledgements

- This application was developed using data from the Metropolitan Museum of Art Collection API.
- The artwork images and information are provided by the Metropolitan Museum of Art.

## License

This project is licensed under the [MIT License](LICENSE).
