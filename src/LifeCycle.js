import React, { useState, useEffect, useContext } from "react";
// import { DataAppContext } from "./common/DataApp";

const LifeCycle = () => {
  const [issuesList, setIssuesList] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [buttons, setButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  //   const loginDetails = useContext(DataAppContext);
  //   console.log(loginDetails);

  // const callApi = () => {
  //     fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`)
  //    .then(data => {
  //        return data.json();
  //    })
  //    .then(response => {
  //        console.log(response);
  //        //renderTable
  //        setIssuesList(response);
  //    })
  // }

  const callApi = async () => {
    const data = await fetch(
      `https://api.github.com/repositories/1296269/issues?page=${pageNum}&per_page=5`
    );
    const response = await data.json();
    console.log(response);
    setIssuesList(response);
  };

  const updatePageNum = (num) => {
    setPageNum(num);
  };

  useEffect(() => {
    callApi();
    // setTimeout(callApi, 5000);
  }, []);
  //componentDidMount - just one time trigger

  useEffect(() => {
    console.log("useeffect of githubfn got triggered...");
  });
  //componentDidMount and componentDidUpdate - trigger every time - re-render

  useEffect(() => {
    // console.log('in pagenum useEffect');
    callApi();
  }, [pageNum]);
  //trigger on every pageNum update

  useEffect(() => {
    return () => {
      console.log("-------------triggered on unmount------------");
    };
  }, []);
  //componentWillUnmount

  return (
    <>
      {/* <div className="row bg-info bg-opacity-50">
        <div className="col-9">
          {loginDetails.isLoggedIn && <div>Hi {loginDetails.userName}</div>}
        </div>
        <div className="col-3">
          {loginDetails.isLoggedIn ? (
            <button onClick={() => loginDetails.setLogin(false)}>Logout</button>
          ) : (
            <button onClick={() => loginDetails.setLogin(true)}>Login</button>
          )}
        </div>
      </div> */}
      <h2>Issues List</h2>
      {buttons &&
        buttons.map((item) => (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => updatePageNum(item)}
          >
            {item}
          </button>
        ))}
      <button className="btn btn-sm btn-primary">Next</button>

      {issuesList.length > 0 ? (
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>URL</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issuesList &&
              issuesList.map((item) => {
                return (
                  <tr>
                    <td>{item.number}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>{item.state}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div>
          <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />
        </div>
      )}
    </>
  );
};

export default LifeCycle;
