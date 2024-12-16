import React, { FC, memo, ReactNode } from "react"
import { AreaHeaderV2Wrapper } from "./style"
import { Link } from "react-router-dom"

interface IProps {
  children?: ReactNode
  title: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<IProps> = memo(props => {
  const { title = "默认标题", moreText, moreLink } = props
  return (
    <AreaHeaderV2Wrapper>
      <h3 className='title'>{title}</h3>
      {moreText && moreLink && <Link to={moreLink}>{moreText} &gt;</Link>}
    </AreaHeaderV2Wrapper>
  )
})

export default AreaHeaderV2
