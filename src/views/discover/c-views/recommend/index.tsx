import request from "@/service"
import { useAppDispatch } from "@/store"
import React, { FC, memo, ReactNode, useEffect, useState } from "react"
import { fetchBannersDataAction } from "./store/recommend"

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = memo(() => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersDataAction())
  })

  return <div>Recommend</div>
})

export default Recommend
