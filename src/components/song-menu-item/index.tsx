import React, { FC, memo, ReactNode } from "react"
import { MenuItemWrapper } from "./style"
import { formatCount, getImageSize } from "@/utils/format"
import { useAppDispatch } from "@/store"
import { fetchPlayListAction } from "@/views/player/store/player"

interface IProps {
  children?: ReactNode
  itemData: any
  size?: number
}

const SongMenuItem: FC<IProps> = memo(props => {
  const { itemData, size = 140 } = props
  const dispatch = useAppDispatch()
  const handlePlayItem = async () => {
    console.log("播放歌单", { ...itemData })
    // 获取歌单列表并保存
    dispatch(fetchPlayListAction(itemData.id))
  }
  return (
    <MenuItemWrapper>
      <div className='top'>
        <img src={getImageSize(itemData.picUrl, size)} className='image' alt='' />
        <div className='cover  sprite_cover'>
          <div className='info sprite_cover'>
            <span>
              <i className='sprite_icon headset'></i>
              <span className='count'>{formatCount(itemData.playCount)} </span>
            </span>
            <i className='sprite_icon play' onClick={handlePlayItem}></i>
          </div>
        </div>
      </div>
      <div className='bottom'>{itemData.name}</div>
    </MenuItemWrapper>
  )
})

export default SongMenuItem
