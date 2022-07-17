import React from "react";
// import "./style.css";

const Word = () => {
  const [input, setInput] = React.useState("");
  const [count, setCount] = React.useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  React.useEffect(() => {
    let arr = input.trim().split(" ");
    if (input === "") {
      arr = [];
    }
    console.log(arr);
    setCount(arr.length);
  }, [input]);

  return (
    <div>
      <textarea onChange={handleChange} value={input} />
      <div>
        <p>
          Number of words : <span>{count}</span>
        </p>
      </div>
    </div>
  );
};
export default Word;
