import AreaHeaderV2 from "@/components/area-header-v2"
import React, { FC, memo, ReactNode } from "react"
import { HotAnchorWrapper } from "./style"
import { hotRadios } from "@/assets/data/local-data"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = memo(() => {
  return (
    <HotAnchorWrapper>
      <AreaHeaderV2 title='热门主播' moreLink='/discover/anchor' moreText='查看全部'></AreaHeaderV2>
      <div className='radios'>
        {hotRadios.map(item => {
          return (
            <div className='item' key={item.picUrl}>
              <Link to='/' className='image'>
                <img src={item.picUrl} alt='' />
              </Link>
              <div className='info'>
                <div className='name'>{item.name}</div>
                <div className='position text-nowrap'>{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
})

export default HotAnchor
