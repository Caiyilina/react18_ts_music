import { Navigate, RouteObject } from "react-router-dom"
import Discover from "@/views/discover"
import Download from "@/views/download"
import Focus from "@/views/focus"
import Mine from "@/views/mine"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to='/discover'></Navigate>
  },
  {
    path: "/discover",
    element: <Discover></Discover>
  },
  {
    path: "/download",
    element: <Download></Download>
  },
  {
    path: "/focus",
    element: <Focus></Focus>
  },
  {
    path: "/mine",
    element: <Mine></Mine>
  }
]

export default routes
