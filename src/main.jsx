// src/main.jsx  ← THIS MUST BE LIKE THIS
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'  // ← Your context

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>                {/* ← Wraps everything */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)