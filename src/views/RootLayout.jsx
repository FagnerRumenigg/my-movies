import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export function RootLayout(){
  return ( 
  <>
    <Header />
    <Outlet/>
  </>
  )
}