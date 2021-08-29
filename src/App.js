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
    isPurchased: false,
    groceryList: []
	};

  // create handleChange function to add the item when user fill out the form
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  // create handleSubmit to submit new item
  handleSubmit = (event) => {
    event.preventDefault()
    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: false
    }
    this.setState({
      item: '',
      brand: '',
      units: '',
      quantity: 0,
      isPurchased: false,
      products: [newItem, ...this.state.products]
    })
  }
  handleClickDelete = (event) => {
    event.target.parentElement.style.display = 'none'
    console.log(event.target.parentElement)
  }
  togglePurchased = (event) => {
    console.log(event.target.id)
    this.setState({
      [event.target.id]: !this.isPurchased
    })
    console.log(this.state.isPurchased)
  }

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <h2>ADD:List</h2>
        {console.log(this.state.products)}
        <form onSubmit={this.handleSubmit}>
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
          <input type="text" value={this.state.quantity}
          onClick={() => this.setState({quantity: ''})} 
          onChange={this.handleChange} id="quantity"/>
          <br />
          <input type="submit" />
        </form>
        <div className="preview">
          <h2>Preview new item you want to add:</h2>
          <h5>Item: {this.state.item}</h5>
          <h5>Brand: {this.state.brand}</h5>
          <h5>Units: {this.state.units}</h5>
          <h5>Quantity: {this.state.quantity}</h5>
        </div>
        <div>
          <h2>This is your Grocery List:</h2>
          <ul>
          {this.state.products.map((product, index) => {
              return (
                <GroceryList key={index} product={product} action={this.handleClickDelete} toggle={this.togglePurchased}/>
              );
            })}
          </ul>
          <h5>Click box to delete when you Purchased</h5>
        </div>
      </div>
    );
  }
}

export default App;
