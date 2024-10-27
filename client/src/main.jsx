import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import our custom CSS
import './scss/stylesheet.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
