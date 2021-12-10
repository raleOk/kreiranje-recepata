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

  const passData = obj => {
    props.setData(obj);
  };
  return (
    <div>
      {toggleForm ? (
        <Register toggle={toggle} logIn={props.logIn} passData={passData} />
      ) : (
        <Login toggle={toggle} logIn={props.logIn} passData={passData} />
      )}
      <button type="button" onClick={toggle}>
        {toggleForm
          ? "Već imaš nalog? Uloguj se"
          : "Nisi registrovan? Napravi nov nalog"}
      </button>
    </div>
  );
};

export default UserForm;
