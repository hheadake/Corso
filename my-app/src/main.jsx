import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './scss/styles.scss'
import '../../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '../../node_modules/@fortawesome/fontawesome-free/scss/brands.scss';
import '../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)