import React from 'react'
import { useState } from 'react'
import { useForm } from '../hooks/useForm';
import { ProductCard } from './ProductCard';
import moment from 'moment-timezone'
import { timer } from '../helpers/useTimer';
import { useRef } from 'react';
import { useContext } from 'react';
import { TasaContext } from '../context/TasaContext';
import { useEffect } from 'react';

export const Form = ({updateTasa}) => {

  const inputEl = useRef(null);

  const {tasa, setTasa} = useContext(TasaContext);

  const {
    searchValue, 
    onInputChange, 
    onResetForm
  } = useForm({
    searchValue : ''
  });

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [currentTimer, setCurrentTimer] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    inputEl.current.focus()
  }, [])
  
  const reset = () => {
    setError(null)
    setProduct(null)
  }

  const clearProduct = () => {
    setProduct(null)
  }

  const setTimer = () => {
    
    if(currentTimer) {
      clearInterval(currentTimer);
    }
    setCurrentTimer(timer(moment().add(19, 'seconds'),() => null, handleEndTime))
  }

  const handleEndTime = () => {
    reset()
  }

  const handleSubmit = async (submitEvent) => {

    submitEvent.preventDefault();
    inputEl.current.focus();
    setLoading(oldValue => !oldValue)
    const response = await fetch(`/api/getProducto`, 
    {
      method : 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({barcode : searchValue})
    })
    if(!response.ok) { 
      setLoading(oldValue => !oldValue)
      setError(true)
      return;
    }
    const data = await response.json()

    if(data.not_found){
      setLoading(oldValue => !oldValue)
      setError(true)
      clearProduct(true)
      onResetForm()
      return;
    }

    //si todo sale bien
    setLoading(oldValue => !oldValue)
    setProduct(data.product)
    setTasa(data.tasa)
    setError(null)
    onResetForm()
    inputEl.current.focus()
    setTimer()
  }



  return (
    <>
      <div className='form-background rounded'>
        <form className='form' onSubmit={handleSubmit} autoComplete="off">
          <input 
            ref={inputEl}
            type="text" 
            className='form-control'
            value={searchValue}
            name="searchValue"
            onInput={onInputChange}
            style={{opacity : '0'}}
            />
        </form>

      <ProductCard 
        product={product} 
        error={error}
        loading={loading}
      />

      </div>
    </>
  )
}
