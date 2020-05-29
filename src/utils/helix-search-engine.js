import helixNode from '@/utils/helix-node';
import { isAddress, isTxHex } from '@helixnetwork/validators';

const _ = require('lodash');

const helixSearch = (val, callbackTxs, callbackAddresses, callbackBundles, fullyDone) => {
  let callbackStack = 3;
  const callbackCheck = (decrement) => {
    callbackStack -= decrement;
    if (callbackStack === 0) {
      if (fullyDone !== undefined) {
        fullyDone();
      }
    }
  };

  // Checking whether the inserted hash is a valid address and if yes
  // show its information
  if (isAddress(val)) {
    helixNode.helix.getBalances([val], 20, (error, response) => {
      if (response !== undefined) {
        const balance = parseInt(response.balances[0], 10);
        callbackAddresses([{
          address: val,
          balance,
        }]);
      }
      callbackCheck(1);
    });
  } else {
    callbackCheck(1);
  }

  // Checking whether the given hash is a valid transaction / bundle hash or not
  // if yes, trying to findout the associated bundle / transaction

  if (isTxHex(val, 64)) {
    helixNode.helix.getTransactionObjects([val], (error, response) => {
      callbackTxs(_.filter(response, tx => tx.bundle !== '0000000000000000000000000000000000000000000000000000000000000000'));
      callbackCheck(1);
    });
    helixNode.helix.findTransactionObjects({ bundles: [val] }, (error, response) => {
      if (response !== undefined && response.length > 0) {
        callbackBundles([{
          hash: response[0].bundle,
        }]);
      }
      callbackCheck(1);
    });
  } else {
    callbackCheck(2);
  }
};

export default helixSearch;
