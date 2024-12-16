import { createSlice } from "@reduxjs/toolkit"

interface IPlayerState {
  currentSong: any
}
const initialState: IPlayerState = {
  currentSong: {
    name: "海阔天空",
    id: 347230,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 11127,
        name: "Beyond",
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: "600902000004240302",
    fee: 1,
    v: 120,
    crbt: null,
    cf: "",
    al: {
      id: 34209,
      name: "海阔天空",
      picUrl: "https://p2.music.126.net/iAwVf8ag_45csIUuh1wSZg==/109951168912558470.jpg",
      tns: [],
      pic_str: "109951168912558470",
      pic: 109951168912558460
    },
    dt: 326000,
    h: {
      br: 320001,
      fid: 0,
      size: 13042460,
      vd: -5628,
      sr: 44100
    },
    m: {
      br: 192001,
      fid: 0,
      size: 7825493,
      vd: -3050,
      sr: 44100
    },
    l: {
      br: 128001,
      fid: 0,
      size: 5217010,
      vd: -1489,
      sr: 44100
    },
    sq: {
      br: 797831,
      fid: 0,
      size: 32511640,
      vd: -5286,
      sr: 44100
    },
    hr: null,
    a: null,
    cd: "1",
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 1,
    s_id: 0,
    mark: 17179877376,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 120,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    mv: 376199,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 1416737,
    publishTime: 747504000000,
    tns: ["Boundless Oceans, Vast Skies"]
  }
}

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {}
})

export default playerSlice.reducer
