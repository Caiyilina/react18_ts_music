export interface ILyric {
  time: number
  text: string
}

// 时间正则表达式 [00:00.00]或者 [00:00.000]
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyricStr: string) {
  const lyrics: ILyric[] = []
  // 1、获取歌词字符串
  const lines: string[] = lyricStr.split("\n")
  console.log("每一行lines==>", lines)

  // 2、遍历获取歌词 line格式形如为[00:00.00] 作词 : 迟意
  for (const line of lines) {
    //2.1 匹配时间
    const result = parseExp.exec(line)

    if (!result) continue

    // 2.2 获取每一组数据的时间
    const time1 = Number(result[1]) * 60 * 1000 //分转毫秒
    const time2 = Number(result[2]) * 1000 //秒转毫秒
    const time3 = result[3].length === 2 ? Number(result[3]) * 10 : Number(result[3]) //毫秒
    const time = time1 + time2 + time3

    // 获取每一组的文本
    const text = line.replace(parseExp, "").trim()

    lyrics.push({ time, text })
  }

  return lyrics
}
