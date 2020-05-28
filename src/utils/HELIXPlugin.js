import { removeChecksum } from '@helixnetwork/checksum';

const moment = require('moment');

export default {
  install(Vue, options) {
    Vue.prototype.$localeTimestamp = timestamp => moment(timestamp * 1000).format();

    Vue.prototype.$getQRCode = (address) => {
      const json = {
        address,
        amount: '',
        message: '',
      };
      return JSON.stringify(json);
    };

    Vue.prototype.$getStyleIO = (h1, h2) => {
      if (!(h1 === null || h2 === null) && removeChecksum(h1) === removeChecksum(h2)) {
        return 'font-style:italic';
      }
    };
  },
};
