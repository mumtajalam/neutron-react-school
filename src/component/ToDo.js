import React, { useState } from "react";

const ToDo = () => {
  const [tempinput, setTempinput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = () => {
    setTodo([...todo, tempinput]);
    setTempinput("");
  };
  return (
    <div>
      <input
        type="text"
        value={tempinput}
        onChange={(e) => setTempinput(e.target.value)}
      />
      <button className="btn btn-warning" onClick={handleSubmit}>
        Add
      </button>
      {todo &&
        todo.map((item, index) => {
          return <div key={item + index}>{item}</div>;
        })}
    </div>
  );
};

export default ToDo;
