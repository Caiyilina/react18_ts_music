import { useRoutes } from "react-router-dom"
import routes from "./router"
import Download from "./views/download"

function App() {
  return (
    <div className='App'>
      <Download>
        <p>children123</p>
      </Download>

      <div className='main'> {useRoutes(routes)}</div>
    </div>
  )
}

export default App
