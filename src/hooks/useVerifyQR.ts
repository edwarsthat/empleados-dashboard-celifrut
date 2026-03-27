import { useState, useEffect } from 'react'
import useAuthStore from '../store/useAuthStore'
import { config } from '../config'

interface VerifyResponse {
  // Ajusta según la respuesta real del servidor
  [key: string]: unknown
}

interface VerifyState {
  isLoading: boolean
  data: VerifyResponse | null
  error: string | null
}

interface ParsedParams {
  serial: number | null
  token: string | null
  parseError: string | null
}

function parseAndCleanURL(): ParsedParams {
  const params = new URLSearchParams(window.location.search)
  const serialRaw = params.get('serial')
  const token = window.location.hash.slice(1) // elimina el '#'

  // Limpiar el fragmento del historial inmediatamente
  window.history.replaceState(null, '', window.location.pathname + window.location.search)

  if (!serialRaw || !token) {
    return { serial: null, token: null, parseError: 'Parámetros inválidos en la URL.' }
  }

  const serial = Number(serialRaw)
  if (isNaN(serial)) {
    return { serial: null, token: null, parseError: 'El serial no es un número válido.' }
  }

  return { serial, token, parseError: null }
}

export function hasQRParams(): boolean {
  const params = new URLSearchParams(window.location.search)
  const tieneQR = params.has('serial') && window.location.hash.length > 1
  return tieneQR
}

export function useVerifyQR(): VerifyState {
  // Lazy initializer: parsea y limpia la URL una sola vez antes del primer render
  const [{ serial, token, parseError }] = useState<ParsedParams>(parseAndCleanURL)
  const { setIsLogin, setPersonal } = useAuthStore()
  const [state, setState] = useState<VerifyState>({
    isLoading: parseError === null,
    data: null,
    error: parseError,
  })

  useEffect(() => {
    // Si hubo error de parseo, no hay nada que fetchear
    if (serial === null || token === null) return

    let cancelled = false

    const requestLogin = async () => {
      try {
        const response = await fetch(`${config.apiUrl}/talento_humano/verify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ serial, token }),
        })
        if (!response.ok) {
          const msg =
            response.status === 401
              ? 'No autorizado. Token inválido o expirado.'
              : `Error del servidor (${response.status}).`
          throw new Error(msg)
        }
        const data = await response.json()
        if (!cancelled) {
          setState({ isLoading: false, data, error: null })
        }
        setIsLogin(true)
        setPersonal(data.personal)
      } catch (err) {
        if (err instanceof Error) {
          if (!cancelled) {
            setState({ isLoading: false, data: null, error: err.message })
          }
        }
      }
    }

    requestLogin()
    return () => {
      cancelled = true
    }
  }, [serial, token, setIsLogin, setPersonal])

  return state
}
