const axios = require('axios')


async function fetchrich(){
  console.log("hii");
    const addressList = await axios.get('https://pendulum-rich-list.s3.eu-central-1.amazonaws.com/latest.json');
    return addressList;
    console.log(addressList.data[0].value);

}
