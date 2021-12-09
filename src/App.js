import React, { useState } from "react";
import Registration from "./components/Registration/Registration";
import Profile from "./components/Profile/Profile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const isLoggedInHandler = () => {
    setIsLoggedIn(true);
  };
  const isLoggedOutHandler = () => {
    setIsLoggedIn(false);
  };

  const setUserDataHandler = obj => {
    setUserData(obj);
  };

  return (
    <div>
      {!isLoggedIn && (
        <Registration login={isLoggedInHandler} data={setUserDataHandler} />
      )}
      {isLoggedIn && (
        <Profile logout={isLoggedOutHandler} userData={userData} />
      )}
    </div>
  );
};

export default App;
