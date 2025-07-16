import {useState, useEffect, createContext} from 'react'

export const Weathercontext = createContext()
  

export function Weatherprovider({ children }) {

    
      const [city1, setCity1] = useState("miami")
      const [data5days, setData5days] = useState(null)
    
 
    useEffect(() => {
    
    if (!city1) {
      return;
    }
    
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city1}&appid=806afa2c328b56fdfcd6e19402bf927d`)
    .then(res => res.json())
    .then(data => {
    setData5days(data)
    })
    
    .catch(err => {
      console.log("El error es: ", err)
    })
    
    }, [city1])

    return (
    <Weathercontext.Provider value={{ data5days, setCity1 }}>
        {children}
    </Weathercontext.Provider>
  )


}

