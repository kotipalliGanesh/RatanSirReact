import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
  import Welcome from './components/Welcome.jsx'
  import First from './components/First.jsx'
  import Third from './components/Third.jsx'
createRoot(document.getElementById('root')).render(
  <Third></Third>,
)
