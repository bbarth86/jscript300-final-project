import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductTitle extends Component {
    
    render () {
  
        return (
            <div className="product-title">
                {this.props.title} 
            </div>
        )
        
    }
}

ProductTitle.propTypes = {
    title: PropTypes.string
  };