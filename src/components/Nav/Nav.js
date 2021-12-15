import React from "react";
import "./Nav.css";

const Nav = props => {
  const { profile, recipes } = props;
  return (
    <div className="nav-bar">
      <h1 onClick={profile}>Profil</h1>
      <h1 onClick={recipes}>Recepti</h1>
    </div>
  );
};

export default Nav;
