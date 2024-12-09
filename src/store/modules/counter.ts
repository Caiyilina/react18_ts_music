import { createSlice } from "@reduxjs/toolkit"

// 类型推到
const initialState = {
  count: 0,
  message: "测试"
}

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
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
