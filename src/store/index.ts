import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./modules/counter"
import recommendReducer from "@/views/discover/c-views/recommend/store/recommend"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer
  }
})
// 1、通过typeof 获取state的类型
type GetStateFnType = typeof store.getState
// 2、通过ReturnType 获取state函数返回值的类型
export type IRootState = ReturnType<GetStateFnType>

// 3、通过TypedUseSelectorHook将state的类型作为泛型参数传入，令useAppSelector具备强类型检查能力
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

// 4、通过typeof 获取dispatch的类型
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export default store
