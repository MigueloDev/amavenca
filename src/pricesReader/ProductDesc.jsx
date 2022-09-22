import React from 'react'
import { ProductNormal } from '../prices/ProductNormal'
import { ProductPlu } from '../prices/ProductPlu'
export const ProductDesc = ({product}) => {
  return (
    <div className='row'>

      {
        (product && product.is_plu) &&
          <ProductPlu product={product}/>
      }
      
      {
        (product && !product.is_plu) &&
        <ProductNormal product={product}/>
      }

      {
        (!product) &&
        <ProductPlu product={null}/>
      }

    </div>
  )
}
