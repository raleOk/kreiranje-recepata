import React, { useState } from "react";
import ChangePassword from "./ChangePassword";
import ProfileScreen from "./ProfileScreen";

const Profile = props => {
  const [showChangePassword, setChangePassword] = useState(false);

  const { userData, logout } = props;

  const toggleChangePassword = () => {
    setChangePassword(prevState => {
      return !prevState;
    });
  };

  return (
    <div>
      {showChangePassword ? (
        <ChangePassword
          toggle={toggleChangePassword}
          userPassword={userData.password}
        />
      ) : (
        <ProfileScreen
          userData={userData}
          logout={logout}
          toggle={toggleChangePassword}
        />
      )}
    </div>
  );
};

export default Profile;
