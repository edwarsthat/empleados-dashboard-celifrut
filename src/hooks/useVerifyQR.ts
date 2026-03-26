import { useState, useEffect } from 'react'

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

export function useVerifyQR(): VerifyState {
  // Lazy initializer: parsea y limpia la URL una sola vez antes del primer render
  const [{ serial, token, parseError }] = useState<ParsedParams>(parseAndCleanURL)

  const [state, setState] = useState<VerifyState>({
    isLoading: parseError === null,
    data: null,
    error: parseError,
  })

  useEffect(() => {
    // Si hubo error de parseo, no hay nada que fetchear
    if (serial === null || token === null) return

    let cancelled = false

    fetch(`${import.meta.env.VITE_API_URL}/talento_humano/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ serial, token }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const msg =
            res.status === 401
              ? 'No autorizado. Token inválido o expirado.'
              : `Error del servidor (${res.status}).`
          throw new Error(msg)
        }
        return res.json() as Promise<VerifyResponse>
      })
      .then((data) => {
        if (!cancelled) setState({ isLoading: false, data, error: null })
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ isLoading: false, data: null, error: err.message })
      })

    return () => {
      cancelled = true
    }
  }, [serial, token])

  return state
}
