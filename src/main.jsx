import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css';
import './components/i18n';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
