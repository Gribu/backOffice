import { Logo } from '../../atoms/Logo/Logo'
import styles from './AuthHeader.module.scss'

export const AuthHeader = () => {
  return (
    <div className={styles.authHeader}>
        <div className={styles.authHeader__container}>
          <Logo className={styles.authHeader__logoContainer}/>
        </div>
    </div>
  )
}
