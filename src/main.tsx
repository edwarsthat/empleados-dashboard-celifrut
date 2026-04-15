import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Login from './pages/Login.tsx'
import SocioculturalPage from './pages/SocioculturalPage.tsx'
import FormularioSociocultural from './components/infoSocioEconomica/FormularioSociocultural.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import Layout from './components/Layout.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro-socioeconomico" element={<FormularioSociocultural />} />
        <Route element={<Layout />}>
          <Route path="/"       element={<App />} />
          <Route path="/verify" element={<App />} />
          <Route path="/registro-sociocultural" element={<SocioculturalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>,
)
