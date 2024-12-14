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
  // 方式1 使用for循环遍历
  // for (const id of rankingIds) {
  //   getPlaylistDetail(id).then((res: any) => {
  //     switch (id) {
  //       case 19723756:
  //         dispatch(changeUpRankingAction(res.playlist))
  //         break
  //       case 3779629:
  //         dispatch(changeNewRankingAction(res.playlist))
  //         break
  //       case 2884035: // 原创榜
  //         dispatch(changeOriginRankingAction(res.playlist))
  //         break
  //     }
  //   })
  // }

  // 方式2 使用promise.all 保证请求顺序 请求同时进行
  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getPlaylistDetail(id))
  }
  Promise.all(promises).then(res => {
    const playlists = res.map((item: any) => item.playlist)
    dispatch(changeRankingListAction(playlists))
  })
})

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
  upRanking: object
  newRanking: object
  originRanking: object
  rankingList: any[]
}

const initialState: IRecommendState = {
  banners: [],
  hotRecommend: [],
  newAlbum: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  rankingList: []
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
    },
    changeUpRankingAction(state, { payload }) {
      state.upRanking = payload
    },
    changeNewRankingAction(state, { payload }) {
      state.newRanking = payload
    },
    changeOriginRankingAction(state, { payload }) {
      state.originRanking = payload
    },
    changeRankingListAction(state, { payload }) {
      state.rankingList = payload
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

export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeUpRankingAction,
  changeNewRankingAction,
  changeOriginRankingAction,
  changeRankingListAction
} = recommendSlice.actions

export default recommendSlice.reducer
