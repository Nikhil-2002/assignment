// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminPanel = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [newProfile, setNewProfile] = useState({
//     name: "",
//     image: "",
//     description: "",
//     contact: "",
//     interests: "",
//     address: "",
//   });
//   const [editingProfileId, setEditingProfileId] = useState(null);

//   const navigate = useNavigate();

//   // Load profiles from localStorage when the component mounts
//   useEffect(() => {
//     const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];

//     if (storedProfiles.length === 0) {
//       const exampleProfiles = [
//         {
//           id: 1,
//           name: "John Doe",
//           image: "/images/assPass.jpeg",
//           description: "Software Developer from San Francisco.",
//           contact: "john.doe@email.com",
//           interests: "Coding, Hiking, Traveling",
//           address: "San Francisco, CA",
//         },
//         {
//           id: 2,
//           name: "Jane Smith",
//           image: "/images/assPass.jpeg",
//           description: "Graphic Designer based in New York.",
//           contact: "jane.smith@email.com",
//           interests: "Design, Photography, Reading",
//           address: "New York, NY",
//         },
//       ];
//       localStorage.setItem("profiles", JSON.stringify(exampleProfiles));
//       setProfiles(exampleProfiles); // Update state to reflect example profiles
//     } else {
//       setProfiles(storedProfiles);
//     }
//   }, []);

//   const handleAddProfile = () => {
//     const updatedProfiles = [
//       ...profiles,
//       { id: Date.now(), ...newProfile },
//     ];
//     setProfiles(updatedProfiles);
//     localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
//     setNewProfile({
//       name: "",
//       image: "",
//       description: "",
//       contact: "",
//       interests: "",
//       address: "",
//     });
//   };

//   const handleEditProfile = (id) => {
//     const profileToEdit = profiles.find((profile) => profile.id === id);
//     setNewProfile(profileToEdit);
//     setEditingProfileId(id);
//   };

//   const handleSaveEdit = () => {
//     const updatedProfiles = profiles.map((profile) =>
//       profile.id === editingProfileId ? { ...profile, ...newProfile } : profile
//     );
//     setProfiles(updatedProfiles);
//     localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
//     setEditingProfileId(null);
//     setNewProfile({
//       name: "",
//       image: "",
//       description: "",
//       contact: "",
//       interests: "",
//       address: "",
//     });
//   };

//   const handleDeleteProfile = (id) => {
//     const updatedProfiles = profiles.filter((profile) => profile.id !== id);
//     setProfiles(updatedProfiles);
//     localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
//   };

//   return (
//     <div>
//       <h2>Admin Panel</h2>
//       <input
//         type="text"
//         placeholder="Name"
//         value={newProfile.name}
//         onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Image URL"
//         value={newProfile.image}
//         onChange={(e) => setNewProfile({ ...newProfile, image: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={newProfile.description}
//         onChange={(e) =>
//           setNewProfile({ ...newProfile, description: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Contact"
//         value={newProfile.contact}
//         onChange={(e) => setNewProfile({ ...newProfile, contact: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Interests"
//         value={newProfile.interests}
//         onChange={(e) =>
//           setNewProfile({ ...newProfile, interests: e.target.value })
//         }
//       />
//       <input
//         type="text"
//         placeholder="Address"
//         value={newProfile.address}
//         onChange={(e) =>
//           setNewProfile({ ...newProfile, address: e.target.value })
//         }
//       />
//       {editingProfileId ? (
//         <button onClick={handleSaveEdit}>Save Edit</button>
//       ) : (
//         <button onClick={handleAddProfile}>Add Profile</button>
//       )}

//       <h3>Existing Profiles</h3>
//       <ul>
//         {profiles.map((profile) => (
//           <li key={profile.id}>
//             {profile.name}{" "}
//             <button onClick={() => handleEditProfile(profile.id)}>Edit</button>
//             <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminPanel = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: "", image: "", description: "", contact: "", interests: "", address: "" });
  const [editingProfileId, setEditingProfileId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  const handleAddProfile = () => {
    const updatedProfiles = [...profiles, { id: Date.now(), ...newProfile }];
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    setNewProfile({ name: "", image: "", description: "", contact: "", interests: "", address: "" });
  };

  const handleEditProfile = (id) => {
    const profileToEdit = profiles.find((profile) => profile.id === id);
    setNewProfile(profileToEdit);
    setEditingProfileId(id);
  };

  const handleSaveEdit = () => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === editingProfileId ? { ...profile, ...newProfile } : profile
    );
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
    setEditingProfileId(null);
    setNewProfile({ name: "", image: "", description: "", contact: "", interests: "", address: "" });
  };

  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
  };

  return (
    <div className="container">
      <h2 className="text-center my-4">Admin Panel</h2>
      <div className="card p-4 shadow">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" value={newProfile.name} onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Image URL" value={newProfile.image} onChange={(e) => setNewProfile({ ...newProfile, image: e.target.value })} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Description" value={newProfile.description} onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Contact" value={newProfile.contact} onChange={(e) => setNewProfile({ ...newProfile, contact: e.target.value })} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Interests" value={newProfile.interests} onChange={(e) => setNewProfile({ ...newProfile, interests: e.target.value })} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Address" value={newProfile.address} onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })} />
        </div>
        {editingProfileId ? (
          <button className="btn btn-success" onClick={handleSaveEdit}>Save Edit</button>
        ) : (
          <button className="btn btn-primary" onClick={handleAddProfile}>Add Profile</button>
        )}
      </div>

      <h3 className="text-center mt-4">Existing Profiles</h3>
      <ul className="list-group">
        {profiles.map((profile) => (
          <li key={profile.id} className="list-group-item d-flex justify-content-between align-items-center">
            {profile.name}
            <div>
              <button className="btn btn-warning mx-2" onClick={() => handleEditProfile(profile.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
