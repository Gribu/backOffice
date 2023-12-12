import { NavLink } from 'react-router-dom';
import styles from './MenuDashboard.module.scss';

import { FaHouse, FaRoute, FaGraduationCap, FaUserGroup } from 'react-icons/fa6';


const menu = [
    {id: 1, icon: <FaHouse/>, name: 'Home', url: '/admin'},
    {id: 2, icon: <FaRoute/>, name: 'Rutas', url: '/rutas'},
    {id: 3, icon: <FaGraduationCap/>, name: 'Lecciones', url: '/lecciones'},
    {id: 4, icon: <FaUserGroup />, name: 'Usuarios', url: '/users'},
]


export const MenuDashboard = () => {

    

  return (
    <nav className={styles.menuDashboard__container}>
        <ul className={styles.menuDashboard__list}>
            {menu.map(menuItem => {
                console.log(menuItem);
                const {id, icon, name, url} = menuItem;
                return (
                    <li className={styles.menuDashboard__item} key={id}>
                        <NavLink to={url} 
                                className={
                                    ({ isActive }) => isActive ? styles.menuDashboard__active : 
                                    styles.menuDashboard__link }>
                            <div className={styles.menuDashboard__icon}>
                                <figure>{icon}</figure>
                            </div>
                            <p>{name}</p>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
            
    </nav>
  )
}
