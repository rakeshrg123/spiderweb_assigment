import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="solutionGradient"></div> {/* Background Gradient */}
    <div className="relative z-10 px-4 md:px-0"> {/* Ensures content stays above */}
      <App />
    </div>
  
  </StrictMode>,
)
