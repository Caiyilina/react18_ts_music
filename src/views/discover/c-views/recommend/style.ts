import styled from "styled-components"

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${require("@/assets/img/wrap-bg.png")});
    display: flex;
    > .left {
      width: 729px;
      padding: 20px;
      box-sizing: border-box;
      /* display: flex; */
    }
    > .right {
      width: 250px;
      margin-left: 1px;
      /* border: 1px solid #d3d3d3;
      border-width: 0 1px; */
    }
  }
`

export const RecommendSection = styled.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  background-image: url(${require("@/assets/img/wrap-bg.png")});
  display: flex;
`

export const Content = styled.div`
  background-color: #fff;
  display: flex;
`

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`
