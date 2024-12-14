import styled from "styled-components"

export const RankingItemWrapper = styled.div`
  flex: 1;
  width: 230px;
  &:last-child {
    width: 228px;
  }

  .header {
    position: relative;
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;
    .image {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
      a {
      }
    }
    .info {
      margin: 5px 0 0 10px;
      .name {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }
  .list {
    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }
      /* 获取前三个item中的rank */
      &:nth-child(-n + 3) .rank {
        color: #c10d0c;
      }

      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;
          overflow: hidden;
          ${props => props.theme.mixin.textNoWrap};
          color: #000;
        }

        .operate {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;
          }

          .play {
            background-position: -267px -268px;
          }

          .add {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
          }

          .favor {
            background-position: -297px -268px;
          }
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .footer {
    height: 32px;
    display: flex;
    align-items: center;
    padding-right: 20px;
    justify-content: flex-end;

    a {
      color: #000;
    }
  }
`
