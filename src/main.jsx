//import './style.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { setupCounter } from './counter.js'
import App from './componentes/App/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
  
//setupCounter(document.querySelector('#counter'))
