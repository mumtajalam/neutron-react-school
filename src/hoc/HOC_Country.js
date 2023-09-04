import React, { Component } from "react";
import WithFilter from "./WithFilter";

const country_list = [
  "India",
  "USA",
  "Ukraine",
  "Nepal",
  "Sri Lanka",
  "Pakistan",
  "UK",
  "Poland",
  "UAE",
];

class HOC_Country extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>{this.props.list && this.props.list.map((item) => <div>{item}</div>)}</>
    );
  }
}
export default WithFilter(HOC_Country, country_list);
