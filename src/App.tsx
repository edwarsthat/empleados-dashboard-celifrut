import { Navigate } from 'react-router-dom'
import { useVerifyQR } from './hooks/useVerifyQR'

function App() {
  const { isLoading, error, data } = useVerifyQR()

  if (isLoading) return <p>Verificando...</p>
  if (error)     return <Navigate to="/login" replace />

  console.log(data)
  return (
    <div>
      <p>Verificado correctamente</p>
    </div>
  )
}

export default App
