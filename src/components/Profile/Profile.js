import React from "react";

const Profile = props => {
  return (
    <div>
      <div>Profile</div>
      <button type="button" onClick={props.logout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
