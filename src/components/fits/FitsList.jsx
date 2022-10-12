import {motion,AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import Spinner from "../layout/Spinner.jsx"
import FitsItem from "./FitsItem.jsx"
import FitsContext from '../../context/fits/FitsContext.jsx'

function FitsList() {
const { fits, isLoading } = useContext(FitsContext)

  if (!isLoading && (!fits && fits.length===0)) {
    <p>No fits found.</p>
  }

  return isLoading ? (<Spinner />) : (
    <div className='fits-list flex flex-wrap'>
        {fits.map((fit) => (
          <AnimatePresence>
            <motion.div
              key={fit.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
              <FitsItem key={fit.id} fit={fit} />
            </motion.div>
          </AnimatePresence>
        ))}
    </div>
  )
}

export default FitsList