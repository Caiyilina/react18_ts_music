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
