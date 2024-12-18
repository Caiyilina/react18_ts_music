import React, { FC, memo, ReactNode } from "react"
import { TopRankingWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import TopRankingItem from "../top-ranking-item"

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = memo(() => {
  const { rankingList = [] } = useAppSelector(
    state => ({
      rankingList: state.recommend.rankingList
    }),
    shallowEqual
  )
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title='榜单' moreLink='/discover/ranking'></AreaHeaderV1>
      <div className='content'>
        {rankingList.map(item => (
          <TopRankingItem key={item.id} itemData={item}></TopRankingItem>
        ))}
      </div>
    </TopRankingWrapper>
  )
})

export default TopRanking
