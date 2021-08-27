import React, { Component } from 'react';
import groceries from './data.js';
import GroceryList from './GroceryList.js';
//console.log(groceries)
class App extends Component {
  state = {
		products: groceries,
    // we can assign default values to our state properties
    // value: ''
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    isPurchased: false
	};
  
  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <h2>ADD:List</h2>
        {console.log(this.state.products)}
        <form>
        <label htmlFor="item">Item: </label>
          <input type="text" value={this.state.item} onChange={this.handleChange} id="item" />
          <br />
          <label htmlFor="brand">Brand: </label>
          <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"/>
          <br />
          <label htmlFor="units">Units: </label>
          <input type="text" value={this.state.units} onChange={this.handleChange} id="units" />
          <br />
          <label htmlFor="quantity">Guantity: </label>
          <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity"/>
          <br />
          <input type="submit" />
        </form>
        <div className="preview">
          <h2>Preview our new item</h2>
          <h5>{this.state.item}</h5>
          <h5>{this.state.brand}</h5>
          <h5>{this.state.units}</h5>
          <h5>{this.state.quantity}</h5>
        </div>
        <ul>
        {this.state.products.map((product, index) => {
						return (
              //<li>
                 //{product.item}
              //</li>
              <GroceryList key={index} product={product} />
						);
					})}
        </ul>
      </div>
      
    );
  }
}

export default App;
