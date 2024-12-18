export function formatCount(count: number) {
  if (count < 10000) {
    return count
  }
  return (count / 10000).toFixed(0) + "万"
}

export function getImageSize(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}x${height}`
}

/**
 * 将毫秒转换成mm:ss格式的字符串
 * @param {number} time 毫秒
 * @returns {string} 格式化后的字符串
 */
export function formatTimeStr(time: number) {
  // 1、转换成秒
  const timeSeconds = time / 1000
  // 2、获取分钟、秒钟
  // 100ms => 01:40
  const minute = Math.floor(timeSeconds / 60)
  const second = Math.floor(timeSeconds % 60)

  // 3、格式化
  const formatMinute = String(minute).padStart(2, "0")
  const formatSecond = String(second).padStart(2, "0")

  return `${formatMinute}:${formatSecond}`
}
