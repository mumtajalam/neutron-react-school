import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const handleSubmit = () => {
    if (!inputData) {
      alert("fill the data");
    } else if (inputData && !toggleSubmit) {
      setItem(
        item.map((temp) => {
          if (temp.id === isEditItem) {
            return { ...item, name: inputData };
          }
          return temp;
        })
      );
      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
    } else {
      let allInput = { id: new Date().getTime().toString(), name: inputData };
      setItem([...item, allInput]);
      setInputData("");
    }
  };
  const editItem = (id) => {
    let newEditItem = item.find((temp) => {
      return temp.id === id;
    });
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  const deleteItem = (id) => {
    const deleteItem = item.filter((temp) => {
      return temp.id !== id;
    });
    setItem(deleteItem);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Add your List Here</h1>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            value={inputData}
            placeholder="add item"
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggleSubmit ? (
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={handleSubmit}
            ></i>
          ) : (
            <i
              className="fa fa-edit add-btn"
              title="Add Item"
              onClick={handleSubmit}
            ></i>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            {item &&
              item.map((temp) => {
                return (
                  <>
                    <div className="d-flex justify-content-between bg-info border border-rounded m-2 p-2">
                      <h4>{temp.name}</h4>
                      <div className="add_btn">
                        <i
                          className="far fa-edit add-btn p-2"
                          title="Edit item"
                          onClick={() => editItem(temp.id)}
                        ></i>
                        <i
                          className="far fa-trash-alt add-btn p-2"
                          title="Delete item"
                          onClick={() => deleteItem(temp.id)}
                        ></i>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
