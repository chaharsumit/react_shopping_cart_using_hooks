function Header(props){
  return (

    <header className="header flex">
    
      <h3>{props.total.length} Product(s) found</h3>
      
      <label>
        Order By :
        <select onChange={props.handleSelect} name="filter" id="filter" defaultValue="Filter Price">
          <option disabled>Filter Price</option>
          <option value="">Clear Filters</option>
          <option value="Highest">Highest to Lowest</option>
          <option value="Lowest">Lowest to Highest</option>
        </select>
      </label>
      
    </header>

  )
}

export default Header;