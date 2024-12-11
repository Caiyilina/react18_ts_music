import styled from "styled-components"

export const BannerWrapper = styled.div`
  .banner {
    height: 270px;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
      cursor: pointer;
    }
  }
  position: relative;
  .dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    display: flex;
    justify-content: center;
    li {
      cursor: pointer;
    }
    .item {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #ddd;
      margin: 0 6px;
      &.active {
        background-color: red;
      }
    }
  }
`
// 使用a标签 并设置属性，不用写a标签了
export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  /* transform: translateY(-50%); */
  transform: translateY(-32px);

  .btn {
    position: absolute;
    width: 37px;
    height: 64px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
