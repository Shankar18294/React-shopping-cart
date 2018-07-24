import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pages = {
    PRODUCT_LIST: "PRODUCT_LIST",
    CART_LIST: "CART_LIST"
};

const renderApp = () => {
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
};


var currentPage = pages.PRODUCT_LIST;

const products = [
    { id: 1, name: "Product-1", price: 50},
    { id: 2, name: "Product-2", price: 120},
    { id: 3, name: "Product-3", price: 100},
    { id: 4, name: "Product-4", price: 15},
    { id: 5, name: "Product-5", price: 150 },
];

// let cart = {
//     items: [{
//         product: any,
//         productCount: 0
//     }]
// };
const cart = [];
const prodCnt = [];
// var totalCnt = 0;
for (var i = 0; i <= products.length; i++) {
    prodCnt[i] = 0;
}

const addToCart = productId => {
    const [product] = products.filter(({ id }) => productId === id);
    cart.push(product);
    renderApp();
};

const goToCart = () => {
    currentPage = pages.CART_LIST;
    renderApp();
};

const AddToCartButton = ({ message, onClick }) => (
    <button className="add-to-cart-btn" onClick={onClick}>
        {message}
    </button>
);


const Product = ({ id, name, price, inCart = false }) => (
    <li className="product">
        <div className="inline">
            <b>Product: </b> {name}<br/>
            <b>Price: </b> {price}
            {!inCart && (
                <AddToCartButton className="addcart"
                    message="ADD TO CART"
                    onClick={addToCart.bind(null, id)}
                />
            )}
        </div>
    </li>
);

const ProductList = () => (
    <React.Fragment>
        <h2>Products List</h2>
        <ul>
            {}
            {products.map(product => <Product key={product.id} {...product} />)}
        </ul>
    </React.Fragment>
);


const CartList = () => (
    <React.Fragment>
        <h2>Cart List</h2>
        <ul>
            {cart.map((product, idx) => (
                <Product key={idx} {...product} inCart={true} />
            ))}
        </ul>
        <div>
            <span>Subtotal: </span>
            <strong>
                {cart.reduce((subTotal, { price }) => subTotal + price, 0.0).toFixed(2)}
            </strong>
        </div>
    </React.Fragment>
);

const App = () => (
    <div className="App">
        <button className="goto-cart-btn" onClick={goToCart}>
            {`Cart(${cart.length})`}
        </button>
        {currentPage === pages.PRODUCT_LIST ? <ProductList /> : <CartList />}
    </div>
);
renderApp();