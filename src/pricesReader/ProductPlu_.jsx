import React from 'react'

export const ProductPlu = ({product}) => {
  return (
    <div className="col-12">
        <div className="row">
          <div className="col-6">
            <h2 className="text-end text-white">Precio Ref</h2>
          </div>
          <div className="col-6">
            <h2 className="text-start text-white">{`${product.precioFormated} / kg`}</h2>
          </div>
          <div className="col-6">
            <h2 className="text-end text-white">Peso</h2>
          </div>
          <div className="col-6">
            <h2 className="text-start text-white">{`${product.pesoFormated}/kg `}</h2>
          </div>
          <div className="col-6">
            <h2 className="text-end text-white">Total</h2>
          </div>
          <div className="col-6">
            <h2 className="text-start text-white">{`${product.totalFormated} REF`}</h2>
          </div>
          <div className="col-6">
            <h2 className="text-end text-white">Total Bs</h2>
          </div>
          <div className="col-6">
            <h2 className="text-start text-white">{`${product.precioBsFormated} Bs`}</h2>
          </div>
        </div>
      </div>
  )
}
