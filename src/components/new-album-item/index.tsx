import React, { FC, memo, ReactNode } from "react"
import { AlbumItemWrapper } from "./style"
import { getImageSize } from "@/utils/format"

interface IProps {
  children?: ReactNode
  itemData: any
}

const NewAlbumItem: FC<IProps> = memo(props => {
  const { itemData } = props
  return (
    <AlbumItemWrapper>
      <div className='album-image'>
        <img src={getImageSize(itemData.picUrl, 100)} alt='' />
        <a href='/abc' className='cover sprite_cover' title={itemData.name}></a>
      </div>
      <div className='album-info'>
        <div className='name'>{itemData.name}</div>
        <div className='artist'>{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
})

export default NewAlbumItem
