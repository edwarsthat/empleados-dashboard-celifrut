import { Navigate } from 'react-router-dom'
import { useVerifyQR, hasQRParams } from './hooks/useVerifyQR'
import ProfilePage from './pages/ProfilePage'
import { useAuth } from './hooks/useAuth'
import useAuthStore from './store/useAuthStore'

function QRFlow() {
  const { isLoading, error } = useVerifyQR()
  if (isLoading) return <p>Verificando...</p>
  if (error) return <Navigate to="/login" replace />

  return <ProfilePage />
}

function AuthFlow() {
  // const { isLoading } = useAuth()
  // const isLogin = useAuthStore((s) => s.isLogin)

  // if (isLoading) return <p>Verificando sesión...</p>
  // if (!isLogin) return <Navigate to="/login" replace />
  return <ProfilePage />
}

function App() {
  const tieneQr = hasQRParams()
  return tieneQr ? <QRFlow /> : <AuthFlow />
}

export default App
