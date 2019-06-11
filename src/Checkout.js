import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkout extends Component {
/**
 * 
 * Provide a checkout UI for user;
 * Intentionally left Submit Order without functional capacity at this time; Future objective would be to validate inputs, store order using similar ref logic as Add Product component
 * 
 */

    render () {
        
        return (
            <div id="checkout-menu" className="hidden">
            <form>
                <div className="inv-wrp">
                    <div className="inv-lbl">First Name</div>
                    <div className="inv-lbl">Last Name</div>
                </div>
                <div className="inv-wrp">
                    <input className="text-input"  name="title"  type="text" placeholder="First Name" />
                    <input className="text-input"  name="price"  type="text" placeholder="Last Name" />
                </div>
                <div className="inv-wrp">
                    <div className="inv-lbl">Shipping Address</div>
                    <div className="inv-lbl">City</div>
                </div>
                <div className="inv-wrp">
                    <input className="text-input" name="title"  type="text" placeholder="Shipping Address" />
                    <input className="text-input" name="price"  type="text" placeholder="City" />
                </div>
                <div className="inv-wrp">
                    <div className="inv-lbl">State</div>
                    <div className="inv-lbl">Zip Code</div>
                </div>
                <div className="inv-wrp">
                    <input className="text-input" name="title"  type="text" placeholder="State" />
                    <input className="text-input" name="price"  type="text" placeholder="Zip Code" />
                </div> 
                <div className="addInv-wrp">
                    <button id="returnShop-btn" onClick={this.props.returnShop}>Return to Shopping</button>
                    <button>Submit Order</button>
                </div>
                
            </form>
            </div>
        );
    }
}

Checkout.propTypes = {
    returnShop: PropTypes.func
  };



