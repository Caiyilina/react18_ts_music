export function formatCount(count: number) {
  if (count < 10000) {
    return count
  }
  return (count / 10000).toFixed(0) + "万"
}

export function getImageSize(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}x${height}`
}
