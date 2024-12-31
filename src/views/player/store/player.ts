import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {
  getPlaylistDetail,
  getRecommendSongs,
  getSongDetail,
  getSongLyric
} from "../service/player."
import { ILyric, parseLyric } from "@/utils/parse-lyric"
import { IRootState } from "@/store"

// 设置泛型
// 当前歌曲
export const fetchCurrentSongAction = createAsyncThunk<void, number, { state: IRootState }>(
  "currentSong",
  async (id: number, { dispatch, getState }) => {
    // 1、从列表中尝试是否找到当前歌曲
    const playSongList = getState().player.playSongList
    const findIndex = playSongList.findIndex(item => item.id === id)
    if (findIndex !== -1) {
      // 找到歌曲
      dispatch(changeCurrentSongAction(playSongList[findIndex]))
      dispatch(changePlaySongIndexAction(findIndex))
      return
    }

    // 2、找不到歌曲，就请求列表
    const res: any = await getSongDetail(id)
    const song = res.songs[0]
    dispatch(changeCurrentSongAction(song))
    const newPlaySongList = [...playSongList]
    newPlaySongList.push(song)
    // 3、更新列表
    dispatch(changePlaySongListAction(newPlaySongList))
    dispatch(changePlaySongIndexAction(newPlaySongList.length - 1))

    // 4、获取歌词
    dispatch(fetchLyricAction(id))
  }
)
// 获取歌词
export const fetchLyricAction = createAsyncThunk("lyric", async (id: number, { dispatch }) => {
  const res: any = await getSongLyric(id)
  console.log("获取歌词 res==>", res)
  // 1、获取歌词字符串
  const lyricStr = res.lrc.lyric
  // 2、解析歌词字符串
  const lyrics = parseLyric(lyricStr)
  console.log("lyrics==>", lyrics)

  // 3、保存歌词
  dispatch(changeLyricListAction(lyrics))
})

// 获取每日推荐
export const fetchDailyRecommendAction = createAsyncThunk(
  "dailyRecommend",
  async (_, { dispatch }) => {
    const res: any = await getRecommendSongs()
    console.log("获取每日推荐 res==>", res)
    dispatch(changePlaySongListAction(res.data.dailySongs))
  }
)
// 获取指定歌单的播放列表
export const fetchPlayListAction = createAsyncThunk<void, number, { state: IRootState }>(
  "playList",
  async (id: number, { dispatch }) => {
    const res: any = await getPlaylistDetail(id)
    const list = res?.playlist?.tracks
    // 保存播放列表
    dispatch(changePlaySongListAction(list))
    // 切换歌曲
    const songId: number = list?.[0]?.id
    dispatch(fetchCurrentSongAction(songId))
  }
)

// 切换歌曲
export const changeMusicAction = createAsyncThunk<void, boolean, { state: IRootState }>(
  "changeMusic",
  async (isNext: boolean, { getState, dispatch }) => {
    // 1、获取播放模式、索引、播放列表
    const player = getState().player
    const playMode = player.playMode
    const songIndex = player.playSongIndex
    const songList = player.playSongList
    // 2、获取下一首歌的索引
    let newIndex = songIndex
    if (playMode === 1) {
      // 随机播放
      newIndex = Math.floor(Math.random() * songList.length)
      console.log(playMode, "随机播放 newIndex", newIndex)
    } else {
      // 顺序播放，单曲循环
      newIndex = isNext ? songIndex + 1 : songIndex - 1
      console.log(playMode, "顺序播放，单曲循环newIndex==>", newIndex)
    }
    // 处理newIndex
    if (newIndex < 0) {
      newIndex = songList.length - 1
    } else if (newIndex > songList.length - 1) {
      newIndex = 0
    }
    // 3、获取当前的歌曲
    const currentSong = songList[newIndex]
    // 4、切换歌曲
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changePlaySongIndexAction(newIndex))
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
  playMode: number
}
const initialState: IPlayerState = {
  currentSong: {}, // 当前歌曲
  lyrics: [], // 歌词
  lyricIndex: -1, // 歌词索引
  playSongList: [], // 播放列表
  playSongIndex: -1, // 播放歌曲的下标
  playMode: 0 // 播放模式，0:顺序播放，1:随机播放，2:单曲循环
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricListAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricListAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changePlaySongIndexAction,
  changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer
