
import styles from './Login.module.scss';
import { AuthHeader } from '../../components/molecules/AuthHeader/AuthHeader';
import { LoginForm } from '../../components/molecules/LoginForm/LoginForm';

import banner from '../../assets/images/banner__login.jpg'

export const Login = () => {
  return (
    <div className={styles.login__container}>
        <div className={styles.login__left}>
          
            <AuthHeader/>
            <LoginForm/>
        </div>
        <div className={styles.login__right}>
            <div className={styles.login__loginImage}>
              <figure>
                <img src={banner} alt="" />
              </figure>
            </div>
        </div>
    </div>
  )
}
