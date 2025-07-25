import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles//index.css'
import App from './App.jsx'
import { Weatherprovider } from "./Context/Context.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weatherprovider>
    <App/>
    </Weatherprovider>
  </StrictMode>,
)
