import React, { FC, memo, ReactNode } from "react"
import { NavBarWrapper } from "./style"
import { Link, NavLink } from "react-router-dom"
import { discoverMenu } from "@/assets/data/local-data"

interface IProps {
  children?: ReactNode
}

const NavBar: FC<IProps> = memo(() => {
  return (
    <NavBarWrapper>
      <div className='nav wrap-v1'>
        {discoverMenu.map(item => {
          return (
            <div className='item' key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </NavBarWrapper>
  )
})

export default NavBar
