
const baseUrl = import.meta.env.VITE_BACKEND_API_URL;

// import axios from "axios";
// import config from "./config";

export const loginWithEmailAndPassword = async (userCredentials) => {
    
    const headers = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    }

    const resp = await fetch(`${baseUrl}/user/login`, headers);
    const data = await resp.json();
    return data;
}