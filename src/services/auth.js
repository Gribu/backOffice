
const baseUrl = import.meta.env.VITE_BACKEND_API_URL;

export const loginWithEmailAndPassword = async (userCredentials) => {
    const headers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    }
    console.log(`${baseUrl}user/login`);

    const resp = await fetch(`${baseUrl}user/login`, headers);
    const data = await resp.json();
    console.log(data);
    
}