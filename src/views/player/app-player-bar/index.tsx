import React, { FC, memo, ReactNode, useEffect, useRef, useState } from "react"
import { ButtonControl, Operator, PlayerBarWrapper, PlayInfo } from "./style"
import { Link } from "react-router-dom"
import { Slider } from "antd"
import { useAppSelector } from "@/store"
import { getImageSize } from "@/utils/format"
import { shallowEqual } from "react-redux"
import { getSongPlayUrl } from "@/utils/handle-player"

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = memo(() => {
  const { currentSong } = useAppSelector(
    state => ({
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current!.src = getSongPlayUrl(currentSong.url)
    audioRef.current
      ?.play()
      .then(() => {
        console.log("播放成功")
      })
      .catch(() => {
        console.log("播放失败")
      })
  }, [currentSong, audioRef])
  // 音乐播放进度
  const handleTimeUpdate = (e: any) => {
    console.log("音乐播放==", e)
  }
  return (
    <PlayerBarWrapper className='sprite_playbar'>
      <div className='content wrap-v2'>
        <ButtonControl>
          <button className='btn prev sprite_playbar'></button>
          <button className='btn play sprite_playbar'></button>
          <button className='btn next sprite_playbar'></button>
        </ButtonControl>
        <PlayInfo>
          <Link to='/player'>
            <img src={getImageSize(currentSong?.al?.picUrl, 34)} alt='' className='image' />
          </Link>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong?.name || "-"}</span>
              <span className='singer-name'>{currentSong?.ar[0]?.name || "-"}</span>
            </div>
            <div className='progress'>
              <Slider value={progress}></Slider>
              <div className='time'>
                <span className='current'>00:52</span>
                <span className='divider'>|</span>
                <span className='duration'>00:52</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className='left'>
            <button className='sprite_playbar btn favor'></button>
            <button className='sprite_playbar btn share'></button>
          </div>
          <div className='right sprite_playbar'>
            <button className='sprite_playbar btn volume'></button>
            <button className='sprite_playbar btn loop'></button>
            <button className='sprite_playbar btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </PlayerBarWrapper>
  )
})

export default PlayerBar
