import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSongDetail, getSongLyric } from "../service/player."
import { ILyric, parseLyric } from "@/utils/parse-lyric"

export const fetchCurrentSongAction = createAsyncThunk(
  "currentSong",
  async (id: number, { dispatch }) => {
    const res: any = await getSongDetail(id)
    console.log("获取歌曲 res==>", res)

    dispatch(changeCurrentSongAction(res.songs[0]))
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

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
}
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: []
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
    }
  }
})

export const { changeCurrentSongAction, changeLyricListAction } = playerSlice.actions

export default playerSlice.reducer
