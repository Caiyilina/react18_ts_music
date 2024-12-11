import { useAppDispatch } from "@/store"
import React, { FC, memo, ReactNode, useEffect } from "react"
import { fetchBannersDataAction } from "./store/recommend"
import TopBanner from "./c-cpns/top-banner"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
  })

  return (
    <div>
      <TopBanner></TopBanner>
      Recommend
    </div>
  )
})

export default Recommend
