import React, { Component } from "react";
import ListContainer from "./ListContainer";
import Search from "./Search";
class App extends Component {
  constructor(props) {
    super(props);
    //Initialize the Search value to an Empty String
    this.state = {
      searchValue: '',
      fruitsToDisplay: this.props.fruits,
      fruitsNotToDisplay: [],
    };
  }
  handleSearchChange = (e) => {
    const textValue = e.target.value;
    //Take the text box current value
    //Filter the fruits array into new array

    const filteredFruitList=this.props.fruits.filter((fruit)=>{
      return fruit.toLowerCase().includes(textValue.toLowerCase());
    })

    const notfilteredFruitList=this.props.fruits.filter((fruit)=>{
      return !fruit.toLowerCase().includes(textValue.toLowerCase());
    })
    // console.log("Box", textValue);
    this.setState({
      searchValue: textValue,
      fruitsToDisplay: filteredFruitList,
      fruitsNotToDisplay: notfilteredFruitList,
    });
  };
  render() {
    return (
      <>
        <h1>Fruits</h1>
        <Search
          value={this.state.searchValue} //bounded to setState line16
          onChange={this.handleSearchChange}
        />
        <ListContainer fruits={this.state.fruitsToDisplay} />
        <ListContainer fruits={this.state.fruitsNotToDisplay} />
      </>
    );
  }
}

export default App;
