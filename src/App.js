import React, { Component } from 'react';
import ListContainer from './ListContainer';
import Search from './Search';
class App extends Component {
  render() { 

    return (
      <>
        <h1>Fruits</h1>
        <Search />
        <ListContainer />
        
      </>
    );
  }
}
 
export default App;

