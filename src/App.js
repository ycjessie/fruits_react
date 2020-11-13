import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Search from './Search';
class App extends Component {
  constructor(props){
    super(props);
    //Initialize the Search value to an Empty String
    this.state={
      searchValue:'Water',
    }
  
}
handleSearchChange=(e)=>{
  const textValue = e.target.value;
  console.log('Box', textValue);
  this.setState({
    searchValue:textValue,
  });

};
  render() { 

    return (
      <>
        <h1>Fruits</h1>
        <Search value={this.state.searchValue}
        onchange={this.handleSearchChange}/>
        <ListContainer />
        
      </>
    );
  }
}
 
export default App;

