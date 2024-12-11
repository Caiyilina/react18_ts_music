import { useAppDispatch } from "@/store"
import React, { FC, memo, ReactNode, useEffect } from "react"
import { fetchBannersDataAction } from "./store/recommend"
import TopBanner from "./c-cpns/top-banner"
import { Content, RecommendWrapper } from "./style"
import HotRecommend from "./c-cpns/hot-recommend"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
  })

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className='content wrap-v2'>
        <div className='left'>
          <HotRecommend></HotRecommend>
        </div>
        <div className='right'>right</div>
      </div>
      Recommend
    </RecommendWrapper>
  )
})

export default Recommend
