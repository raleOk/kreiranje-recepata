import React from "react";
import "./ProfileScreen.css";

const ProfileScreen = props => {
  const { userData, toggle, logout } = props;

  return (
    <div>
      <div className="profileScreen">
        <div className="profileInfo">Username: {userData.firstName}</div>
        <div className="profileInfo">E-mail: {userData.email}</div>
        <button type="button" onClick={toggle} className="profileButton">
          Promeni lozinku?
        </button>
        <button type="button" onClick={logout} className="profileButton">
          Odjavi se.
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
