import React, { Component } from "react";
import ListItem from "./ListItem";

class ListContainer extends Component {
  render() {
    const allFruits = this.props.fruits.map((fruit, index) => {
      return <ListItem name={fruit} key={index} />;
    });
    return (
      <ul>
        {allFruits}
      </ul>
    );
  }
}

export default ListContainer;
