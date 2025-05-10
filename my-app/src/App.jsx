import './scss/styles.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Register from './components/Register.jsx'
import Details from './components/Details.jsx'
import Points from './components/Points.jsx'

function App() {
 

  return (
    <>


      <Navbar />
      <Header/>
      <Register/>
      <Details/>
      <Points/>
    
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
   */}
  </>
  )
}

export default App
