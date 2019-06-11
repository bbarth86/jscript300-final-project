import React, { Component } from 'react';
import ProductImage from './ProductImage.js';
import ProductTitle from './ProductTitle.js';
import ProductPrice from './ProductPrice.js';
import ProductDesc from './ProductDesc.js';
import PropTypes from 'prop-types';

export default class Product extends Component {
    
    render() {
        const product = {

            title: this.props.data.title,
            desc: this.props.data.desc,
            price: this.props.data.price,
            image: this.props.data.image,
            idx: this.props.data.idx
        }

        return (
            <div>
                <div className="product">
                    <hr />
                    <div className="item-wrpr">
                        <div>
                            <ProductImage image={product.image}/>   
                        </div>
                        <div className="item-wrpr">
                            <ProductTitle key={product.key} title={product.title}/>
                            <ProductPrice key={product.key} price={product.price}/>
                            <ProductDesc key={product.key} desc={product.desc}/>
                            <button className="atc-btn" onClick={() => this.props.addToCart(this.props.idx)}>
                                Add to Cart
                          </button>
                        </div>
                    </div>
                    <div  className="product-atc">
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

Product.propTypes = {
    addToCart: PropTypes.func,
    idx: PropTypes.string,
    data: PropTypes.object
  };