export const hashtags = (text) => {
  let newText = text.split(' ')

  return newText.filter(word => word[0] === '#')
}
