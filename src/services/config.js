const config = {
    baseURL: import.meta.env.VITE_BACKEND_API_URL
}

export const getAuthorizationConfig = (token) => {
    
    return {
        ...config,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    
};

export default config;
