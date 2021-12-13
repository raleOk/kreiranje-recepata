import React, { useState } from "react";

const ChangePassword = props => {
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { userPassword, toggle } = props;

  const newPasswordHandler = event => {
    setNewPassword(event.target.value);
  };

  const currPasswordHandler = event => {
    setCurrPassword(event.target.value);
  };

  const onSubmit = () => {
    console.log("user", userPassword);
    if (currPassword === "" || newPassword === "") {
      alert("Enter passwords please.");
      return;
    }
    if (currPassword !== userPassword) {
      alert("Current password incorrect!");
      return;
    }
    if (newPassword.trim().length <= 6) {
      alert("Password must be longer.");
      return;
    }
    //change password in database and return to the profile screen by toggle()
  };
  return (
    <div>
      <label htmlFor="currPassword">Enter current password</label>
      <input type="text" id="currPassword" onChange={currPasswordHandler} />
      <label htmlFor="newPassword">Enter new password</label>
      <input type="text" id="newPassword" onChange={newPasswordHandler} />

      <button type="button" onClick={onSubmit}>
        Change!
      </button>
      <button type="button" onClick={toggle}>
        Cancel!
      </button>
    </div>
  );
};

export default ChangePassword;
