import React from "react";

class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handlesubmit = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handlesubmit}>INc</button>
      </>
    );
  }
}
export default Demo;
