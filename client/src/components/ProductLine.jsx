import React from 'react' 
 
 const ProductLine = (props) => {
  return(
    <div>
    <div>{props.product.name}</div>
    <div>{props.product.price}</div>
    </div>
  )
 }

 export default ProductLine