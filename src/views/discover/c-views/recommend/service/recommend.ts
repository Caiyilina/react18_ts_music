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

// 获取推荐-入驻歌手
export function getSettleSinger(limit = 30) {
  return request.get({
    url: "/artist/list",
    params: {
      limit
    }
  })
}

// 获取推荐-热门主播
export function getHotDJ() {
  return request.get({
    url: "/dj/hot"
  })
}

export function getHotAnchor() {
  return request.get({
    url: "/dj/cat"
  })
}
