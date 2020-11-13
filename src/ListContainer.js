import React, { Component } from "react";
import ListItem from "./ListItem";

class ListContainer extends Component {
  render() {
    const allFruits = this.props.fruits.map((fruit, index) => {
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
