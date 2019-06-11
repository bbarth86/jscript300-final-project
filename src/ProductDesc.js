import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDesc extends Component {
    
    render () {
  
        return (
            <div className="product-desc">
                {this.props.desc}
            </div>
        )
        
    }
}

ProductDesc.propTypes = {
    desc: PropTypes.string
  };