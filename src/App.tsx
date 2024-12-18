import { Link, useRoutes } from "react-router-dom"
import routes from "./router"
import { Suspense, useEffect } from "react"
import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "./store"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import { Button } from "antd"
import PlayerBar from "./views/player/app-player-bar"
import { fetchCurrentSongAction, fetchLyricAction } from "./views/player/store/player"

function App() {
  const { count, message } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  useEffect(() => {
    //  获取某一首歌曲
    dispatch(fetchCurrentSongAction(475530855))
    dispatch(fetchLyricAction(475530855))
  })

  return (
    <div className='App'>
      <AppHeader />

      <Suspense fallback={<div>loading...</div>}>
        <div className='main'> {useRoutes(routes)}</div>
      </Suspense>

      {/* 播放器工具栏 */}
      <PlayerBar></PlayerBar>

      <AppFooter />
    </div>
  )
}

export default App
