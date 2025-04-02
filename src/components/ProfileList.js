// // components/ProfileList.js

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const ProfileList = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Retrieve profiles from localStorage
//   const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

//   const filteredProfiles = profiles.filter((profile) =>
//     profile.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Profiles</h2>
//       <input
//         type="text"
//         placeholder="Search by name..."
//         className="search-input"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-3 gap-4 mt-4">
//         {filteredProfiles.map((profile) => (
//           <div key={profile.id} className="profile-card">
//             <img
//               src={profile.image}
//               alt={profile.name}
//               className="profile-img"
//             />
//             <h3>{profile.name}</h3>
//             <p>{profile.description}</p>
//             <Link to={`/profile/${profile.id}`} className="btn">
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileList;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProfileList.css";  // Import Profile List styles


const ProfileList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-center my-4">Profiles</h2>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="col-md-4 mb-4">
            <div className="card text-center shadow profile-card">
              <div className="card-body">
                <img src={profile.image} className="profile-img-small rounded-circle" alt={profile.name} />
                <h5 className="card-title mt-2">{profile.name}</h5>
                <p className="card-text text-muted">{profile.description}</p>
                <Link to={`/profile/${profile.id}`} className="btn btn-primary btn-sm">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileList;
