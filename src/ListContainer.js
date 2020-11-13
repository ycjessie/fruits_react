import React, { Component } from "react";
import ListItem from "./ListItem";
const Fruits = [
  "Mango",
  "Banana",
  "Leechi",
  "Orange",
  "Apple",
  "Pineapple",
  "Dates",
  "Grapes",
];
class ListContainer extends Component {
  render() {
    const allFruits = Fruits.map((fruit, index) => {
      return <ListItem name={fruit} key={index} />;
    });
    return (
      <ul>
        <li>{allFruits}</li>
      </ul>
    );
  }
}

export default ListContainer;
