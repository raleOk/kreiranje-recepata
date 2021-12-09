import React, { useState } from "react";
import UserForm from "./components/UserForm/UserForm";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const onLogIn = () => {
    setIsLoggedIn(true);
  };
  const onLogOut = () => {
    setIsLoggedIn(false);
  };

  const setUserDataHandler = obj => {
    setUserData(obj);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <UserForm logIn={onLogIn} setData={setUserDataHandler} />
      ) : (
        <Profile logout={onLogOut} userData={userData} />
      )}
    </div>
  );
};

export default App;
