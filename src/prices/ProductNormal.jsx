import React from 'react'

export const ProductNormal = ({product}) => {
  return (
    <>
      <div className="col-4">
        <h2 className="h4 text-white text-start">Nombre de Articulo</h2>
        <h2 className="h4 text-white text-start">Precio USD</h2>
        <h2 className="h4 text-white text-start">Precio Bs</h2>
      </div>

      {
        product && 
        <div className="col-8">
          <h2
            className={
              product.art_des.length > 50
                ? "h4 text-white text-start large-art_description"
                : "h4 text-white text-start"
            }
            >{`: ${product.art_des}`}</h2>
          <h2 className="h4 text-white text-start">{`: ${product.precio_formated}`}</h2>
          <h2 className="h4 text-white text-start">{`: ${product.precioBsFormated}`}</h2>
        </div>
      }
    </>
  )
}
