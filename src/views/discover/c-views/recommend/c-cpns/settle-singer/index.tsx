import React, { FC, memo, ReactNode } from "react"
import { SingerWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = memo(() => {
  return (
    <SingerWrapper>
      <div className='header'>header</div>
      <AreaHeaderV2 title='入驻歌手' moreLink='/discover/singer' moreText='查看全部'></AreaHeaderV2>
    </SingerWrapper>
  )
})

export default SettleSinger
