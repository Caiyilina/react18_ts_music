import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBanners, getHotRecommend, getNewAlbums, getPlaylistDetail } from "../service/recommend"

export const fetchBannersDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res: any = await getBanners()
  dispatch(changeBannersAction(res.banners))
  // return res.banners
})

export const fetchHotRecommendDataAction = createAsyncThunk(
  "hotRecommend",
  async (arg, { dispatch }) => {
    const res: any = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)

export const fetchNewAlbumDataAction = createAsyncThunk("newAlbum", async (arg, { dispatch }) => {
  const res: any = await getNewAlbums()
  console.log("打印fetchNewAlbum==>", res)
  dispatch(changeNewAlbumAction(res.albums))
})
// 重构 一次性发多个异步请求
export const fetchRecommendDataAction = createAsyncThunk("fetchData", async (_, { dispatch }) => {
  getBanners().then((res: any) => {
    dispatch(changeBannersAction(res.banners))
  })
  getHotRecommend(8).then((res: any) => {
    dispatch(changeHotRecommendAction(res.result))
  })
  getNewAlbums().then((res: any) => {
    dispatch(changeNewAlbumAction(res.albums))
  })
})
// 获取榜单
export const fetchRankingDataAction = createAsyncThunk("rankingData", async (_, { dispatch }) => {
  const rankingIds = [19723756, 3779629, 2884035]

  // 获取榜单数据
  for (const id of rankingIds) {
    getPlaylistDetail(id).then((res: any) => {
      // dispatch(changeHotRecommendAction(res.result))
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res.playlist))
          break
        case 3779629:
          dispatch(changeNewRankingAction(res.playlist))
          break
        case 2884035: // 原创榜
      }
    })
  }
})

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  upRanking: object
  newRanking: object
  originRanking: object
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
}

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbum = payload
    }
  },
  extraReducers: builder => {
    // builder
    //   .addCase(fetchBannersDataAction.pending, () => {
    //     console.log("pending")
    //   })
    //   .addCase(fetchBannersDataAction.fulfilled, (state, { payload }) => {
    //     state.banners = payload
    //   })
    //   .addCase(fetchBannersDataAction.rejected, () => {
    //     console.log("rejected")
    //   })
  }
})

export const { changeBannersAction, changeHotRecommendAction, changeNewAlbumAction } =
  recommendSlice.actions

export default recommendSlice.reducer
