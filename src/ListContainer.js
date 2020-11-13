import React, { Component } from 'react';
import ListItem from './ListItem';
class ListContainer extends Component {
    render() { 
        return ( 

            <ul>
                <li>
                    <ListItem />
                </li>
            </ul>

         );
    }
}
 
export default ListContainer;