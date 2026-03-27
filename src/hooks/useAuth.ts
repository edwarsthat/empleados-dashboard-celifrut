import { useEffect, useState } from 'react'
import useAuthStore from '../store/useAuthStore'
import { config } from '../config'

export function useAuth(): { isLoading: boolean } {
    const { setIsLogin, setPersonal } = useAuthStore()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let cancelled = false
        const loginRequest = async () => {
            try {
                const response = await fetch(`${config.apiUrl}/auth/me`, {
                    method: 'GET',
                    credentials: 'include',
                })
                if (!response.ok) throw new Error('Sin sesión')
                const data = await response.json()
                if (cancelled) return
                setIsLogin(true)
                setPersonal(data)
            } catch {
                if (cancelled) return
                setIsLogin(false)
            } finally {
                if (!cancelled) setIsLoading(false)
            }
        }
        loginRequest()

        return () => { cancelled = true }
    }, [setIsLogin, setPersonal])

    return { isLoading }
}
