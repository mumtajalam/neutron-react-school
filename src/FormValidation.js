import React, { useState } from "react";

const FormValidation = () => {
  const [formstatus, setFormStatus] = useState(false);

  const initialState = { username: "", email: "", password: "" };

  const [FormData, setForData] = useState(initialState);
  const [formError, setFormError] = useState({});

  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("formData", FormData);
    let retError = ValidateForm(FormData);
    setFormError(retError);
    if (Object.keys(retError).length === 0) {
      setFormStatus(true);
      //api call submit data...
      setForData(initialState);
    }
  };

  const ValidateForm = (Form_Data) => {
    let error = {};
    if (!Form_Data.username) {
      error.username = "please enter username...";
    }
    if (!Form_Data.email) {
      error.email = "please enter email...";
    }
    if (Form_Data.password.length < 10) {
      error.password = "please enter 10 charecter password...";
    }
    if (!Form_Data.username.match(/[A-Za-z]/)) {
      error.username = "please enter charecter...";
    }
    return error;
  };

  const handlechange = (event) => {
    console.log("event", event.target.value, event.target.name);
    setForData({ ...FormData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <h1>Registeration Form</h1>
      <br></br>
      <form>
        Name:
        <input
          type="text"
          name="username"
          onChange={handlechange}
          value={FormData.username}
        />
        <div className="text-danger">{formError.username}</div>
        <br></br>
        Email:
        <input
          type="email"
          name="email"
          onChange={handlechange}
          value={FormData.email}
        />
        <div className="text-danger">{formError.email}</div>
        <br></br>
        Password:
        <input
          type="password"
          name="password"
          onChange={handlechange}
          value={FormData.password}
        />
        <div className="text-danger">{formError.password}</div>
        <br></br>
        <button type="submit" onClick={handlesubmit}>
          Resister
        </button>
      </form>
      <br></br>
      {formstatus && <div>form successfully submitted...</div>}
      <br></br>
    </>
  );
};

export default FormValidation;
