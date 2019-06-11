import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddNewProduct extends Component {

    titleRef = React.createRef();
    priceRef = React.createRef();
    descRef = React.createRef();
    imgRef = React.createRef();

    // create product using values identified via ref from inputs, use addProduct function from props to add to inventory
    
    createProduct = (e) => {
        e.preventDefault();
        const product = {

            title: this.titleRef.current.value,
            price: this.priceRef.current.value,
            desc: this.descRef.current.value,
            image: this.imgRef.current.value

        };

        this.props.addProduct(product, e);
    };

    render () {
        
        return (
            <div id="add-inv" className="addInv-wrp">
            <form onSubmit={this.createProduct}>
                <div className="inv-wrp">
                    <div>Item Name</div>
                    <div>Item Price</div>
                </div>
                <div className="inv-wrp">
                    <input required ref={this.titleRef} name="title"  type="text" placeholder="Enter Product Title" />
                    <input id="add-price" required ref={this.priceRef} name="price"  type="text" placeholder="Enter Price (Cents)" />
                </div>
                <div className="inv-wrp">
                    <div>Item Description</div>
                </div>
                <div className="inv-wrp-desc">
                    <textarea required ref={this.descRef} name="desc" placeholder="Enter a Description" />
                </div>
                <div className="inv-wrp">
                    <div>Item Image URL</div>
                </div>
                <div className="inv-wrp">
                    <input id="add-url" required ref={this.imgRef} name="image" type="text" placeholder="Enter image URL" />
                </div>
                <div className="inv-wrp">
                    <button type="submit">Add Product</button>
                </div>
                
            </form>
            </div>
        );
    }
}

AddNewProduct.propTypes = {
    addProduct: PropTypes.func
  };



