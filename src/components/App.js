import React from 'react';
import data from '../data.json';
import Aside from './Aside';
import Header from './Header';
import Products from './Products';
import Bag from './Bag';
import Cart from './Cart';
import { useState } from 'react';

let allProducts = data.products;

/*

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      size: [],
      select: "",
      cartStatus: false,
      cart: []
    }
  }

  incQuantity = (item) => {
    this.setState((prevState) => {
      let newCart = prevState.cart.map(product => {
        if(product.id === item.id){
          return {
            ...product,
            quantity: product.quantity + 1
          }
        }else{
          return product;
        }
      });
      return {
        cart: newCart,
      }
    })
  }

  decQuantity = (item) => {
    if(item.quantity === 1){
      return null;
    }else{
      this.setState((prevState) => {
        let newCart = prevState.cart.map(product => {
          if(product.id === item.id){
            return {
              ...product,
              quantity: product.quantity - 1
            }
          }else{
            return product;
          }
        });
        return {
          cart: newCart,
        }
      })
    }
  }

  addToCart = (item) => {
    let foundArr = this.state.cart.find(products => products.id === item.id);
    if(foundArr){
      this.incQuantity(item);
    }else{
      this.setState((prevState) => {
        return {
          cart: prevState.cart.concat({...item, quantity: 1})
        }
      })
    }
  }

  deleteFromCart = (item) => {
    let cartArr = this.state.cart;
    let pos = cartArr.indexOf(item);
    cartArr.splice(pos, 1);
    this.setState({
      cart: cartArr
    });
  }

  Sizes = () => {
    let availSizes = allProducts.reduce((acc, curr) => {
      acc = acc.concat(curr.availableSizes);
      return acc;
    }, []);
    availSizes = [...new Set(availSizes)];
    return availSizes;
  }

  deleteSize = (chosenSize) => {
    let sizeArr = this.state.size;
    let pos = sizeArr.indexOf(chosenSize);
    sizeArr.splice(pos, 1);
    this.setState({
      size: sizeArr
    });
  }

  addSize = (chosenSize) => {
    this.setState({
      size: this.state.size.concat(chosenSize)
    });
  }

  handleSize = (event) => {
    let chosenSize = event.target.innerText;
    if(!this.state.size.includes(chosenSize)){
      this.addSize(chosenSize);
    }else{
      this.deleteSize(chosenSize);
    }
  }

  handleSelect = (event) => {
    this.setState({
      select: event.target.value
    })
  }

  filterSize = () => {
    let filteredProducts = [];
    
    if(this.state.size.length === 0){
      return filteredProducts = [...allProducts];
    }else{
      this.state.size.forEach(size => {
        allProducts.forEach(product => {
          if(product.availableSizes.includes(size)){
            filteredProducts.push(product);
          }
        });
      })
      filteredProducts = [...new Set(filteredProducts)];
      return filteredProducts;
    }
  } 
  
  filterSelect = (filteredProducts) => {
    let arr = [...filteredProducts];

    if(this.state.select === 'Highest'){
      arr = arr.sort((a, b) => b.price - a.price);
      return arr;
    }else if(this.state.select === "Lowest"){
      arr = arr.sort((a, b) => a.price - b.price);
      return arr;
    }else if(!this.state.select){
      return filteredProducts;
    }
  }

  sendProducts = () => {
    let result = [];
    if(this.state.size.length === 0 && !this.state.select){
      result = allProducts;
    }else{
      let filter_select = this.filterSelect(this.filterSize());
      result = filter_select;
    }
    return result;
  }

  toggleCart = () => {
    this.setState((prevState) => {
      return {
        cartStatus: !prevState.cartStatus
      }
    });
  }


  render(){
    let allSizes = this.Sizes();
    let products = this.sendProducts();
    return (
      <>
        <Bag cart={this.state.cart} status={this.state.cartStatus} toggleCart={this.toggleCart} />
        <Cart incQuantity={this.incQuantity} decQuantity={this.decQuantity} deleteFromCart={this.deleteFromCart} status={this.state.cartStatus} toggleCart={this.toggleCart} cart={this.state.cart} />
        <div className='container flex'>
          <Aside selectedSize={this.state.size} handleSize={this.handleSize} sizes={allSizes} />
          <div className='main'>
            <Header handleSelect={this.handleSelect} total={products} />
            <Products addToCart={this.addToCart} productList={products} />
          </div>
        </div>
      </>
    )
  }
}
*/

