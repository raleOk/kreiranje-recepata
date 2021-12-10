import React from "react";

const Profile = props => {
  return (
    <div>
      <div>{props.userData.firstName}</div>
      <div>{props.userData.lastName}</div>
      <button type="button" onClick={props.logout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
