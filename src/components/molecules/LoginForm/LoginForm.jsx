
import {  useEffect, useState } from 'react';
import { Input } from '../../atoms/Input/Input'
import styles from './LoginForm.module.scss';
import { validateEmail } from '../../../utils/validateEmail';
import { loginWithEmailAndPassword } from '../../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
// import { useAuth } from '../../../hooks/useAuth';

const validateForm  = (data) => {
  let errors = {};
  if(!validateEmail(data.email)) {
    errors.email = "El correro electrónico no tiene un formato valido";
  }
  
  if(data.password.length <= 2) {
    errors.password = "La contraseña no debe tener menos de 3 caracteres";
  }

  
  console.log(errors);
  return errors
}

export const LoginForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  // const [user, setUser] = useState(null);
  const { login } = useApp();
  const [errors, setErrors] = useState({});
  const navegate = useNavigate();

  
  const handleForm = (value) => {
    setUserData({...userData, [value.id]: value.value})
    console.log(userData);
  }

 

  const handleSubmit =  (e) => {
    const errors = validateForm(userData);
    e.preventDefault();
    // const {email, password} = userData;
    if(Object.entries(errors).length > 0) {
      setErrors(errors);
      return;
    }
    if(Object.keys(errors).length === 0) {
      setErrors(false);
      loginWithEmailAndPassword(userData)
        .then((resp) => {
          login({
            ...resp,
            token: resp.token
          });
          console.log(resp);
          navegate(resp.userRole.toLowerCase() === 'admin' ? '/admin' : ('/' && setErrors(true)));
          // TODO: crear el estado global....
        })
        .catch((error) => {
          console.log("error login", error);
          setErrors(true)
        });

        
    }


  }
  /**
   * hagan validación bien
   */


  return (
    <div className={ styles.loginForm__container}>
        <h1>Login</h1>

        {errors == true && <p>No entras perro</p>}
        <form className={styles.loginForm__form} onSubmit={handleSubmit}>
            <div className={styles.loginForm__input}>
              <label htmlFor="username">Email</label>
              {errors.email && <p>{errors.email}</p>}
              <Input 
                type="text" placeholder="Ingresa email" id="email"
                onChange={handleForm}
                />
            </div>
            <div className={styles.loginForm__input}>
              <label htmlFor="password">Password</label>
                {errors.password  && <p>{errors.password}</p>}
              
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
