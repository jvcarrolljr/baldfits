import Logo from "./Logo"
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {props} from 'react'

function Navbar({title}) {
  return (
      <nav className='navbar mb-12 shadow-lg bg-blue-900 text-white'>
        <div className='container mx-auto'>
          <div className='flex-none px-2 mx-2'>
            <Link to='/' className='text-lg font-bold align-middle'>
              <Logo width={40} />
            </Link>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end'>
              <Link to='/fits' className='btn btn-ghost btn-sm rounded-btn'>
                Fits
              </Link>
              <Link to='/genres' className='btn btn-ghost btn-sm rounded-btn'>
                Genres
              </Link>
              <Link to='/models' className='btn btn-ghost btn-sm rounded-btn'>
                Models
              </Link>
              <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
                About
              </Link>
              <Link to='/contact' className='btn btn-ghost btn-sm rounded-btn'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
 }

Navbar.propTypes = {
  title: PropTypes.string
}
export default Navbar