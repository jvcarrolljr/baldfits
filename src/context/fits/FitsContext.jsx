import {createContext, useState, useEffect} from 'react'

const FitsContext = createContext()

export const FitsProvider = ({children}) => { 
  const [fits, setFits] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log(123);
    fetchFits()
  },[])

  // Fetch Fits
  const fetchFits = async () => {
    const response = await fetch("/fits?_sort=id&_order=desc")
    const data = await response.json()
    setFits(data)
    setIsLoading(false)
  }

  return <FitsContext.Provider 
      value={{
        isLoading,
        fits
      }}
    >
    {children}
  </FitsContext.Provider>
 }

 export default FitsContext