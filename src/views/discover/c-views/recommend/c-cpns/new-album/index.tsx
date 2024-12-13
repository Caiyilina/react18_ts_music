import React, { ElementRef, FC, memo, ReactNode, useRef } from "react"
import { AlbumWrapper } from "./style"
import AreaHeaderV1 from "@/components/area-header-v1"
import { Carousel } from "antd"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import SongMenuItem from "@/components/song-menu-item"

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = memo(() => {
  const { newAlbum } = useAppSelector(
    state => ({
      newAlbum: state.recommend.newAlbum
    }),
    shallowEqual
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const handlePrevClick = () => {
    carouselRef.current?.prev()
  }
  const handleNextClick = () => {
    carouselRef.current?.next()
  }

  return (
    <AlbumWrapper>
      <AreaHeaderV1 title='新碟上架' moreLink={"/discover/album"}></AreaHeaderV1>

      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={handlePrevClick}></button>
        <div className='album'>
          <Carousel ref={carouselRef} dots={false} autoplay={false}>
            {[0, 1].map(item => {
              return (
                <div className='page' key={item}>
                  {newAlbum.slice(item * 5, (item + 1) * 5).map(album => {
                    return <SongMenuItem key={album.id} itemData={album}></SongMenuItem>
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={handleNextClick}></button>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum
