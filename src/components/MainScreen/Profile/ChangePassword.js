import React, { useState } from "react";
import "./ChangePassword.css";

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

    //this should be a function that sends the newPassword to the database, and changes it, I am instead printing it to the screen
    console.log(newPassword);
  };
  return (
    <div>
      <label htmlFor="currPassword" className="cpLabel">
        Unesi staru lozinku:{" "}
      </label>
      <input
        type="text"
        id="currPassword"
        onChange={currPasswordHandler}
        className="cpInput"
      />
      <label htmlFor="newPassword" className="cpLabel">
        Unesi novu lozinku:{" "}
      </label>
      <input
        type="text"
        id="newPassword"
        onChange={newPasswordHandler}
        className="cpInput"
      />

      <button type="button" onClick={onSubmit} className="chButton">
        Promeni lozinku
      </button>
      <button type="button" onClick={toggle} className="chButton">
        Nazad
      </button>
      <div>{newPassword}</div>
    </div>
  );
};

export default ChangePassword;
