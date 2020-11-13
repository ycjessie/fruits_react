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
    fruitsToDisplay:this.props.fruits,
  });

};
  render() { 

    return (
      <>
        <h1>Fruits</h1>
        <Search value={this.state.searchValue}//bounded to setState line16
        onchange={this.handleSearchChange}/>
        <ListContainer fruits={this.state.fruitsToDisplay}/>
        
      </>
    );
  }
}
 
export default App;