function App() {
  const [size, setSize] = useState([]);
  const [select, setSelect] = useState(null);
  const [cartStatus, setCartStatus] = useState(false);
  const [cart, setCart] = useState([]);

  let allSizes = sizes();
  let products = sendProducts();

  function incQuantity(item){
    console.log(item);
  }

  function decQuantity(item){
    console.log(item);
  }

  function handleSelect(event){
    setSelect(
      event.target.value
    )
  }

  function toggleCart(){
    setCartStatus(
        !cartStatus
      );
  }

  function addSize(chosenSize){
    setSize(
      size.concat(chosenSize)
    );
  }

  function deleteSize(chosenSize){
    let sizeArr = [...size];
    let pos = sizeArr.indexOf(chosenSize);
    sizeArr.splice(pos, 1);
    setSize(
      sizeArr
    );
  }

  function handleSize(event){
    let chosenSize = event.target.innerText;
    if(!size.includes(chosenSize)){
      addSize(chosenSize);
    }else{
      deleteSize(chosenSize);
    }
  }


  function sizes(){
    let availSizes = allProducts.reduce((acc, curr) => {
      acc = acc.concat(curr.availableSizes);
      return acc;
    }, []);
    availSizes = [...new Set(availSizes)];
    return availSizes;
  }

  function addToCart(item){
    let foundArr = cart.find(products => products.id === item.id);
    if(foundArr){
      incQuantity(item);
    }else{
      setCart(
        cart.concat({...item, quantity: 1})
      )
    }
  }

  function deleteFromCart(item){
    let cartArr = [...cart];
    let pos = cartArr.indexOf(item);
    cartArr.splice(pos, 1);
    setCart(
      cartArr
    );
  }

  function filterSize(){
    let filteredProducts = [];
    if(size.length === 0){
      return filteredProducts = [...allProducts];
    }else{
      size.forEach(size => {
        allProducts.forEach(product => {
          if(product.availableSizes.includes(size)){
            filteredProducts.push(product);
          }
        });
      })
      filteredProducts = [...new Set(filteredProducts)];
      return filteredProducts;
    }
  }

  function filterSelect(filteredProducts){
    let arr = [...filteredProducts];
    if(select === 'Highest'){
      arr = arr.sort((a, b) => b.price - a.price);
      return arr;
    }else if(select === "Lowest"){
      arr = arr.sort((a, b) => a.price - b.price);
      return arr;
    }else if(!select){
      return filteredProducts;
    }
  }

  function sendProducts(){
    let result = [];
    if(size.length === 0 && !select){
      result = allProducts;
    }else{
      let filter_select = filterSelect(filterSize());
      result = filter_select;
    }
    return result;
  }

  return (
    <>
      <Bag
        cart={cart}
        status={cartStatus}
        toggleCart={toggleCart}
      />
      <Cart
        incQuantity={incQuantity}
        decQuantity={decQuantity}
        deleteFromCart={deleteFromCart}
        status={cartStatus}
        toggleCart={toggleCart}
        cart={cart}
      />
      <div className="container flex">
        <Aside
          selectedSize={size}
          handleSize={handleSize}
          sizes={allSizes}
        />
        <div className="main">
          <Header handleSelect={handleSelect} total={products} />
          <Products addToCart={addToCart} productList={products} />
        </div>
      </div>
    </>
  );
}

export default App;