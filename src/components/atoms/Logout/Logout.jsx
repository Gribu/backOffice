import { NavLink } from 'react-router-dom';

import styles from './Logout.module.scss';

import { MdLogout } from "react-icons/md";

export const Logout = () => {
  return (
      <NavLink to='/logout' className={styles.logout__container} >
        <figure className={styles.logout__icon}>
          <MdLogout />
        </figure>
        <p className={styles.logout__text}>Logout</p>
      </NavLink>
 
  )
}
