import request from "@/service"

export function getSongDetail(ids: number | string) {
  return request.get({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 获取歌词
export function getSongLyric(id: number) {
  return request.get({
    url: "/lyric",
    params: {
      id
    }
  })
}

// 获取每日推荐歌曲
export function getRecommendSongs() {
  return request.get({
    url: "/recommend/songs"
  })
}

// 获取歌单详情
export function getPlaylistDetail(id: number) {
  return request.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
