import React, { useState } from "react";
import Register from "./Register/Register";
import Login from "./Login/Login";

const UserForm = props => {
  const [toggleForm, setToggleForm] = useState(true);

  const { logIn } = props;

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
        <Login toggle={toggle} logIn={logIn} passData={passData} />
      ) : (
        <Register toggle={toggle} logIn={logIn} passData={passData} />
      )}
      <button type="button" onClick={toggle}>
        {toggleForm
          ? "Nisi registrovan? Napravi nov nalog"
          : "Već imaš nalog? Uloguj se"}
      </button>
    </div>
  );
};

export default UserForm;
