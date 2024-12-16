import { Navigate, RouteObject } from "react-router-dom"

import { lazy } from "react"

// 路由懒加载 分包处理
const Discover = lazy(() => import("@/views/discover"))

const Recommend = lazy(() => import("@/views/discover/c-views/recommend"))

const Album = lazy(() => import("@/views/discover/c-views/album"))

const Artist = lazy(() => import("@/views/discover/c-views/artist"))

const Ranking = lazy(() => import("@/views/discover/c-views/ranking"))

const Songs = lazy(() => import("@/views/discover/c-views/songs"))

const DJRadio = lazy(() => import("@/views/discover/c-views/djradio"))

const Download = lazy(() => import("@/views/download"))
const Focus = lazy(() => import("@/views/focus"))
const Mine = lazy(() => import("@/views/mine"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to='/discover'></Navigate>
  },
  {
    path: "/discover",
    element: <Discover></Discover>,

    children: [
      {
        path: "/discover/recommend",
        element: <Recommend></Recommend>,
        index: true
      },
      {
        path: "/discover/album",
        element: <Album></Album>
      },
      {
        path: "/discover/artist",
        element: <Artist></Artist>
      },
      {
        path: "/discover/ranking",
        element: <Ranking></Ranking>
      },
      {
        path: "/discover/songs",
        element: <Songs></Songs>
      },
      {
        path: "/discover/djradio",
        element: <DJRadio></DJRadio>
      }
    ]
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
