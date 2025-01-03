import styled from "styled-components"

export const AlbumWrapper = styled.div`
  margin-top: 20px;

  > .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }

    .album {
      width: 640px;
      height: 150px;
      overflow: hidden;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
