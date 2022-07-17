import React from "react";
import CricketChild from "./CricketChild";

class Cricket extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    let name = "mumtaj";
    return (
      <>
        <div>count:-{this.state.count}</div>
        <button className="btn btn-success" onClick={this.inc}>
          INC
        </button>
        <br></br>
        <CricketChild temp={this.state.count} name={name} location="rrrrr" />
      </>
    );
  }
}

export default Cricket;
