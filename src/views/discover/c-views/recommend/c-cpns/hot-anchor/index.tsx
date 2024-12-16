import AreaHeaderV2 from "@/components/area-header-v2"
import React, { FC, memo, ReactNode } from "react"

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = memo(() => {
  return (
    <div>
      HotAnchor
      <AreaHeaderV2 title='热门主播' moreLink='/discover/anchor' moreText='查看全部'></AreaHeaderV2>
    </div>
  )
})

export default HotAnchor
