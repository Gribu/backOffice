import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext"
import UserService from "../services/users";


export const useUsers = ({ id } = {}) => {

    const { user } = useApp();
    const { token } = user;
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(null);

    const fetchData = async () => {
        try {
            let data = [];
            if(id) {
                data = await UserService.getUserById(token, id);
            } else {
                data = await UserService.getAllUsers(token);
            }
            setUsers(data);
            console.log(data);
        } catch (error) {
            setErrors(error);
          }
    }

    useEffect(() => {
        fetchData();
      }, []);
 
    const deleteUser = (userId) => {
    return UserService.deleteUser(token, userId).then();
    };
  return {
    users,
    setUsers,
    deleteUser,
    errors
  }
}

export default useUsers;
