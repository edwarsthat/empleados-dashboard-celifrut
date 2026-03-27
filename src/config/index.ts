const isProd = import.meta.env.PROD

export const config = {
    apiUrl: import.meta.env.VITE_API_URL as string,
    isDev: !isProd,
    isProd,
} as const
