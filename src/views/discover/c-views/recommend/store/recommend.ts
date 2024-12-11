import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getBanners } from "../service/recommend"

export const fetchBannersDataAction = createAsyncThunk("banners", async (arg, { dispatch }) => {
  const res: any = await getBanners()
  console.log("打印fetchBanners==>", res)
  dispatch(changeBannersAction(res.banners))
  // return res.banners
})

interface IRecommendState {
  banners: any[]
}

const initialState: IRecommendState = { banners: [] }

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
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

export const { changeBannersAction } = recommendSlice.actions

export default recommendSlice.reducer
