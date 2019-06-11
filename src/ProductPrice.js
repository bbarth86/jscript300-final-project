import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductPrice extends Component {
    
    render () {
        const price = ((this.props.price) / 100);
        return (
            <div className="product-price">
                ${price}
            </div>
        )
        
    }
}

ProductPrice.propTypes = {
    price: PropTypes.number
  };