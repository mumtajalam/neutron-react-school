import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    console.log(".....constructor.......");
    this.state = {
      count: 0,
    };
  }
  componentDidMount = () => {
    console.log("......component did mount.....");
  };
  componentDidUpdate = () => {
    console.log(".....component did update......");
  };

  updateFn = () => {
    console.log(".......update........");
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    console.log("........render.......");
    return (
      <>
        <h1>Test of LifeCycle Methode</h1>
        CountUpdate: {this.state.count}
        <button onClick={this.updateFn}>update</button>
      </>
    );
  }
}
export default ClassComp;
