// import React from 'react'

import { useState } from "react";
import { Input } from "../../components/atoms/Input/Input"

export const CreateUser = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
  const [errors, setErrors] = useState({});

  const handleForm = (value) => {
    setUserData({...userData, [value.id]: value.value})
  }
  const handleSubmit = (e) => {
    // const errors = validateForm(userData);
    e.preventDefault()
    console.log("Enviando...");
    // const {email, password} = userData;
    // if(Object.entries(errors).length > 0) {
    //   setErrors(errors);
    //   return;
    // }
    // if(Object.keys(errors).length === 0) {
    //   setErrors(false);
    //   loginWithEmailAndPassword(userData)
    //     .then((resp) => {
    //       login({
    //         ...resp,
    //         token: resp.token
    //       });
    //       console.log(resp);
    //       navegate(resp.userRole.toLowerCase() === 'admin' ? '/admin' : ('/' && setErrors(true)));
    //       // TODO: crear el estado global....
    //     })
    //     .catch((error) => {
    //       console.log("error login", error);
    //       setErrors(true)
    //     });
    // }


  }

  return (
    <>
    <div>CreateUser</div>

    <div >
        <h1>Login</h1>

        {/* {errors == true && <p>No entras perro</p>} */}
        <form 
        // className={styles.loginForm__form} 
        onSubmit={handleSubmit}
        >
            <div 
            // className={styles.loginForm__input}
            >
              <label htmlFor="username">Email</label>
              {/* {errors.email && <p>{errors.email}</p>} */}
              <Input 
                type="text" placeholder="Ingresa email" id="email"
                onChange={handleForm}
                />
            </div>
            <div 
            // className={styles.loginForm__input}
            >
              <label htmlFor="name">Nombre</label>
              {/* {errors.email && <p>{errors.email}</p>} */}
              <Input 
                type="text" placeholder="Ingresa nombre" id="name"
                onChange={handleForm}
                />
            </div>
            <div 
            // className={styles.loginForm__input}
            >
              <label htmlFor="username">User name</label>
              {/* {errors.email && <p>{errors.email}</p>} */}
              <Input 
                type="text" placeholder="Ingresa username" id="username"
                onChange={handleForm}
                />
            </div>
            <div 
            // className={styles.loginForm__input}
            >
              <label htmlFor="password">Password</label>
                {/* {errors.password  && <p>{errors.password}</p>} */}
              
              <Input 
                type="password" placeholder="password" id="password"
                onChange={handleForm}
              />
            </div>
            <div 
            // className={styles.loginForm__input}
            >
              <label htmlFor="userRole">Rol</label>
                {/* {errors.password  && <p>{errors.password}</p>} */}
              
              <select name="userRole" id="userRole" onChange={handleForm}>
                <option value="USER">User</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div 
            // className={styles.loginForm__input}
            >
              <label htmlFor="avatar">Avatar</label>
                {/* {errors.password  && <p>{errors.password}</p>} */}
              
              <select name="avatar" id="avatar">
                <option value="MAN">MAN</option>
                <option value="WOMAN">WOMAN</option>
              </select>
            </div>

            <button 
            // className={styles.loginForm__submit} 
            type="submit" value="enviar" >
              Enviar
            </button>
        </form>
    </div>

    </>
  )
}
