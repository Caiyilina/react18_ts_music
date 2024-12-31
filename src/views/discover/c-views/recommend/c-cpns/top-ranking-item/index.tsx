import React, { FC, memo, ReactNode } from "react"
import { RankingItemWrapper } from "./style"
import { Link } from "react-router-dom"
import { useAppDispatch } from "@/store"
import { changePlaySongListAction, fetchCurrentSongAction } from "@/views/player/store/player"

interface IProps {
  children?: ReactNode
  itemData: any
}

const TopRankingItem: FC<IProps> = memo(props => {
  const { itemData } = props
  const { tracks = [] } = itemData
  const dispatch = useAppDispatch()
  const handlePlayItem = (item: any) => {
    // dispatch(fetchCurrentSongAction(id))
    console.log("歌单播放", item.name)
    const list = tracks
    // 1、保存歌曲列表
    dispatch(changePlaySongListAction(list))
    // 2、切换歌曲
    dispatch(fetchCurrentSongAction(list[0].id))
  }
  const handlePlayClick = (id: number) => {
    console.log("单曲播放", id)
    dispatch(fetchCurrentSongAction(id))
  }
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
            <button
              className='btn play sprite_02'
              onClick={() => handlePlayItem(itemData)}
            ></button>
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
                  <button
                    className='btn play sprite_02'
                    onClick={() => handlePlayClick(item.id)}
                  ></button>
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
