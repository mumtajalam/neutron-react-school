import React, { useState } from "react";

const Classmates = [
  "Amir",
  "Nehal",
  "Faisal",
  "Suvro",
  "abdul",
  "suraj",
  "Ashwani",
];

const UseHook = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  const addToTeam = (name) => {
    setTeamMembers((members) => {
      return [...members, name];
    });
  };

  const removeFromTeam = (item) => {
    setTeamMembers((members) => {
      const result = [...members];
      result.splice(members.indexOf(item));
      return result;
    });
  };

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h3>Classmates</h3>
          <div className="list-group">
            {Classmates.map((item) => {
              if (teamMembers.includes(item)) return null;
              return (
                <li
                  key={item}
                  className="list-group-item bg-info m-1 d-flex justify-content-between align-items-center"
                >
                  {item}
                  <button
                    className="btn btn-primary"
                    onClick={() => addToTeam(item)}
                  >
                    Add
                  </button>
                </li>
              );
            })}
          </div>
        </div>
        <div className="col-6">
          <h3>Basket Team</h3>
          <div className="list-group">
            {teamMembers.map((item) => {
              return (
                <li
                  key={item}
                  className="list-group-item bg-info m-1 d-flex justify-content-between align-items-center"
                >
                  {item}
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromTeam(item)}
                  >
                    {" "}
                    Remove
                  </button>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseHook;
