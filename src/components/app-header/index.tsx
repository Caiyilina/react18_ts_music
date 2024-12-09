import React, { FC, memo, ReactNode } from "react"
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"
import { Link } from "react-router-dom"
import headerTitles from "@/assets/data/header-titles.json"

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = memo(() => {
  function showItem(item: any) {
    if (item.type === "path") return <Link to={item.link}>{item.title}</Link>
    else if (item.type === "link")
      return (
        <a href={item.link} rel='noopener noreferrer' target='_blank'>
          {item.title}
        </a>
      )
  }
  return (
    <HeaderWrapper>
      <div className='content'>
        <HeaderLeft>
          <a href='/' className='logo sprite_01'>
            网易云音乐
          </a>
          <div className='title-list'>
            {headerTitles.map(item => {
              return (
                <div key={item.title} className='item'>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>right </HeaderRight>
      </div>
    </HeaderWrapper>
  )
})

export default AppHeader
