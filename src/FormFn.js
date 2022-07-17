import React, { useState } from "react";

const FormFn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formstatus, setFormStatus] = useState(false);
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log("FormData", username, email, password);
    setFormStatus(true);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const inputusername = (event) => {
    setUsername(event.target.value);
  };
  const inputemail = (event) => {
    setEmail(event.target.value);
  };
  const inputpassword = (event) => {
    setPassword(event.target.value);
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
          onChange={inputusername}
          value={username}
        />
        <br></br>
        Email:
        <input type="email" name="email" onChange={inputemail} value={email} />
        <br></br>
        Password:
        <input
          type="password"
          name="password"
          onChange={inputpassword}
          value={password}
        />
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

export default FormFn;
