import React from "react";

class CricketChild extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { temp, name, location } = this.props;
    return (
      <>
        -----------------------------
        <div>count:-{temp}</div>
        <div>name:-{name}</div>
        <div>location:-{location}</div>
      </>
    );
  }
}
export default CricketChild;
