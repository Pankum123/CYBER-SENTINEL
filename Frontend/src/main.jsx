import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { KeywordProvider } from './context/KeywordProvider.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <KeywordProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </KeywordProvider>
  </BrowserRouter>
)
