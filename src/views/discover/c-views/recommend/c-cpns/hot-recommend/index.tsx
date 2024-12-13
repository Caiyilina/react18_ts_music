import React, { FC, memo, ReactNode } from "react"
import { HotRecommendWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import SongMenuItem from "@/components/song-menu-item"

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = memo(() => {
  const { hotRecommend } = useAppSelector(
    state => ({
      hotRecommend: state.recommend.hotRecommend
    }),
    shallowEqual
  )

  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title='热门推荐'
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink={"/discover/songs"}
      ></AreaHeaderV1>
      <div className='recommend-list'>
        {hotRecommend.map(item => {
          return <SongMenuItem key={item.id} itemData={item}></SongMenuItem>
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
