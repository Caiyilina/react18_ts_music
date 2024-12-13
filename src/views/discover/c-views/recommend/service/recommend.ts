import request from "@/service"

export function getBanners() {
  return request.get({
    url: "/banner"
  })
}
export function getHotRecommend(limit = 30) {
  return request.get({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums() {
  return request.get({
    url: "/album/newest"
  })
}

export function getTopList(id: number) {
  return request.get({
    url: "/top/list",
    params: {
      id
    }
  })
}

export function getPlaylistDetail(id: number) {
  return request.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
