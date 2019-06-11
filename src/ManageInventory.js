import React, { Component } from 'react';
import AddNewProduct from './AddNewProduct.js';
import Inventory from './Inventory.js';
import PropTypes from 'prop-types';

export default class ManageInventory extends Component {

    render () {

    return (
        <div className="hidden" id="inventory-menu">
          <div className="prod-wrpr">
            <div className="hdr-wrp"><h2>FRESH AND FAST - INVENTORY</h2></div>
            <div></div>
          </div>
          <div className="prod-wrpr">
                {Object.keys(this.props.inventory).map(key => (
                    <div key={key}>
                        <Inventory key={key} idx={key} data={this.props.inventory[key]} removeFromInventory={this.props.removeFromInventory} />
                    </div>
                ))}
          </div>
          <div className="addInv-wrp">
                        <button onClick={this.props.loadInventoryData}>Reset Inventory</button>
                        <button onClick={this.props.clearInventoryData}>Clear All Inventory</button>
                    </div>
                    
                    <AddNewProduct addProduct={this.props.addProduct}/>
                </div>
      )
    } 
}

ManageInventory.propTypes = {
    inventory: PropTypes.array,
    removeFromInventory: PropTypes.func,
    loadInventoryData: PropTypes.func,
    clearInventoryData: PropTypes.func,
    addProduct: PropTypes.func
  };