
import {  useState } from 'react';
import { Input } from '../../atoms/Input/Input'
import styles from './LoginForm.module.scss';
import { validateEmail } from '../../../utils/validateEmail';
import { loginWithEmailAndPassword } from '../../../services/auth';

export const LoginForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(false);

  const handleForm = (value) => {
    setUserData({...userData, [value.id]: value.value})
  }
  const handleSubmit =  (e) => {
    const {username, password} = userData;
    e.preventDefault()
    console.log(`-${username}-`);
    if(username === '' && !validateEmail(username)) {
      setError(true);
    }
    loginWithEmailAndPassword(userData);

  }


  return (
    <div className={ styles.loginForm__container}>
        <h1>Login</h1>
        <form className={styles.loginForm__form} onSubmit={handleSubmit}>
            <div className={styles.loginForm__input}>
              <label htmlFor="username">Email</label>
              {error && <p>error</p>}
              <Input 
                type="text" placeholder="Ingresa email" id="username"
                onChange={handleForm}
              />
            </div>
            <div className={styles.loginForm__input}>
              <label htmlFor="password">Password</label>
              {error && <p>error</p>}
              <Input 
                type="password" placeholder="password" id="password"
                onChange={handleForm}
              />
            </div>

            <button className={styles.loginForm__submit} type="submit" value="enviar" >
              Enviar
            </button>
        </form>
    </div>
  )
}
