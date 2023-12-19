import { useState } from "react"
import { loginWithEmailAndPassword } from "../services/auth";

export const useAuth = (userCredentials) => {
  
    const [user, setUser] = useState({});
    
    const login = async () => {
        loginWithEmailAndPassword(userCredentials)
            .then((resp) => {
                console.log(resp);
                setUser(resp);
            })
            .catch((error) => {
                console.log("error login", error);
            })
    }
    return {
        user, 
        login
    }
}
