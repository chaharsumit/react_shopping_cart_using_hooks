function Bag(props){
  return (
    <div onClick={props.toggleCart} className={props.status ? "none" : "cart-icon-container" }>
      <img src='products/bag-icon.png' className="cart-icon" />
      <span className="cart-icon-circle flex">{props.cart.length}</span>
    </div>
  )
}

export default Bag;