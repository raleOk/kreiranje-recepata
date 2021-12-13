import React from "react";
import "./Nav.css";

const Nav = props => {
  const { profile, recipes } = props;
  return (
    <div className="nav-bar">
      <h1 onClick={profile}>Profile</h1>
      <h1 onClick={recipes}>Recipes</h1>
    </div>
  );
};

export default Nav;
