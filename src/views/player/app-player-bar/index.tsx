import React, { FC, memo, ReactNode, useEffect, useRef, useState } from "react"
import { ButtonControl, Operator, PlayerBarWrapper, PlayInfo } from "./style"
import { Link } from "react-router-dom"
import { message, Slider } from "antd"
import { useAppDispatch, useAppSelector } from "@/store"
import { formatTimeStr, getImageSize } from "@/utils/format"
import { shallowEqual } from "react-redux"
import { getSongPlayUrl } from "@/utils/handle-player"
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from "../store/player"

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = memo(() => {
  const {
    currentSong = {},
    lyrics = [],
    lyricIndex = -1,
    playMode
  } = useAppSelector(
    state => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  )
  const dispatch = useAppDispatch()
  const audioRef = useRef<HTMLAudioElement>(null)
  // 播放进度
  const [progress, setProgress] = useState(0)
  // 记录播放状态
  const [isPlaying, setIsPlaying] = useState(false)
  // 总时间
  const [duration, setDuration] = useState(0)
  // 当前播放时间
  const [currentTime, setCurrentTime] = useState(0)
  // 当前是否改变进度条
  const [isSlider, setIsSlider] = useState(false)

  useEffect(() => {
    if (!audioRef.current) return
    if (!currentSong.id) return
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(err => {
        setIsPlaying(false)
        console.log("播放失败", err)
      })
    // 2、获取音乐总时长
    setDuration(currentSong.dt)
  }, [currentSong, audioRef])
  // 监听音乐播放进度
  const handleTimeUpdate = () => {
    if (isSlider) return
    // 1、获取当前播放的时间
    const currentTime = audioRef.current!.currentTime * 1000 // 秒转毫秒
    // 2、计算当前歌曲进度
    const progress = (currentTime / duration) * 100
    setCurrentTime(currentTime)
    setProgress(progress)
    // 3、根据当前时间匹配对应的歌词
    //  currentTime、lyrics
    let index = lyrics.length - 1 // 默认最后一项
    for (let i = 0; i < lyrics.length; i++) {
      const item = lyrics[i]
      if (item.time > currentTime) {
        index = i - 1
        break // 退出循环
      }
    }
    if (index === lyricIndex) return
    // 4、匹配到歌词，保存索引到state中
    dispatch(changeLyricIndexAction(index))

    // 5、展示对应的歌词
    message.config({
      top: "99%"
    })
    message.open({
      key: "lyric",
      content: lyrics[index]?.text,
      duration: 0 // 不自动关闭
    })
  }
  // 监听音乐播放结束
  const handleAudioEnded = () => {
    if (playMode === 2) {
      // 单曲循环
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      // 播放下一首
      handleChangeMusic(true)
    }
  }
  const handlePlayBtnClick = () => {
    if (!audioRef.current) return
    if (audioRef.current.paused) {
      audioRef.current?.play().catch(() => {
        setIsPlaying(false)
      })
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  // 进度条改变
  const handleSliderChange = (value: number) => {
    setIsSlider(true)

    // 1、获取当前播放的时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    // 2、设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000
    setProgress(value)
  }
  // 播放模式改变
  const handleLoopClick = () => {
    const newPlayMode = (playMode + 1) % 3 //0变成1，1变成2，2变成0
    console.log("播放模式改变==>", newPlayMode)

    dispatch(changePlayModeAction(newPlayMode))
  }
  // 切换歌曲
  const handleChangeMusic = (isNext = true) => {
    dispatch(changeMusicAction(isNext))
  }
  return (
    <PlayerBarWrapper className='sprite_playbar'>
      <div className='content wrap-v2'>
        <ButtonControl isPlaying={isPlaying}>
          <button
            className='btn prev sprite_playbar'
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button className='btn play sprite_playbar' onClick={handlePlayBtnClick}></button>
          <button className='btn next sprite_playbar' onClick={() => handleChangeMusic()}></button>
        </ButtonControl>
        <PlayInfo>
          <Link to='/player'>
            <img src={getImageSize(currentSong?.al?.picUrl, 34)} alt='' className='image' />
          </Link>
          <div className='info'>
            <div className='song'>
              <span className='song-name'>{currentSong?.name || "-"}</span>
              <span className='singer-name'>{currentSong?.ar?.[0]?.name || "-"}</span>
            </div>
            <div className='progress'>
              <Slider
                tooltip={{ formatter: null }}
                step={0.5}
                value={progress}
                onChange={handleSliderChange}
                onChangeComplete={() => {
                  setIsSlider(false)
                }}
              ></Slider>
              <div className='time'>
                <span className='current'>{formatTimeStr(currentTime)}</span>
                <span className='divider'>|</span>
                <span className='duration'>{formatTimeStr(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator playMode={playMode}>
          <div className='left'>
            <button className='sprite_playbar btn favor'></button>
            <button className='sprite_playbar btn share'></button>
          </div>
          <div className='right sprite_playbar'>
            <button className='sprite_playbar btn volume'></button>
            <button className='sprite_playbar btn loop' onClick={handleLoopClick}></button>
            <button className='sprite_playbar btn playlist'></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnded} />
    </PlayerBarWrapper>
  )
})

export default PlayerBar
