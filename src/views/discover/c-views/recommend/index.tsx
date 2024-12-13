import { useAppDispatch } from "@/store"
import React, { FC, memo, ReactNode, useEffect } from "react"
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction,
  fetchNewAlbumDataAction
} from "./store/recommend"
import TopBanner from "./c-cpns/top-banner"
import { Content, RecommendWrapper } from "./style"
import HotRecommend from "./c-cpns/hot-recommend"
import NewAlbum from "./c-cpns/new-album"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
    dispatch(fetchHotRecommendDataAction())
    dispatch(fetchNewAlbumDataAction())
  })

  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className='content wrap-v2'>
        <div className='left'>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </div>
        <div className='right'>right</div>
      </div>
      Recommend
    </RecommendWrapper>
  )
})

export default Recommend
