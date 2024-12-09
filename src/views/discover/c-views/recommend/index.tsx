import request from "@/service"
import React, { FC, memo, ReactNode, useEffect, useState } from "react"

interface IProps {
  children?: ReactNode
}
interface IBannerData {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = memo(() => {
  const [banner, setBanner] = useState<IBannerData[]>([])
  // 测试网络请求
  useEffect(() => {
    request.get({ url: "/banner" }).then((res: any) => {
      console.log("网络请求", res)
      setBanner(res.banners)
    })
  }, [])
  return (
    <div>
      Recommend
      <h2>
        {banner.map(item => (
          <div key={item.encodeId}>{item.imageUrl}</div>
        ))}
      </h2>
    </div>
  )
})

export default Recommend
