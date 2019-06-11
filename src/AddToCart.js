import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCart extends Component {
    
    render () {
  
        return (
            <div  className="listing-atc">
                            <button className="atc-btn" onClick={() => this.props.addToCart(this.props.key)}>
                            Add to Cart
                            </button>
                        </div>
        )
        
    }
}

AddToCart.propTypes = {
    addToCart: PropTypes.func,
    key: PropTypes.number
  };