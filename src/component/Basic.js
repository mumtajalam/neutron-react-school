import React from "react";

const Product = (props) => {
  const plus = (ind) => {
    props.onVote("+", ind);
    // console.log({ ind });
  };
  const minus = (ind) => {
    props.onVote("-", ind);
    // console.log({ ind });
  };
  return (
    <li className="d-flex justify-content-evenly">
      <span>{props.product.name}</span> -{" "}
      <span>votes: {props.product.votes}</span>
      <button onClick={() => plus(props.index)}>+</button>{" "}
      <button onClick={() => minus(props.index)}>-</button>
    </li>
  );
};

const GroceryApp = () => {
  let [products, setProducts] = React.useState([
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 },
  ]);
  const onVote = (dir, index) => {
    const Products = [...products];
    if (dir === "+") {
      Products[index].votes = Products[index].votes + 1;
      setProducts(Products);
    } else {
      Products[index].votes = Products[index].votes - 1; 
      setProducts(Products);
    }
  };

  return (
    <ul>
      {products.map((product, index) => (
        <Product key={index} onVote={onVote} index={index} product={product} />
      ))}
    </ul>
  );
};
export default GroceryApp;
