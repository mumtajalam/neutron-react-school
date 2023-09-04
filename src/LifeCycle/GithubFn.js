import React, { useEffect, useState } from "react";

const GithubFn = () => {
  const [state, setState] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [buttons, setButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const callapi = async () => {
    const data = await fetch(
      `https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`
    );
    const response = await data.json();
    console.log(response);
    setState(response);
  };

  //   const updatPageNum = (num) => {
  //     setPageNum(num);
  //   };
  useEffect(() => {
    callapi();
  }, []);

  useEffect(() => {
    callapi();
  }, [pageNum]);
  return (
    <div>
      <h1>GithubFn</h1>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          const prevNumber = buttons.map((number) => {
            return number - 10;
          });
          setButtons(prevNumber);
        }}
      >
        Previous
      </button>
      {buttons &&
        buttons.map((item) => (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setPageNum(item)}
          >
            {item}
          </button>
        ))}
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          const nextNumbers = buttons.map((number) => {
            return number + 10;
          });
          setButtons(nextNumbers);
        }}
      >
        Next
      </button>
      {state.length > 0 ? (
        <table className="table table-striped table-responsive">
          <thead className="">
            <th>Number</th>
            <th>Title</th>
            <th>Image</th>
            <th>Status</th>
          </thead>
          <tbody>
            {state &&
              state.map((item) => (
                <tr>
                  <td>{item.number}</td>
                  <td>{item.title}</td>
                  <td>
                    {
                      <img
                        alt="logo"
                        src={item.user.avatar_url}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                        }}
                      />
                    }
                  </td>
                  <td>{item.state}</td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <div>
          <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
        </div>
      )}
    </div>
  );
};

export default GithubFn;
