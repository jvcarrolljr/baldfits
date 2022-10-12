import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Fits from './pages/Fits'
import Genres from './pages/Genres'
import Models from './pages/Models'
import Contact from './pages/Contact'
// import User from './pages/User'
import NotFound from './pages/NotFound'
// import {FitsProvider} from './context/fits/FitsContext'

function App() {
  return (
      <Router>
          <div className='flex flex-col text-black bg-blue-100'>
            <Navbar />
            <main className='container px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/fits' element={<Fits />} />
                <Route path='/genres' element={<Genres />} />
                <Route path='/models' element={<Models />} />
                <Route path='/contact' element={<Contact />} />
                {/* <Route path='/user/:login' element={<User />} /> */}
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />  
              </Routes>
            </main>
            <Footer />
          </div>
      </Router>
  );
}

export default App;
