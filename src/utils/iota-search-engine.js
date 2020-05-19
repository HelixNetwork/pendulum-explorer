require('@/lib/iota');
const iotaNode = require('@/utils/iota-node');
const _ = require('lodash');

module.exports = (val, callbackTxs, callbackAddresses, callbackBundles, fullyDone) => {
  let callbackStack = 3;
  const callbackCheck = () => {
    callbackStack--;
    if (callbackStack === 0) {
      if (fullyDone !== undefined) {
        fullyDone();
      }
    }
  };

  iotaNode.iota.api.getBalances([val], 20, (e, r) => {
    if (r !== undefined) {
      const balance = parseInt(r.balances[0]);
      iotaNode.iota.api.findTransactionObjects({ addresses: [val] }, (e, r) => {
        if (r !== undefined && r.length > 0) {
          callbackAddresses([{
            address: val,
            balance,
          }]);
        }
        callbackCheck();
      });
    } else {
      callbackCheck();
    }
  });
  iotaNode.iota.api.getTransactionsObjects([val], (e, r) => {
    callbackTxs(_.filter(r, tx => tx.hash !== '999999999999999999999999999999999999999999999999999999999999999999999999999999999'));
    callbackCheck();
  });
  iotaNode.iota.api.findTransactionObjects({ bundles: [val] }, (e, r) => {
    if (r !== undefined && r.length > 0) {
      callbackBundles([{
        hash: r[0].bundle,
      }]);
    }
    callbackCheck();
  });
};
