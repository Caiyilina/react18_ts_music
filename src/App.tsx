import { Link, useRoutes } from "react-router-dom"
import routes from "./router"
import { Suspense } from "react"
import { shallowEqual } from "react-redux"
import { useAppDispatch, useAppSelector } from "./store"
import AppHeader from "./components/app-header"
import AppFooter from "./components/app-footer"
import { Button } from "antd"

function App() {
  const { count, message } = useAppSelector(
    state => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )
  // const dispatch = useDispatch()
  const dispatch = useAppDispatch()

  return (
    <div className='App'>
      <AppHeader />

      <Suspense fallback={<div>loading...</div>}>
        <div className='main'> {useRoutes(routes)}</div>
      </Suspense>

      <Button>按钮按钮</Button>
      <AppFooter />
    </div>
  )
}

export default App
