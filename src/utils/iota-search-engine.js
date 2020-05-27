require('@/lib/iota');
const helixNode = require('@/utils/helix-node');
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

  helixNode.iota.api.getBalances([val], 20, (e, r) => {
    if (r !== undefined) {
      const balance = parseInt(r.balances[0]);
      helixNode.iota.api.findTransactionObjects({ addresses: [val] }, (e, r) => {
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
  helixNode.iota.api.getTransactionsObjects([val], (e, r) => {
    callbackTxs(_.filter(r, tx => tx.hash !== '999999999999999999999999999999999999999999999999999999999999999999999999999999999'));
    callbackCheck();
  });
  helixNode.iota.api.findTransactionObjects({ bundles: [val] }, (e, r) => {
    if (r !== undefined && r.length > 0) {
      callbackBundles([{
        hash: r[0].bundle,
      }]);
    }
    callbackCheck();
  });
};
