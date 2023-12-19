const baseUrl = import.meta.env.VITE_BACKEND_API_URL;

class UserService {
    static async getAllUsers(token) {
        const headers = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
        }
        const resp = await fetch(`${baseUrl}/admin/users/all`, headers);
        const data = await resp.json()
        return data;
    }
    static async getUserById(token, id) {
        const headers = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
        }
        const resp = await fetch(`${baseUrl}/admin/users/${id}`, headers);
        const data = await resp.json()
        return data;
    }
    static async deletetUser(token, id) {
        const headers = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            
        }
        const resp = await fetch(`${baseUrl}/users/delete/${id}`, headers);
        const data = await resp.json()
        return data;
    }
}

export default UserService;