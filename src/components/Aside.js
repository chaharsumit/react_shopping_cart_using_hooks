function Aside(props){
  return (
    
    <ul className="size-menu flex">
      {
        props.sizes.map(size => (
          <li onClick={props.handleSize} key={size} className={props.selectedSize.includes(size) ? 'size-active flex' : "size flex"}>{size}</li>
        ))
      }
      <li className="item-empty size"></li>
    </ul>

  )
}

export default Aside;