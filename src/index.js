import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//list of pages
const pages = {
    PRODUCT_LIST: "PRODUCT_LIST",
    CART_LIST: "CART_LIST"
  };  

let currentPage = pages.PRODUCT_LIST;

//product list
  const products = [
    { id: 1, name: "product 1", price: 100},
    { id: 2, name: "product 2", price: 150},
    { id: 3, name: "product 3", price: 200},
    { id: 4, name: "product 4", price: 250},
    { id: 5, name: "product 5", price: 300},
  ];
  const cart = [];
  const productCount=[];
  var Totalprice=0;
  for(var i=0;i<=products.length;i++){
      productCount[i]=0;
  } 

  const addToCart = productId => {
    const [product] = products.filter(({ id }) => productId === id);
    productCount[productId]++;
    cart.push(product);
    renderApp();
  }; 
  
  const Button = ({ message, onClick }) => (
    <button onClick={onClick}>{message}</button>
  );
  
  const Product = ({ id, name, price}) => (
    <ul>
    <li className="productId">{id}</li>
    <li className="productName">{name}</li>
    <li className="productPrice">{price}</li>
    <li className="btn"><Button message="Addtocart" onClick={addToCart.bind(null, id)} /></li>
    </ul>
  );
  //displaying cart
  const CartProduct = ({ id, name, price}) =>(
  <div>
    {productCount[id]>0?<ul>
    <li className="productId">{id}</li>
    <li className="productName">{name}</li>
    <li className="productPrice">{price}</li>
    <li className="productQunatity">{productCount[id]}<br/></li></ul>:''}
  </div>
  );
  const goCart = () => {
    currentPage = pages.CART_LIST;
    for(var i=0;i<products.length;i++){
      Totalprice+=productCount[i+1]*products[i].price;
    }          
    renderApp();
  };
  const ProductList = () => (
      <div>
        <button className="goto-cart-btn" onClick={goCart}>
        {`Cart  ${cart.length}`}
        </button>
        <h2>Shopping Cart</h2>
        <ul className="headingList">
        <li><b>Number&nbsp;&nbsp;</b></li>
        <li><b>Name</b></li>
        <li><b> Price</b></li>
        </ul>
       <ul className="productList">
       {
       products.map(({id, name, price}) => <Product id={id} name={name} price={price} />)
       }</ul>
     </div>
    );              
    //displaying Cart list
  const CartList = () => (
        <div>
        <h2>Cart List</h2>
        <ul className="headingList">
        <li><b>Number</b></li>
        <li><b>Name</b></li>
        <li><b>Price</b></li>
        <li className="ItmQnty"><b>ItemQuantity</b></li>
        </ul>
        <ul className="cartList">{
          products.map(({id, name, price}) => <CartProduct id={id} name={name} price={price} />)
          }</ul>
        <label><b>Total Amount : {Totalprice}</b></label>
        
        </div>  
  );
                      
  //checking the current page and displaying it
  const App = () => (
    <div className="App">
      {currentPage === pages.PRODUCT_LIST ? <ProductList /> : <CartList />}
    </div>
  );

  //Displaying current page
  const renderApp = () => {
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
  };
  
renderApp();
