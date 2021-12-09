import React, { useState } from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";

const UserForm = props => {
  const [toggleForm, setToggleForm] = useState(true);

  const toggle = () => {
    setToggleForm(prevState => {
      return !prevState;
    });
  };

  return (
    <div>
      {toggleForm ? (
        <Login toggle={toggle} logIn={props.logIn} />
      ) : (
        <Register toggle={toggle} logIn={props.logIn} />
      )}
      <button type="button" onClick={toggle}>
        {toggleForm
          ? "Napravi nov nalog!"
          : "Uloguj se sa već postojećim nalogom!"}
      </button>
    </div>
  );
};

export default UserForm;
