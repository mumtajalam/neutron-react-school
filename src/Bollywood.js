import React, { useState } from "react";
// import "./css/styles.css";

const initialSate = [
  "india",
  "Nepal",
  "Bangladesh",
  "UK",
  "USA",
  "RUSSIA",
  "UKRAIN",
  "ENGLAIND",
  "SRI LANKA",
];

const Bollywood = () => {
  const [location, setLocation] = useState("");
  const [countryList, setCountryList] = useState(initialSate);

  const displayNorth = () => {
    setLocation("Hemishphere_north");
  };
  const displaySouth = () => {
    setLocation("Hemishphere_south");
  };
  return (
    <>
      <button className="btn btn-success " onClick={displayNorth}>
        India
      </button>
      <button className="btn btn-success" onClick={displayNorth}>
        Nepal
      </button>
      <button className="btn btn-success" onClick={displayNorth}>
        Sri Lanka
      </button>
      <button className="btn btn-success" onClick={displayNorth}>
        Chaina
      </button>
      <button className="btn btn-success" onClick={displaySouth}>
        Englaind
      </button>
      <button className="btn btn-success" onClick={displaySouth}>
        Russia
      </button>
      <button className="btn btn-success" onClick={displaySouth}>
        UK
      </button>
      <button className="btn btn-success" onClick={displaySouth}>
        USA
      </button>
      <br></br>
      Hemishphere -
      {location !== "" && location === "Hemishphere_north" ? (
        <span>North</span>
      ) : (
        <span>South</span>
      )}
      <br></br>
      <div>------------------------------------</div>
      <br></br>
      <ul>
        {countryList &&
          countryList.map((item, index) => {
            return <tr key={item + index}>{item}</tr>;
          })}
      </ul>
    </>
  );
};

export default Bollywood;
