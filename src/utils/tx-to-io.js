import helixNode from '@/utils/helix-node';

const _ = require('lodash');

const txsAreConfirmed = async (txHashes) => {
  const ret = {};
  const getConfirms = async txs =>
    helixNode.helix.getInclusionStates(txs, []).then(response => _.map(response, isConfirmed => !!isConfirmed));
  const responses = await getConfirms(txHashes);
  let i = 0;
  for (const hash of txHashes) {
    ret[hash] = responses[i];
    i++;
  }
  return ret;
};

export default async (r) => {
  let res = {};
  const txCache = {};
  const txHashes = [];
  for (var i = 0; i < r.length; i++) {
    var tx = r[i];
    txHashes.push(tx.hash);
  }
  const confirmedCache = await txsAreConfirmed(txHashes);
  let showConfirmedOnly = false;
  for (const k in confirmedCache) {
    if (confirmedCache[k]) {
      // When none of the transactions are confirmed, we can show unconfirmed ones too.
      // When there is at least one confirmed transaction, we're better off just showing the confirmed transaction.
      // Because the rest might be a promote or reattach transaction
      showConfirmedOnly = true;
      break;
    }
  }
  for (var i = 0; i < r.length; i++) {
    var tx = r[i];
    if (!res[tx.bundle]) {
      res[tx.bundle] = { inputs: [], outputs: [] };
    }
    // Cache is being used for making sure no duplicated transactions from re-attached bundles show up in the i/o gui.
    const cacheKey = `${tx.bundle}${tx.value}${tx.tag}${tx.address}`;
    if (txCache[cacheKey] === undefined) {
      let shouldAdd = false;
      if (showConfirmedOnly) {
        const isConfirmed = confirmedCache[tx.hash];
        if (isConfirmed) {
          shouldAdd = true;
        }
      } else {
        shouldAdd = true;
      }
      txCache[cacheKey] = null;
      const isInput = tx.value < 0;
      const isOutput = tx.value > 0;
      if (isInput) {
        res[tx.bundle].inputs.push(tx);
      } else if (isOutput) {
        res[tx.bundle].outputs.push(tx);
      }
    }
  }
  res = Object.values(res);
  res = _.filter(res, txs => (txs.inputs.length + txs.outputs.length) > 0);
  res.sort((a, b) => b.inputs[0].timestamp - a.inputs[0].timestamp);
  return res;
};
