import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { LikesProvider } from './context/LikesContext'
import { AuthProvider } from './context/AuthContext'
import App from './App.tsx'

import './styles/tokens.css'
import './index.css'
import './styles/ui.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)