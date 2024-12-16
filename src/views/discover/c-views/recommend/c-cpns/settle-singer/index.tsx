import React, { FC, memo, ReactNode } from "react"
import { SingerWrapper } from "./style"
import AreaHeaderV2 from "@/components/area-header-v2"
import { useAppSelector } from "@/store"
import { getImageSize } from "@/utils/format"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = memo(() => {
  const { settleSinger } = useAppSelector(state => {
    return {
      settleSinger: state.recommend.settleSinger
    }
  })
  return (
    <SingerWrapper>
      <AreaHeaderV2 title='入驻歌手' moreLink='/discover/singer' moreText='查看全部'></AreaHeaderV2>
      <div className='singer-list'>
        {settleSinger.map(item => {
          return (
            <Link to='/#/discover/artists' key={item.id} className='item'>
              <img src={getImageSize(item.picUrl, 62)} alt='' />
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='name'>{item.alias.join("") || item.name}</div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className='apply-for'>
        <Link to='/'>申请成为网易音乐人</Link>
      </div>
    </SingerWrapper>
  )
})

export default SettleSinger
