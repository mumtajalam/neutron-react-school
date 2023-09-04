import React, { Component } from "react";
import WithFilter from "./WithFilter";

const state_list = [
  "Delhi",
  "UP",
  "Chhatisgarh",
  "Bihar",
  "Rajasthan",
  "Jharkhand",
  "Goa",
  "Tamilnadu",
  "J&K",
  "Maharashtra",
  "Haryana",
];

const HOC_State = (props) => {
  return <>{props.list && props.list.map((item) => <div>{item}</div>)}</>;
};

export default WithFilter(HOC_State, state_list);
