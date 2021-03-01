import React from 'react';
import { connect } from 'react-redux'


const Products = (props) => {

    const productsList = props.products

    return (
        <div className="products">
            <div className="row">
                {productsList.map(p =>
                    <div className="col-6">
                        <ProductCard 
                        key={p.id} 
                        name={p.name} 
                        price={p.price} 
                        description={p.description} 
                        image={p.image}/>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

const ProductsContainer = connect(mapStateToProps)(Products)
export default ProductsContainer;


const ProductCard = (props) => {
    return (
        <div className="card text-center m-4 row">
            <div className="card-img-block col-4">
            <img src={require(`../../images/${props.image}`).default} className="card-img" alt="..." />
            </div>
            <div className="card-body col-8 p-1">
                <p className="card-title card-field m-0">{props.name}</p>
                <p className="card-field m-0">{props.price} UAH</p>
                <p className="card-text card-field m-0">{props.description}</p>
            </div>
        </div>
    )
}