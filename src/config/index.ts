const isProd = import.meta.env.PROD

export const config = {
    apiUrl: import.meta.env.DEV ? '/api' : 'https://credenciales.celifrut.com/api',
    isDev: !isProd,
    isProd,
} as const
