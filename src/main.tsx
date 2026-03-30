import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/"       element={<App />} />
        <Route path="/verify" element={<App />} />
        <Route path="/login"  element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>,
)
