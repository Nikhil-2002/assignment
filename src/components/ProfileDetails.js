// components/ProfileDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileDetails = () => {
  const { id } = useParams(); // Get the profile ID from the URL parameters

  // Retrieve profiles from localStorage
  const profiles = JSON.parse(localStorage.getItem("profiles")) || [];

  // Find the profile by the ID
  const profile = profiles.find((profile) => profile.id === parseInt(id));

  // Handle case where profile is not found
  if (!profile) return <p className="error">Profile not found</p>;

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img
        src={profile.image}
        alt={profile.name}
        className="profile-img-large"
      />
      <p>{profile.description}</p>
      <p>
        <strong>Contact:</strong> {profile.contact}
      </p>
      <p>
        <strong>Interests:</strong> {profile.interests}
      </p>
      <p>
        <strong>Address:</strong> {profile.address}
      </p>
      <MapComponent address={profile.address} />
    </div>
  );
};

export default ProfileDetails;
