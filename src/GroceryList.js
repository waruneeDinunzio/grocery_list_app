import React, { Component } from 'react';

class GroceryList extends Component {
    
    render() {
        return (
            <li>
               <input type="checkbox" id= "isPurchased" onClick={this.props.toggle}/>Item: {this.props.product.item} ({this.props.product.brand}, 
              {this.props.product.units}) for {this.props.product.quantity}<input type="button" value="Click to delete" onClick={this.props.action} />
            </li>
        );
    }
}

export default GroceryList;