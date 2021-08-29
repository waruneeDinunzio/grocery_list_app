import React, { Component } from 'react';

class GroceryList extends Component {
    state = {
        isPurchased: false
    }

    render() {
        return (
            <div>
              <input type="checkbox" onClick={this.props.action} id="isPurchased" /> Item: {this.props.product.item} ({this.props.product.brand}, 
              {this.props.product.units}) for {this.props.product.quantity}
            </div>
        );
    }
}

export default GroceryList;