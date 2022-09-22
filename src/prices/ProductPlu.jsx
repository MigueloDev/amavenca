import React from "react";

export const ProductPlu = ({product = null}) => {

  const unit = product && product.is_plu ? 'Unidad: Kg' : ' ';
  
  const newString = unit.padStart(40, ' ');

  console.log(newString);

  return (
    <>
      <div className="col-4">
        <h2 className="h4 text-white text-start">Nombre de Articulo</h2>
        <h2 className="h4 text-white text-start">Precio USD</h2>
        <h2 className="h4 text-white text-start">Cantidad</h2>
        <h2 className="h4 text-white text-start">Total USD</h2>
        <h2 className="h4 text-white text-start">Total Bs</h2>
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
          <h2 className="h4 text-white text-start">{`: ${product.precioFormated} ${newString}`}</h2>
          <h2 className="h4 text-white text-start">{`: ${product.pesoFormated}`}</h2>
          <h2 className="h4 text-white text-start">{`: ${product.totalFormated} USD`}</h2>
          <h2 className="h4 text-white text-start">{`: ${product.precioBsFormated} Bs`}</h2>
        </div>
      }
    </>
  );
};
