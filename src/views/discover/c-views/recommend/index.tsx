import { useAppDispatch } from "@/store"
import React, { FC, memo, ReactNode, useEffect } from "react"
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction,
  fetchNewAlbumDataAction,
  fetchRankingDataAction,
  fetchRecommendDataAction
} from "./store/recommend"
import TopBanner from "./c-cpns/top-banner"
import { RecommendWrapper } from "./style"
import HotRecommend from "./c-cpns/hot-recommend"
import NewAlbum from "./c-cpns/new-album"
import TopRanking from "./c-cpns/top-ranking"
import UserLogin from "./c-cpns/user-login"
import SettleSinger from "./c-cpns/settle-singer"
import HotAnchor from "./c-cpns/hot-anchor"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(fetchBannersDataAction())
    // dispatch(fetchHotRecommendDataAction())
    // dispatch(fetchNewAlbumDataAction())
    dispatch(fetchRecommendDataAction())
    dispatch(fetchRankingDataAction())
  })

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className='content wrap-v2'>
        <div className='left'>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking />
        </div>
        <div className='right'>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
      Recommend
    </RecommendWrapper>
  )
})

export default Recommend
