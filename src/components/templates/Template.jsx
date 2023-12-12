import { Outlet } from "react-router-dom"
import { Header } from "./Header/Header"
import { SideBar } from "./sideBar/SideBar"

export const Template = () => {
  return (
    <>
        <Header/>
        <SideBar/>
        <main>
          <Outlet/>
        </main>
    </>
  )
}
