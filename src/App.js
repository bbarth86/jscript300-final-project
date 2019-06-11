import React, { Component } from 'react';
import Product from './Product.js';
import ShoppingCart from './ShoppingCart.js';
import ManageInventory from './ManageInventory.js';
import InventoryData from './InventoryData.json';
import Checkout from './Checkout.js';
import './store-styles.css';

export default class App extends Component {   

  // Set initial state for cart, inventory

  state = {
    cart: {},
    inventory: []
  };

  componentDidMount() {
    this.setState({ inventory: InventoryData }); // Initial load of inventory data
  }

 /**
   * Display Methods
   * 
   * hideShowInventory: Control display of Inventory Component, Hide/Show button
   * checkout: Control display of Checkout component, Products, Inventory, etc.
   * returnShop: Control display of Checkout component, Products, Hide/Show button, etc. Return user to "Shopping" UI.
   * 
   */ 

  hideShowInventory = (e) => {
    e.preventDefault(); 
    const invMenu = document.getElementById('inventory-menu');
    const hideShowBtn = document.getElementById('hideShowBtn');
    invMenu.classList.toggle("hidden");
    if (hideShowBtn.innerHTML === "Hide Inventory") {
      hideShowBtn.innerHTML = "Show Inventory";
    }
    else hideShowBtn.innerHTML = "Hide Inventory";
  };

  checkout = (e) => {
    e.preventDefault();
    const hideShowBtn = document.getElementById('hideShowBtn')
    const invMenu = document.getElementById('inventory-menu');
    const checkoutMenu = document.getElementById('checkout-menu');
    const checkoutBtn = document.getElementById('checkout-btn');
    const prdMenu = document.getElementById('product-menu');
    checkoutMenu.classList.replace("hidden","addInv-wrp");
    prdMenu.classList.replace("prod-wrpr","hidden");
    hideShowBtn.classList.toggle("hidden");
    checkoutBtn.classList.toggle("hidden");

    if (invMenu.classList.contains("hidden")) {
      return;
    }
    else invMenu.classList.toggle("hidden");
  };

  returnShop = (e) => {
    e.preventDefault();
    const hideShowBtn = document.getElementById('hideShowBtn')
    const invMenu = document.getElementById('inventory-menu');
    const checkoutMenu = document.getElementById('checkout-menu');
    const checkoutBtn = document.getElementById('checkout-btn');
    const prdMenu = document.getElementById('product-menu');
    checkoutMenu.classList.replace("addInv-wrp","hidden");
    prdMenu.classList.replace("hidden","prod-wrpr");
    invMenu.classList.values("hidden");
    hideShowBtn.classList.toggle("hidden");
    checkoutBtn.classList.toggle("hidden");

  };


   /**
   * Inventory Methods
   * 
   * addProduct: Add product from inventory form; Validate input for price, url; Update inventory
   * removeFromInventory: Remove product from inventory; Ensure removal of product from cart when removed from inventory;
   * loadInventoryData: Reset inventory to default inventory; Clear cart;
   * clearInventoryData: Remove all inventory; Clear cart;
   * 
   */

  addProduct = (product,e) => {

    let price = document.getElementById('add-price').value;
    let priceRGEX = /^[0-9]*$/;
    let priceValidate = priceRGEX.test(price);
    let url = document.getElementById('add-url').value;
    let urlRGEX = /https?\:\/\/.+\..+/;
    let urlValidate = urlRGEX.test(url);
    if (priceValidate == false) {
      alert('Please enter a valid price');
      return false;
    }
    if (urlValidate == false) {
      alert('Please enter a valid URL');
      return false;
    }
    else {
      const inventory = {...this.state.inventory};
      inventory[`product${Date.now()}`] = product;
      this.setState({inventory});
      e.currentTarget.reset();
    }
    
  };

  removeFromInventory = (key,e) => {
    const inv = {...this.state.inventory};
    const cart = {...this.state.cart};
    delete cart[key];
    this.setState({cart: cart});
    delete inv[key];
    this.setState({inventory: inv});
  };

  loadInventoryData = (e) => {
    this.setState({cart: {}});
    this.setState({inventory: InventoryData });
  };

  clearInventoryData = () => {
    this.setState({cart: {}});
    this.setState({inventory: {}});
  };

   /**
   * Cart Methods
   * 
   * addToCart: Add 1 qty of product to cart
   * removeFromCart: Remove product from cart
   */

  addToCart = (key) => {
   const cart = {...this.state.cart};
    cart[key] = cart[key] + 1 || 1;
    this.setState({cart: cart});
  };

  removeFromCart = (key) => {
    const cart = {...this.state.cart};
    delete cart[key];
    this.setState({cart: cart});
  };

    render () {
      
      return (
        <div className="app-wrpr">
          <div>
            <div className="prd-wrp">
              <h2>FRESH AND FAST - BROWSE PRODUCTS</h2>
              <div className="admin-btn">
                        <button  id="hideShowBtn" onClick={this.hideShowInventory}>Manage Inventory</button>
              </div>
            </div>
            
          </div>
          <div id="product-menu" className="prod-wrpr">
            {Object.keys(this.state.inventory).map(key => (
              <div key={key}>
                <Product key={key} idx={key} data={this.state.inventory[key]} addToCart={this.addToCart} />
              </div>
            ))}
          </div>
          <div>
            <ShoppingCart checkout={this.checkout} removeFromCart={this.removeFromCart} calculateTotalPrice={this.calculateTotalPrice} inventory={this.state.inventory} cart={this.state.cart}/>
          </div>
          <div>
            <ManageInventory loadInventoryData={this.loadInventoryData} clearInventoryData={this.clearInventoryData} addProduct={this.addProduct} removeFromInventory={this.removeFromInventory} inventory={this.state.inventory} cart={this.state.cart} />
          </div>
          <div>
            <Checkout returnShop={this.returnShop}/>
          </div>
      </div>  
      )
      } 
    
}

