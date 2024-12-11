import React, { ElementRef, FC, memo, ReactNode, useCallback, useRef, useState } from "react"
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from "./style"
import { useAppSelector } from "@/store"
import { shallowEqual } from "react-redux"
import { Button, Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import classNames from "classnames"

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  // 轮播图ref，需要指定类型，才能绑定到组件上
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    state => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const handlePrevClick = () => {
    bannerRef.current?.prev()
  }
  const handleNextClick = () => {
    bannerRef.current?.next()
  }
  const bannerChange = useCallback((from: number, to: number) => {
    setCurrentIndex(to)
  }, [])
  const bgImageUrl: any =
    banners[currentIndex] && banners[currentIndex]?.imageUrl + "?imageView&blur=40x20"

  console.log("bgImageUrl=--", bgImageUrl)

  return (
    <BannerWrapper style={{ background: `url('${bgImageUrl}') center center / 6000px` }}>
      <div className='banner wrap-v2'>
        <BannerLeft>
          <Carousel
            dots={false}
            autoplay
            autoplaySpeed={2000}
            speed={1000}
            ref={bannerRef}
            effect='fade'
            beforeChange={bannerChange}
          >
            {banners.map((item, index) => {
              return (
                <div className='banner-item' key={item.imageUrl}>
                  <a href={item.url} target='blank' title={item.typeTitle}>
                    <img className='image' src={item.imageUrl} alt={item.typeTitle} />
                  </a>
                </div>
              )
            })}
          </Carousel>
          {/* 自定义指示器 */}
          <ul className='dots'>
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => bannerRef.current?.goTo(index)}>
                  <span className={classNames("item", { active: currentIndex === index })}> </span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className='btn left' onClick={handlePrevClick}></button>
          <button className='btn right' onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

export default TopBanner
