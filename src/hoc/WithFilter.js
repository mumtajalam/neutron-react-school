import React, { Component } from "react";

const WithFilter = (InputComponent, data) => {
  class OutputComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tempInput: "",
        orglist: data,
        filterlist: data,
      };
    }
    filterFn = (event) => {
      console.log("inside filter fn.....", event.target.value);
      let tempArr = this.state.orglist.filter((item) => {
        return (
          item.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
        );
      });
      this.setState({
        filterlist: tempArr,
        tempInput: event.target.value,
        orglist: this.state.orglist,
      });
    };
    render() {
      return (
        <>
          <br></br>
          <input type="text" onChange={(e) => this.filterFn(e)} />
          <InputComponent list={this.state.filterlist} />
        </>
      );
    }
  }
  return OutputComponent;
};

export default WithFilter;
