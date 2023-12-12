import { Logo } from '../../atoms/Logo/Logo';
import { Logout } from '../../atoms/Logout/Logout';
import { MenuDashboard } from '../../templates/MenuDashboard/MenuDashboard';
import styles from './Sidebar.module.scss';

export const SideBar = () => {
  return (
    <div className={styles.sidebar__content}>
      <div className={styles.sidebar__image}>
        <Logo />
      </div>
      <MenuDashboard />
      <div className={styles.sidebar__logout}>
        <Logout/>
      </div>
    </div>
  
    
  )
}