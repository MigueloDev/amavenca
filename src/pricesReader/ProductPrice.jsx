import React from "react";
import { Product } from "./Product_";
import { ProductDesc } from "./ProductDesc";
import { ProductPlu } from "./ProductPlu_";

export const ProductPrice = ({ product  = {}}) => {
  return (
    <>
      {/* 
        product.is_plu ? 
        (<ProductPlu product={product}/>) : 
        (<Product product={product}/>)
       */}

        <ProductDesc product={product}/>
    </>
  );
};
