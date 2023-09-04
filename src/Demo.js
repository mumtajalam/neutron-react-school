import React, { useEffect, useState } from "react";

// to get the data from localStorage

const getLocalItems = () => {
  let list = localStorage.getItem("Lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("Lists"));
  } else {
    return [];
  }
};

const Demo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const handleSubmit = () => {
    if (!input) {
      alert("Please fill the data");
    } else if (input && !toggleSubmit) {
      setItem(
        item.map((temp) => {
          if (temp.id === isEditItem) {
            return { ...item, name: input };
          }
          return temp;
        })
      );
      setToggleSubmit(true);
      setInput("");
      setIsEditItem(null);
    } else {
      const allInput = { id: new Date().getTime().toString(), name: input };
      setItem([...item, allInput]);
      setInput("");
    }
  };
  const deleteItem = (id) => {
    const deleteItems = item.filter((temp) => {
      return temp.id !== id;
    });
    setItem(deleteItems);
  };

  const editItem = (id) => {
    let newEditItem = item.find((temp) => {
      return temp.id === id;
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInput(newEditItem.name);
    setIsEditItem(id);
  };

  const remove = () => {
    setItem([]);
  };

  useEffect(() => {
    localStorage.setItem("Lists", JSON.stringify(item));
  }, [item]);
  return (
    <>
      <h2 className="text-center">Add Your Student Here</h2>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          value={input}
          placeholder="Enter student name"
          onChange={(e) => setInput(e.target.value)}
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

      <br></br>
      {item &&
        item.map((temp, id) => {
          return (
            <>
              <div key={temp.id} className="eachItem">
                <h3>{temp.name}</h3>
                <div className="btn">
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
      <div className="showItems d-flex justify-content-center">
        <button
          className="btn effect04 bg-warning"
          data-sm-link-text="Remove All"
          onClick={remove}
        >
          <span> CHECK LIST </span>{" "}
        </button>
      </div>
    </>
  );
};

export default Demo;
