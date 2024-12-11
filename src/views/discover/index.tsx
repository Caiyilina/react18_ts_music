import React, { FC, memo, ReactNode, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"
import NavBar from "./c-cpns/nav-bar"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = memo(() => {
  return (
    <div>
      <NavBar></NavBar>

      <Suspense fallback={<div>loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
})

export default Discover
