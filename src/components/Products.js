

function Products(props) {
  return (
    <ul className="item-grid flex">
      {props.productList.map(item => (
        <li key={item.id} className="grid-item">
          <div className="image-container">
            <img src={`products/${item.sku}_1.jpg`} />
          </div>
          <h4>{item.title}</h4>
          <hr />
          <p className="price">${item.price}</p>
          <button onClick={() => props.addToCart(item)} className="btn">
            Add To Cart
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Products;