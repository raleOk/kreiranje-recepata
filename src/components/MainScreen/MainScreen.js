import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Profile from "./Profile/Profile";
import Recipes from "./Recipes/Recipes";

const MainScreen = props => {
  const [navToggle, setNavToggle] = useState("profile");
  const { logout, userData } = props;

  const profileToggle = () => {
    setNavToggle("profile");
  };
  const recipesToggle = () => {
    setNavToggle("recipes");
  };

  return (
    <div>
      <Nav profile={profileToggle} recipes={recipesToggle} />
      {navToggle === "profile" ? (
        <Profile logout={logout} userData={userData} />
      ) : (
        <Recipes />
      )}
    </div>
  );
};

export default MainScreen;
