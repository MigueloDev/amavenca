import React from 'react'

export const Product = ({product}) => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-6">
          <h2 className="text-end">Precio Ref</h2>
        </div>
        <div className="col-6">
          <h2 className="text-start">{`${product.precio_formated} REF`}</h2>
        </div>
        <div className="col-6">
          <h2 className="text-end">Total Bs</h2>
        </div>
        <div className="col-6">
          <h2 className="text-start">{`${product.precioBsFormated} Bs`}</h2>
        </div>
      </div>
    </div>
  )
}
