import React from "react";
import { useState, useContext, useEffect } from "react";
import { TasaContext } from "../context/TasaContext";
import { BannerFooter } from "../footer/BannerFooter";
import { FirstBanner } from "./FirstBanner";
import { Form } from "./Form";
import { TasaContainer } from "./TasaContainer";

export const Container = () => {


  const [loading, setLoading] = useState(true);

  const {tasa, setTasa} = useContext(TasaContext)

  const changeTasa = async (newTasa = '') => {
    if(newTasa) {
      setTasa(newTasa)
      return;
    }

    const response = await fetch('/api/getTasa');
    if(!response.ok){
      setLoading((oldValue) => !oldValue)
      //handle error please
    }
    const data = await response.json();
    if(data.length > 0){
      setLoading((oldValue) => !oldValue)
      const {cambio: monto, co_mone, mone_des, cambio_show} = data[0]
      setTasa({monto, co_mone, mone_des, cambio_show})
      return;
    }
    setLoading((oldValue) => !oldValue)


  }

  useEffect(() => {
    
    changeTasa()
    
  }, [])
  return (
    <>
    <div className="main-background">

      <main className="container">

        <FirstBanner/>

        <div className="bg-light p-3" style={{ height:'100vh' }}>

          <div className="d-flex align-items-center py-2 px-3 mb-3 text-white bg-main-orange rounded shadow-sm">
            <TasaContainer tasa={tasa} loading={loading}/>
          </div>
          <Form />

          <BannerFooter/>
        </div>
      </main>
    </div>
    </>
  );
};

