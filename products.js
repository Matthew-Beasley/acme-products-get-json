

const Products = ({React, products}) => {
  return (
    <div className="products">
      <h3>Products</h3>
      <ul>
        {products.map(product => { return (<li key={product.id}>{product.name}</li>) })}
      </ul>
    </div>
  )
}

export default Products;
