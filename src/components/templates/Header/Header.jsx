import styles from './Header.module.scss';

import { MdNotifications } from "react-icons/md";


import { MenuProfile } from '../MenuProfile/MenuProfile';
import { useEffect, useState } from 'react';


export const Header = () => {
  const [notifications, setNotifications] = useState(false);
  
  useEffect(() => {
    setNotifications(true)
  }, [])


  return (
    <div className={styles.header}>
      <div className={styles.header__container}>

        <div 
          className=
          {
            notifications ? styles.header__isNotification : styles.header__notification
          }>
          <MdNotifications />
        </div>
        
        <div className={styles.header__userLogin}>
          <MenuProfile />
        </div>

        
      </div>
    </div>
  )
}


/**TODO: 
 * HACER NOTIFICACIÓN ICONO Y YA 
 * MENU PERFIL
 * CONFIGURACIÓN
 * CERRAR SESSION
 * 
 *
*/