const config = {
    baseUrl: import.meta.env.VITE_BACKEND_API_URL
}

export const getAuthorizationConfig = () => {
    
    return {
        ...config
    }
    
}

export default config;
