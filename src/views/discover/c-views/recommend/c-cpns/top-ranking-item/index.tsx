import React, { FC, memo, ReactNode } from "react"
import { RankingItemWrapper } from "./style"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = memo(props => {
  const { itemData } = props
  const { tracks = [] } = itemData
  return (
    <RankingItemWrapper>
      <div className='header'>
        <div className='image'>
          <img src={itemData.coverImgUrl + "?param=80x80"} alt='' />
          <a href='' className='sprite_cover'></a>
        </div>
        <div className='info'>
          <div className='name'>{itemData.name}</div>
          <div>
            <button className='btn play sprite_02'></button>
            <button className='btn favor sprite_02'></button>
          </div>
        </div>
      </div>
      <div className='list'>
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className='item' key={item.id}>
              <div className='rank'>{index + 1}</div>
              <div className='info'>
                <a href='/' className='name'>
                  {item.name}
                </a>
                <div className='operate'>
                  <button className='btn play sprite_02'></button>
                  <button className='btn add sprite_icon2'></button>
                  <button className='btn favor sprite_02'></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='footer'>
        <Link to={`/discover/ranking?id=${itemData.id}`}> 查看全部 &gt;</Link>
      </div>
    </RankingItemWrapper>
  )
})

export default TopRankingItem
