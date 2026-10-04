import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Stairs from './PageTransition/Stairs.jsx'
import GlobalDataContext from './GlobleDataContext/GlobalDataContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalDataContext >
      <BrowserRouter>
        <Stairs>
          <App />
        </Stairs>
      </BrowserRouter>
    </GlobalDataContext>
  </StrictMode>,
)
