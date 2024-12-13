import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBanners, getHotRecommend, getNewAlbums } from "../service/recommend"

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

interface IRecommendState {
  banners: any[]
  hotRecommend: any[]
  newAlbum: any[]
}

const initialState: IRecommendState = { banners: [], hotRecommend: [], newAlbum: [] }

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
