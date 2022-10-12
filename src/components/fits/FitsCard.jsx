import PropTypes from 'prop-types'

function FitsCard({children}) {
  return (
    <div className="card w-72 m-2 bg-light-100 shadow-xl">
        {children}
    </div>
  )
}

FitsCard.propTypes = {
    children: PropTypes.node.isRequired
  }

export default FitsCard