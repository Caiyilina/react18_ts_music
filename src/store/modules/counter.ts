import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    message: "测试"
  },
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
    changeMessage(state, { payload }) {
      state.message = payload
    }
  }
})
export const { increment, decrement, changeMessage } = counterSlice.actions
export default counterSlice.reducer
