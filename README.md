# Profile Explorer with Interactive Map

## Overview
This is a React-based web application that allows users to explore profiles, view details, and see the geographical location of each profile on an interactive map. The application also includes an admin panel for adding, editing, and deleting profiles dynamically.

## Features
- **Profile Display:** Showcases user profiles with names, images, and descriptions.
- **Interactive Mapping:** Displays the user's location on a map using Leaflet.js.
- **Profile Details:** View an in-depth profile with contact information and interests.
- **Admin Panel:** Allows administrators to add, edit, and delete profiles.
- **Search & Filter:** Enables searching profiles by name.
- **Responsive Design:** Fully optimized for mobile and desktop views.
- **Loading Indicators:** Shows progress indicators while fetching data or rendering the map.

---

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
Ensure you have Node.js installed, then run:
```sh
npm install
```

### 3. Start the Development Server
```sh
npm start
```
This will start the React development server and open the project in your browser at `http://localhost:3000`.

---

## Project Structure
```
📂 your-repo-name
│── 📂 public           # Static assets
│── 📂 src              # Source code
│   │── 📂 components   # Reusable components
│   │── 📂 pages        # Page components (ProfileList, ProfileDetails, AdminPanel)
│   │── 📂 data         # JSON data storage for profiles
│   │── 📜 App.js       # Main app component
│   │── 📜 index.js     # Entry point
│── 📜 package.json     # Project dependencies
│── 📜 README.md        # Project documentation
```

---

## Usage
### 1. Viewing Profiles
- The homepage displays a list of profiles in a three-column grid layout.
- Clicking on a profile opens the details page with a map.
- The "Summary" button displays the profile location on the map.

### 2. Admin Panel
- Navigate to `/admin` to manage profiles.
- Add new profiles by entering details and clicking "Add Profile".
- Edit or delete profiles dynamically.

### 3. Search Functionality
- Use the search bar to filter profiles by name.

---

## Dependencies
- **React**: Frontend framework
- **React Router**: For navigation
- **Leaflet & React-Leaflet**: For interactive mapping
- **Bootstrap**: For styling and responsiveness
- **LocalStorage**: For saving profiles dynamically

---

## Deployment
### 1. Build the Project
```sh
npm run build
```
This creates an optimized production build in the `build/` folder.

### 2. Deploy to GitHub Pages (Optional)
Modify `package.json`:
```json
"homepage": "https://your-username.github.io/your-repo-name"
```
Then run:
```sh
git add .
git commit -m "Deploy"
npm run deploy
```



