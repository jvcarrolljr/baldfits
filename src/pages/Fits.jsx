import { useState } from 'react'
import FitsData from '../data/FitsData'
import FitsList from "../components/fits/FitsList"
import {FitsProvider} from "../context/fits/FitsContext"

function Fits() {

  return (
    <FitsProvider>
      <h1>Fits Collection</h1>
      <FitsList />
    </FitsProvider>
  )
}

export default Fits