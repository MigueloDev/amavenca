import { useState } from "react"
import { TasaContext } from "./TasaContext"


export const TasaProvider = ({children}) => {

  const [tasa, setTasa ] = useState(null)

  return (
    <TasaContext.Provider value={{ tasa, setTasa }}>
      { children }
    </TasaContext.Provider>
  )
}
