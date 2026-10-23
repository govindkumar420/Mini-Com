import React from 'react'

export const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>Product Details for ID: {productId}</div>
  )
}
