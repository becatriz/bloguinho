import dateConvert from "../utils/dateConvert"

export default {
  name: "getDateFormatted",
  methods: {
    getDateFormatted(date, locale) {
      return dateConvert(date).convertToLocaleString(locale)
    }
  }
}
