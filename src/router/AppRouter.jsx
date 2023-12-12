
import { Route, Routes } from "react-router-dom"

import { Template } from "../components/templates/Template"
import { Login } from "../pages/Login/Login"
import { Home } from "../pages/Home/Home"
import { Roads } from "../pages/Roads/Roads"
import { Lessons } from "../pages/Lessons/Lessons"
import { Users } from "../pages/Users/Users"
import { Logout } from "../components/atoms/Logout/Logout"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route element={<Template/>}>
              <Route path="/admin" element={<Home/>}/>
              <Route path="/rutas" element={<Roads/>}/>
              <Route path="/lecciones" element={<Lessons/>}/>
              <Route path="/users" element={<Users/>}/>
              
            </Route>

        </Routes>
    </>
    
  )
}
