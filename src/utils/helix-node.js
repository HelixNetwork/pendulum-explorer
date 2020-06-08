
import { composeAPI } from '@helixnetwork/core';
import { MHLX_BTC_URL, BTC_USDT_URL } from '../config';
import axios from 'axios';

const log = require('@/utils/log');
const settings = require('@/utils/settings.js').default;

// The global object for node info and exhcnage priceetc.
const obj = {
  nodeInfo: {
    appName: null,
    appVersion: null,
    duration: null,
    jreAvailableProcessors: null,
    jreFreeMemory: null,
    jreMaxMemory: null,
    jreTotalMemory: null,
    currentRoundIndex: null,
    latestSolidRoundHash: null,
    latestSolidRoundIndex: null,
    roundStartIndex: null,
    lastSnapshottedRoundIndex: null,
    neighbors: null,
    packetsQueueSize: null,
    time: null,
    tips: null,
    transactionsToRequest: null,
  },
  exchangePrice: null,
};

// Create HELIX instance directly with provider\
const helix = new composeAPI({
  provider: settings.get().nodeUrl,
});
obj.helix = helix;
obj.exchangePrice = 0;

let refreshNodeInfoTmr = null;
let refreshExchangePriceTmr = null;

obj.unsubscribe = (event) => {
  if (event === 'node-info') {
    if (refreshNodeInfoTmr !== null) {
      clearInterval(refreshNodeInfoTmr);
      refreshNodeInfoTmr = null;
    }
  } else if (event === 'get-exchange-price') {
    if (refreshExchangePriceTmr !== null) {
      clearInterval(refreshExchangePriceTmr);
      refreshExchangePriceTmr = null;
    }
  }
};

obj.subscribe = (event) => {
  if (event === 'node-info') {
    const refreshNodeInfo = () => {
      helix.getNodeInfo((error, success) => {
        if (error) {
          log(error);
        } else {
          obj.nodeInfo = success;
        }
      });
    };

    refreshNodeInfoTmr = setInterval(refreshNodeInfo, 2000);
    refreshNodeInfo();
  } else if (event === 'get-exchange-price') {
    const refreshExchangePrice = async () => {
      const res1 = await axios.get(BTC_USDT_URL);
      const res2 = await axios.get(MHLX_BTC_URL);

      obj.exchangePrice = res1.data.current_price * res2.data.current_price;
    };

    refreshExchangePriceTmr = setInterval(refreshExchangePrice, 10000);
    refreshExchangePrice();
  }
};

export default obj;
