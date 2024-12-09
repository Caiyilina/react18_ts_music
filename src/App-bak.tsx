import { Link, useRoutes } from "react-router-dom"
import routes from "./router"
import { Suspense } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { IRootState, useAppDispatch, useAppSelector } from "./store"
import { changeMessage } from "./store/modules/counter"
import DemoClass from "./views/demo/demoClass"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"

function App() {
  // const { count, message } = useSelector(
  //   (state: IRootState) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   }),
  //   shallowEqual
  // )
  const { count, message } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()

  function handleChangeMessage() {
    dispatch(changeMessage("修改后的message"))
  }
  return (
    <div className='App'>
      <AppHeader />
      <p>
        count:{count},message:{message}
      </p>
      <button onClick={() => handleChangeMessage()}>修改message</button>
      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <div className='main'> {useRoutes(routes)}</div>
      </Suspense>

      <AppFooter />
    </div>
  )
}

export default App
