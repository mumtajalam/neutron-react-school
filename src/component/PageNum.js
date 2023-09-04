import React, { useState } from "react";

const PageNum = () => {
  const [PageNum, setPageNum] = useState([1, 2, 3, 4, 5]);
  return (
    <div>
      <button
        className="btn btn-primary m-1"
        onClick={() => {
          const prevNumbers = PageNum.map((number) => {
            return number - 5;
          });
          setPageNum(prevNumbers);
        }}
      >
        prev page{" "}
      </button>
      {PageNum &&
        PageNum.map((number) => {
          return (
            <div className="btn btn-primary" key={number}>
              {number}
            </div>
          );
        })}

      <button
        className="btn btn-primary m-1"
        onClick={() => {
          const nextNumbers = PageNum.map((number) => {
            return number + 5;
          });
          setPageNum(nextNumbers);
        }}
      >
        next page{" "}
      </button>
    </div>
  );
};

export default PageNum;
