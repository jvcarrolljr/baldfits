import PropTypes from 'prop-types'
import { useState } from 'react'
import FitsCard from './FitsCard'
// import FitsContext from './src/context/fits/FitsContext'

function FitsItem({fit}) {

  return (
    <FitsCard>
      <figure><img src={fit.url} alt={fit.name} /></figure>
      <div className="card-body">
          <h2 className="card-title">{fit.name}</h2>
          <p>{fit.overview}</p>
          <div className="card-actions justify-end">
              <button className="btn btn-primary">{fit.genre}</button>
          </div>
      </div>
    </FitsCard>
  )
}

FitsItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FitsItem