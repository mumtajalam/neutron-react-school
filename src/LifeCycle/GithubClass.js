import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issueList: [],
      pageNum: 1,
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  }
  callapi = (num) => {
    fetch(
      `https://api.github.com/repositories/1296269/issues?page=${num}&per_page=5`
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({
          ...this.state,
          issueList: response,
        });
      });
  };
  componentDidMount = () => {
    this.callapi(1);
  };

  updatePageNum = (num) => {
    this.setState({
      ...this.state,
      pageNum: num,
    });
    this.callapi(num);
  };

  componentDidUpdate = () => {
    console.log("state......", this.state);
  };

  render() {
    return (
      <>
        <h1>Test of LifeCycle Methode</h1>
        <button className="btn btn-sm btn-primary m-1">Previous</button>
        {this.state.buttons &&
          this.state.buttons.map((item) => {
            return (
              <button
                className="btn btn-sm btn-primary p-1"
                onClick={() => this.updatePageNum(item)}
              >
                {item}
              </button>
            );
          })}
        <button className="btn btn-sm btn-primary m-1">Next</button>
        <table className="table table-striped table-responsive">
          <thead>
            <th>Number</th>
            <th>Title</th>
            <th>Avatar</th>
            <th>Status</th>
          </thead>
          <tbody>
            {this.state.issueList &&
              this.state.issueList.map((item) => {
                return (
                  <tr>
                    <td>{item.number}</td>
                    <td>{item.title}</td>
                    <td>{item.user.avatar_url}</td>
                    <td>{item.state}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}
export default ClassComp;
