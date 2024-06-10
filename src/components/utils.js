/* 字体颜色根据背景颜色来显示白色或黑色 */
export function updateTextColor(hexColor){
  if(hexColor[0] !== '#' || hexColor.length !== 7 ){
    return ''
  }
  
  const bigint = parseInt(hexColor.substring(1), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  const luma = r * 0.2126 + g * 0.7152 + b * 0.0722

  const color = luma > 128 ? '#000000' : '#FFFFFF'
  return color
}
