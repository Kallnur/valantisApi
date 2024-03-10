
const ProductList = ({products}) => {

  if(!products.length) {
    return (
      <span className='product-title'>Таких продутов нет!</span>
    )
  }

  return (
    <ol start={0}>
      <li className="productItem">
        <b className="itemId">ID</b>
        <b className="itemName">Name</b>
        <b className="itemPrice">Price</b>
        <b className="itemBrand">Brand</b>
      </li>
      {
        products.map(product => (
          <li className="productItem" key={product.id}>
            <span className="itemId">{product.id}</span>
            <span className="itemName">{product.product}</span>
            <span className="itemPrice">{product.price}</span>
            <span className="itemBrand" dangerouslySetInnerHTML={{ __html: product.brand ? product.brand : '&#x2717;' }}></span>
          </li>
        ))
      }
    </ol>
  )
}

export default ProductList