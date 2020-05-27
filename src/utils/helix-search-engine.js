const helixNode = require('@/utils/helix-node');
const _ = require('lodash');

module.exports = (val, callbackTxs, callbackAddresses, callbackBundles, fullyDone) => {
  let callbackStack = 3;
  const callbackCheck = () => {
    callbackStack -= 1;
    if (callbackStack === 0) {
      if (fullyDone !== undefined) {
        fullyDone();
      }
    }
  };

  helixNode.helix.getBalances([val], 20, (error, response) => {
    if (response !== undefined) {
      const balance = parseInt(response.balances[0], 10);
      helixNode.helix.findTransactionObjects({ addresses: [val] }, (err, resp) => {
        if (resp !== undefined && resp.length > 0) {
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

  helixNode.helix.getTransactionsObjects([val], (error, response) => {
    callbackTxs(_.filter(response, tx => tx.hash !== '0000000000000000000000000000000000000000000000000000000000000000'));
    callbackCheck();
  });
  helixNode.helix.findTransactionObjects({ bundles: [val] }, (error, response) => {
    if (response !== undefined && response.length > 0) {
      callbackBundles([{
        hash: response[0].bundle,
      }]);
    }
    callbackCheck();
  });
};
