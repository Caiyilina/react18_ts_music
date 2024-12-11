import React, { FC, memo, ReactNode } from "react"
import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"
import { Link, NavLink } from "react-router-dom"
import headerTitles from "@/assets/data/header-titles.json"
import { Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = memo(() => {
  function showItem(item: any) {
    if (item.type === "path")
      return (
        <NavLink to={item.link}>
          {item.title} <i className='icon sprite_01'></i>
        </NavLink>
      )
    else if (item.type === "link")
      return (
        <a href={item.link} target='blank'>
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
                <div key={item.title} className='item '>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <span className='input'>
            <Input
              className='search'
              placeholder='音乐/视频/电台/用户'
              prefix={<SearchOutlined />}
            />
          </span>
          <span className='center'>创作者中心</span>
          <span className='login'>登录</span>
        </HeaderRight>
      </div>
      <div className='divider'></div>
    </HeaderWrapper>
  )
})

export default AppHeader
