import './scss/styles.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Register from './components/Register.jsx'
import Details from './components/Details.jsx'
import Points from './components/Points.jsx'
import Summary from './components/Summary.jsx'
import Details2 from './components/Details2.jsx'
import Takeaways from './components/Takeaways.jsx'
import Subscribe from './components/Subscribe.jsx'
import Footer from './components/Footer.jsx'


function App() {
 

  return (
    <>


      <Navbar />
      <Header/>
      <Register/>
      <Details/>
      <Points/>
      <Summary/>
      <Details2/>
      <Takeaways/>
      <Subscribe/>
      <Footer/>
    
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
