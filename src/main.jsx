import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Routes/AppRouter'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
)