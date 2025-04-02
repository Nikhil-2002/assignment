// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProfileList from "./components/ProfileList";
// import ProfileDetails from "./components/ProfileDetails";
// import AdminPanel from "./components/AdminPanel";
// import Navbar from "./components/Navbar";
// import MapComponent from "./components/MapComponent";
// import { ClipLoader } from "react-spinners";  // Importing a loading spinner
// import "leaflet/dist/leaflet.css";
// import "./styles/global.css";
// import "./styles/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate data fetching with a delay of 2 seconds
//     setTimeout(() => {
//       setLoading(false); // Set loading to false after data is "fetched"
//     }, 2000); // Example delay
//   }, []);

//   return (
//     <Router>
//       <div className="container mx-auto p-4">
//         <Navbar />
//         {loading ? (
//           <div className="loading-container">
//             <ClipLoader size={50} color="#007bff" loading={loading} />
//           </div>
//         ) : (
//           <Routes>
//             <Route path="/" element={<ProfileList />} />
//             <Route path="/profile/:id" element={<ProfileDetails />} />
//             <Route path="/admin" element={<AdminPanel />} />
//             <Route path="/map" element={<MapComponent />} />
//           </Routes>
//         )}
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import Navbar from "./components/Navbar";
import MapComponent from "./components/MapComponent";
import { ClipLoader } from "react-spinners";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import "./styles/App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div className="container py-4">
        <Navbar />
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <ClipLoader size={50} color="#007bff" loading={loading} />
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<ProfileList />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
