import React from "react";

const ProfileScreen = props => {
  const { userData, toggle, logout } = props;

  return (
    <div>
      <h3>Username: {userData.firstName}</h3>
      <h3>E-mail: {userData.email}</h3>
      <button type="button" onClick={toggle}>
        Promeni lozinku?
      </button>
      <button type="button" onClick={logout}>
        Odjavi se.
      </button>
    </div>
  );
};

export default ProfileScreen;
