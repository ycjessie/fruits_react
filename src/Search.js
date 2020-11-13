import React, { Component } from "react";
class Search extends Component {
  render() {
    return (
      <>
        <div>
          <label>Search Fruit </label>
          <input type="text" placeholder="search for?"
          value={this.props.value}
          onChange={this.props.onChange}></input>
        </div>
      </>
    );
  }
}

export default Search;
