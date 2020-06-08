import { RICH_ADDRESS_URL } from '../config';
import axios from 'axios';

const log = require('@/utils/log');

// The global object for node info and exhcnage priceetc.
const obj = {
  addressList: null,
};
obj.addressList = [];

let refreshAddressListTmr = null;

obj.unsubscribe = (event) => {
  if (event === 'address-list') {
    if (refreshAddressListTmr !== null) {
      clearInterval(refreshAddressListTmr);
      refreshAddressListTmr = null;
    }
  }
};

obj.subscribe = (event) => {
  if (event === 'address-list') {
    
    const refreshAddressList = async () => {
      const res1 = await axios.get(RICH_ADDRESS_URL);
      obj.addressList = res1.data;
    };

   refreshAddressListTmr = setInterval(refreshAddressList, 10000);
   refreshAddressList();
  }
};

export default obj;
