import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
    
    /**
     * function to handle display of product and quantity li items
     */
    
    displayProducts = key => {
        const product = this.props.inventory[key];
        const count = this.props.cart[key];

        return (
            <div  className="cart-order" key={key}>
                <div className="item-wrp">
                    {product.title} 
                </div> 
                <div className="item-wrp">
                    {count}
                    <button id="delete-btn" className="rfc-btn" onClick={() => this.props.removeFromCart(key)}>Delete</button> 
                </div>
                <div className="item-wrp">
                    ${((product.price * count)/100)} 
                </div>  
            </div>
        )
    };

    /**
     * output of products in cart
     */

    render() {
        const productIDs = Object.keys(this.props.cart);
        const subtotal = productIDs.reduce((prevTotal,key) => {
            const product = this.props.inventory[key];
            const count = this.props.cart[key];
            return (
                (prevTotal + (count * product.price)) 
            )
        }, 0);

        const qtytotal = productIDs.reduce((prevQty,key) => {
            const count = this.props.cart[key];
            return (
                (prevQty + count)
            )
        }, 0);

        return (
            <div className="cart-wrapper">
            <div><h2 className="hdr-wrp">SHOPPING CART</h2></div>
                <hr />
                <div className="cart-hdr">
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                </div>
                <div className="cart-lineitem">
                {productIDs.map(this.displayProducts)}
                </div>
                <hr />
                <div className="cart-hdr">
                    <div className="item-wrp"></div>
                    <div className="item-wrp"><span className="cart-lbl">Total Qty: {qtytotal}</span></div>
                    <div className="item-wrp"><span className="cart-lbl">Subtotal: ${((subtotal)/100)}</span></div>
                </div>
                <div className="cart-hdr">
                    <div className="item-wrp"></div>
                    <div className="item-wrp"></div>
                    <div className="item-wrp">
                        <button id="checkout-btn" onClick={this.props.checkout}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }

}

ShoppingCart.propTypes = {
    inventory: PropTypes.array,
    cart: PropTypes.object,
    removeFromCart: PropTypes.func,

  };