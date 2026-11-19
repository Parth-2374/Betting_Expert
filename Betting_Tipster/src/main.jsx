import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Header from './User_side/Comon_page/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Header /> */}
  </StrictMode>,
)
