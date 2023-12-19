import { useEffect, useState } from 'react';
import styles from './Home.module.scss';

// import { TbTrendingUp } from "react-icons/tb";
// import { MdEqualizer } from "react-icons/md";
// import { PiUsersFourFill } from "react-icons/pi"

import usersRegisters from '../../assets/images/icon/Icon-trending-up.svg';
import routesRegisters from '../../assets/images/icon/Icon-equalizer.svg';
import lessonsRegisters from '../../assets/images/icon/Icon-visibility.svg';
import { CardStatic } from '../../components/atoms/CardStatics/CardStatic';
// import

const cardsIcons = [
  {text: 'usuarios registrados', icon: usersRegisters},
  {text: 'rutas Existentes', icon: routesRegisters},
  {text: 'lessons', icon: lessonsRegisters},
]

const userPruebas = {
  creactio_date: '2/10/2023',
  user_role :'user',
  email: 'pruebas@pruebas.com',
  name: 'Admira Brom',
  username: 'pruebasAdmin'
}

const statics = [
  {name: "users", staticsNumber: 100},
  {name: "routes", staticsNumber: 16},
  {name: "lessons", staticsNumber: 10000},
]


export const Home = () => {

  const [dataUser, setDataUser] = useState({
    creactio_date: '',
    user_role :'',
    email: '',
    name: '',
  });
  const [dataStatics, setDataStatics] = useState([])

  useEffect(() => {

    setDataUser({...dataUser, 
      creactio_date: userPruebas.creactio_date,
      user_role: userPruebas.user_role,
      email: userPruebas.email,
      name: userPruebas.name,
      username: userPruebas.username
    })
    if(dataUser) {
      // console.log(dataUser);
      const dataIcon = cardsIcons.map((data, i) => {
        return {...data, 'staticsNumber': statics[i].staticsNumber}
      } )
      setDataStatics(dataIcon);
    }

  }, [])

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <h2 className={styles.home__title}>Bienvenido, {dataUser.name}</h2>
        <div className={styles.home__summary}>
          <h3 className={styles.home__summary_subtitle}>
            Resumen
          </h3>
          <div className={styles.home__summary_cards} >
            {dataStatics.map(dataCard => {
              return (<CardStatic key={dataCard.staticsNumber} data={dataCard}/>)
            })}
          </div>
        </div>
      </div>


    </div>
  )
}
/**
 * 
 * * HOME => HACER EL HOME (
 *            BIENVENIDO, CANTIDAD USUARIOS, LAS RUTAS EXISTENTES
 * UNA IMAGEN AL FINAL
 * 
 * numeros de lecciones vistas
 * 
 *             )
 * RUTAS => CREACIÓN DE RUTAS Y MOSTRAR LAS EXISTENTES
 * card de crear ruta, mostrar cards de las rutas existentes
 * 
 * cards rutas existente (img, nombre ruta, numero lecciones)
 * 
 * 
 * 
 * LESSION => CREACIÒN DE LESIONES Y TODAS LAS LESIONES EXISTENTES
 * 
 * PAGE => ETIQUETAS LESSIONES....
 * 
 * LISTAR => 
 *    BUSCADOR DE USUARIOS, BOTON DE CREAR
 * id, name, email, userRole, avatar
 *    TODOS LOS USUARIOS, (EDITAR, ELIMINAR)
 */