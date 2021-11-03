export const dateConvert = date => {
  const convertToLocaleString = locale =>
    new Date(date).toLocaleDateString(locale)
  return { convertToLocaleString }
}

export default dateConvert
