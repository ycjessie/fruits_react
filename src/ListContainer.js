import React, { Component } from 'react';
import ListItem from './ListItem';
class ListContainer extends Component {
    render() { 
        return ( 

            <ul>
                <li>
                    <ListItem name={"fake items"}/>
                    <ListItem name={"fake items"}/>
                    <ListItem name={"fake items"}/>
                </li>
            </ul>

         );
    }
}
 
export default ListContainer;