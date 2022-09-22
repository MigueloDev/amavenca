import React from 'react'

import logoBcv from '../assets/logo_bcv-04_2.png';

export const TasaContainer = ({loading, tasa}) => {
  return (
    <>
    {
      loading ? 
      <div className="w-100 d-flex justify-content-between">
        <div style={{ width : "fit-content" }}>
          <h1 className="h3 mb-0 text-white lh-1">CONSULTA DE PRECIOS</h1>
        </div>
        <div style={{ width : "fit-content" }}>
          <h1 className="h3 mb-0 me-3 text-white lh-1"> CARGANDO TASA ...</h1>
        </div>
      </div>
      :
      <div className="w-100 d-flex justify-content-between">
        <div style={{ width : "fit-content" }}>
          <h1 className="h3 mb-0 text-white lh-1">CONSULTA DE PRECIOS</h1>
        </div>
        <div className='d-flex justify-content-around'>
        <div style={{ width : "fit-content" }}>
          <h1 className="h4 mb-0 text-white"> Tasa del dia</h1>
        </div>
        <div>
          <img src={logoBcv} alt="" style={{ 
            marginBottom: '-38px',
            width: '60px',
            marginTop: '-35px',
          }}/>
        </div>
        <div style={{ width : "fit-content" }}>
          <h1 className="h3 mb-0 me-3 text-white lh-1"> BCV: {`${tasa.cambio_show} BS`}</h1>
        </div>
        </div>
      </div>
    }
    </>
  )
}
