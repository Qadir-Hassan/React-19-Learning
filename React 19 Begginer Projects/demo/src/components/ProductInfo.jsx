import React from 'react'

const ProductInfo = () => {

    const product = {
        name : 'laptop',
        price: '$1200',
        availability : 'IN Stock'
    }
  return (
    <div>
        <h1> Product Information</h1>

        <p>Name: {product.name}</p>
        <p>price: {product.price}</p>
        <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo