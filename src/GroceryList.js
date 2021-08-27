import React, { Component } from 'react';

class GroceryList extends Component {
    render() {
        return (
            <div>
              {this.props.product.item}  
            </div>
        );
    }
}

export default GroceryList;