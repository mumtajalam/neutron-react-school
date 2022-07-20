import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handlesubmit = () => {
    setItem((oldvalue) => {
      return [...oldvalue, input];
    });
    setInput("");
  };

  const DeleteFn = (id) => {
    setItem((oldvalue) => {
      return oldvalue.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>ToDo List</h1>
            <br></br>
            <input
              type="text"
              value={input}
              placeholder="add item"
              onChange={handleChange}
            />
            <button onClick={handlesubmit}>Add</button>

            <ol>
              {item.map((temp, index) => {
                return (
                  <>
                    <li>{temp + index}</li>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
