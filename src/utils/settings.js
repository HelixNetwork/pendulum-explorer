const store = require('store');
const nodeUrl = require('../config').defaultNode;

const defaultSettings = {
  nodeUrl,
};

export default {
  resetToDefault() {
    store.remove('settings');
  },
  set(settings) {
    store.set('settings', settings);
  },
  get() {
    return Object.assign({}, defaultSettings, store.get('settings'));
  },
};
