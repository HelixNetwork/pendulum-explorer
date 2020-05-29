
import { composeAPI } from '@helixnetwork/core';

const log = require('@/utils/log');
const settings = require('@/utils/settings.js').default;

// The global object for node info etc.
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
};

// Create HELIX instance directly with provider\
const helix = new composeAPI({
  provider: settings.get().nodeUrl,
});
obj.helix = helix;

let refreshNodeInfoTmr = null;

obj.unsubscribe = (event) => {
  if (event === 'node-info') {
    if (refreshNodeInfoTmr !== null) {
      clearInterval(refreshNodeInfoTmr);
      refreshNodeInfoTmr = null;
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
  }
};
export default obj;
