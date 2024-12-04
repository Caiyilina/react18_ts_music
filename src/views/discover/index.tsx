import React, { FC, memo, ReactNode, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = memo(() => {
  return (
    <div>
      <p>Discover-导航</p>
      <Link to='/discover/recommend'>推荐</Link>
      <Link to='/discover/ranking'>排行榜</Link>
      <Link to='/discover/songs'>歌单</Link>
      <Link to='/discover/album'>主播电台</Link>
      <Link to='/discover/artist'>歌手</Link>
      <Link to='/discover/djradio'>新碟上架</Link>

      <Suspense fallback={<div>loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
})

export default Discover
