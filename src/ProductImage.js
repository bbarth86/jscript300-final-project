import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductImage extends Component {
    
    render () {
  
        return (
            <div>
                <img className="product-image" alt={this.props.name} src={this.props.image} />
            </div>
        )
        
    }
}

ProductImage.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
  };