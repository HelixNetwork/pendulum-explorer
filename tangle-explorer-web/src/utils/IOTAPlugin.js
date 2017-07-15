const moment = require('moment')

module.exports = {
  install(Vue, options) {
    Vue.prototype.$relativeTimestamp = function (timestamp) {
      return moment(timestamp * 1000).fromNow()
    }

    Vue.prototype.$localeTimestamp = function (timestamp) {
      return moment(timestamp * 1000).format()
    }
  }
}
