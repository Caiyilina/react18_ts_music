import React, { FC, memo, ReactNode } from "react"
import { TopRankingWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = memo(() => {
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title='榜单' moreLink='/discover/ranking'></AreaHeaderV1>
      <div className='content'>aaa</div>
    </TopRankingWrapper>
  )
})

export default TopRanking
