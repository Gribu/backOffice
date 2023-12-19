
import { NavLink } from "react-router-dom";
import useUsers from "../../hooks/useUsers";

export const Users = () => {

  const { users, setUsers, deleteUser} = useUsers();

  console.log(users);

  const handleDelete = () => {
    console.log('eliminando...');
  }
  const handleEdit = () => {
    deleteUser(2);
    console.log('editando...');
  }

  return (
    <div>
      <h2>Usuarios</h2>
      <NavLink to="/users/crear">Agregar</NavLink>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Avatar</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.userRole}</td>
                <td>{user.avatar}</td>
                <td>
                  <button onClick={handleDelete} >Elimina</button>
                  <button onClick={handleEdit}>Editar</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}
/**
 * TODO:
 * 
 * Listar los usuarios
 * (nombre, apellidos, email, )
 * solo listar
 * quitarlo
 * 
 */