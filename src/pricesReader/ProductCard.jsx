import React from 'react'

import toFixed from '../helpers/toFixed'
import { ProductPrice } from './ProductPrice'

export const ProductCard = ({product, error, loading}) => {
  return (
  <>
    {
      (!error && !loading) &&
      <div className=" h-100 p-3 rounded-3 mt-2">
          <ProductPrice product={product}/>
      </div>
    }

    {
      error &&
      <div className=" h-100 mt-2 border rounded-3 mt-2">
        <div className='text-center'>
          <h2 className='h4 text-white'>Producto No encontrado</h2>
        </div>
      </div>
    }

    {
      (!error && loading) && 
      <div className=" h-100 mt-2 border rounded-3 mt-2">
        <div className='text-center'>
          <h2 className='h4 text-white'>Cargando ...</h2>
        </div>
      </div>
    }

    {/*
      (!product && !error) && 
      <div className=" h-100 p-2 bg-light border rounded-3 mt-2">
        <div className='text-center'>
          <h2 className='h4'>Escanee su producto</h2>
        </div>
      </div>
    */}
  </>
  )
}
