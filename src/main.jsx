import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './componentes/App/App.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <App />
  </BrowserRouter>
)