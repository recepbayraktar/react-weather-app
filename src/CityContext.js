import { createContext, useState } from "react";


const cityContext = createContext()


 export const CityProvider = ({children}) => {


     const [city, setCity] = useState({
      id: 1,
      name: "Adana",
      latitude: "37.0000",
      longitude: "35.3213",
      population: 2183167,
      region: "Akdeniz"
    })

     const values = {
         city,
         setCity
     }

     return <cityContext.Provider value={values}>{children}</cityContext.Provider>
 }

export default cityContext