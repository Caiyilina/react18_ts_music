import React, { FC, memo, ReactNode } from "react"
import { HotRecommendWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = memo(() => {
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title='热门推荐'
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
        moreLink={"/discover/songs"}
      ></AreaHeaderV1>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
