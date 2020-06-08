<template>
  <div class="container pt-4">
        <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12 text-left">
         <p class="blue-color">TOP 100 RICH ADDRESS LIST</p>


  <table class="table mb-5">
      <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Address</th>
            <th scope="col">Value</th>
            <th scope="col">USD</th>
         </tr>
      </thead>
      <tbody>
        <tr v-for="(address , index) in addresses">
          <td>#{{ index+1 }}</td>
          <td><router-link :to="{ name: 'Address', params: { hash: address.address }}" class="blue-color">{{ address.address }}</router-link></td>
          <td> <helix-balance-view :value='address.value '></helix-balance-view></td>
          <td><helix-balance-view :value='address.value '></helix-balance-view></td>
      </tr>
      </tbody>
    </table>


        </div>
      </div>
  </div>
</template>

<script>

import HelixBalanceView from '@/components/HelixBalanceView.vue'
export default {
  name: 'Addresslist',
    components: {
      HelixBalanceView,
    },
  data() {
    return {
  addresses: [
  {
    "address": "b1ee151c56a093c3ddd732813357cca70b9f2c36713827a6eb36f6f02095fc5e",
    "value": "409880342082200"
  },
  {
    "address": "0a451989979af4edd67e6e04db17c49b3537aa12e0d7f6f18916e6ad05cb4634",
    "value": "408548917854000"
  },
  {
    "address": "81e4bf50766b78c5ae1e123c0802660e5a9f5c7d05801e3f136f8092cd11ba79",
    "value": "194584979688630"
  },
  {
    "address": "1d24454f8730cea63288b6c828a2006dd075eb0c18fa59295c1ab832890d1856",
    "value": "110000000000000"
  },
  {
    "address": "a6801aaea5fd35e9ed090610c6287870e608c752335877db2273db8248f0f0ee",
    "value": "110000000000000"
  },
  {
    "address": "d5f23e267e5f664e508c9fbe2935e1625941e0b3a2aa92403d8c9aba6ef0af04",
    "value": "110000000000000"
  },
  {
    "address": "2d7c871447058a8add0ba2e33055f443d7447eb5965d8252cc2ab0f20fd3cffa",
    "value": "100000000000000"
  },
  {
    "address": "c0e5d3f8bfcc64f1c091fb043b22e9d32b4e012eeb07dce34f9423bbc7c3076c",
    "value": "100000000000000"
  },
  {
    "address": "ce5b2524b63629d37da3c4b735ca8cb4adf5943a6502d39ef15a97729f75ebc7",
    "value": "100000000000000"
  },
  {
    "address": "f068fabfad5526fa1a7c658d8ed092120f0e613f97b8e55b616ceb0705b0b3fd",
    "value": "100000000000000"
  },
  {
    "address": "0dc6b8b9d9e9668bfd0cc6d8f31ca2bcd3bf4847691cc81fb5fb7a6ef619dd08",
    "value": "97420310809147"
  },
  {
    "address": "2752b285b5e07af2abaac947bc38a3e974041df9d09293e8dcb060a8bb76d264",
    "value": "96236654009218"
  },
  {
    "address": "1f3f20dfa403afd91cef2800760447679c4d7ced73ac5af3d41d07004a6eff1a",
    "value": "89365210445026"
  },
  {
    "address": "078b901eb63d22283ea044ddf44662b922f54fcfa0b901305614d1d075be29fc",
    "value": "86897760196957"
  },
  {
    "address": "d7c894f8b51490515e6a1d4ac2965b8b5b7533d9d2b332224812673617be1d9f",
    "value": "78748554867719"
  },
  {
    "address": "1c36e97c195ded56c6ba958ba427ad538ed425b646873bfef44adde2c531c7c9",
    "value": "76450135672635"
  },
  {
    "address": "1c304b8148cdee9ba509afb91c65496d9567e7781f5ab10ce39144334dcf35c1",
    "value": "75100000000000"
  },
  {
    "address": "f6ff08a1e579817ff02d0e41ba88940e81ad307cb085ef34468ea1a3bab06aa6",
    "value": "73625642000000"
  },
  {
    "address": "6f0a0ea13108f480df195103eb851c0db6dca9769ccf05b29dfd7890ac735222",
    "value": "72264964380490"
  },
  {
    "address": "37271df38a98a23284e923a418efe2265b81f13a22f405b2e7171409ba78f88c",
    "value": "71641167000000"
  },
  {
    "address": "3facc178f5552b32f4ad61244656006d302efc4ab913da03ef24ccce220cc099",
    "value": "69176330544954"
  },
  {
    "address": "1ec6343f042b5899bad1c06ec8852d4f1a41c70881899c94312a0375b675692a",
    "value": "64977893748253"
  },
  {
    "address": "105bbd4f859d8c9cdc1564df2145b614895d87d53c76b7c70c9758dde3e87cdd",
    "value": "62895960363989"
  },
  {
    "address": "2069275e1fc73236e3799f687fb6e71d6112c4efa0268b7b36457cf146bb48e9",
    "value": "62554213473444"
  },
  {
    "address": "37607d7356c6e8e1643b708a658756d5ed2f304121aedcb92baf416ddaf3faf6",
    "value": "57307316944176"
  },
  {
    "address": "8f87bba52322dd03d868ff12b893a27a602f4d3a30df4601a8e9b59ddb492161",
    "value": "50000000000000"
  },
  {
    "address": "c15f15903d2c7fe094c882be8524455fe5b889ef5f2bd6f3d18d3cadc7630d38",
    "value": "47864466660473"
  },
  {
    "address": "2c070b6ebcbbdb000e3df8bad4f6ca9b0ea69d37a3f3962099a295137f23dcb7",
    "value": "46620844266902"
  },
  {
    "address": "2421142115faf4c2ebc957eea62652f454e46d706e86eaef7e56b57b8c69d79e",
    "value": "45798730152612"
  },
  {
    "address": "7e82949e61f8fe3edf4819be0be51522a5c68bb627c2e544ef7d1cc95ac2ecf4",
    "value": "42485629840123"
  },
  {
    "address": "84d0011a0ba468ebdb17dca7cf80fef535a7a41d4a20a9e08d4d1113ccfcc1ed",
    "value": "35000000007000"
  },
  {
    "address": "8b7fbf5106a5d54ae651abfd4c8f67caff3f584abbdbbcdabd33ca47896701b2",
    "value": "33849537983645"
  },
  {
    "address": "7f7c6ece7e16289cdcca329ed43fdb8afd97449d4bb17e581cc6876701fb7c38",
    "value": "30161125000000"
  },
  {
    "address": "daa16e98a12a638f217f9096beb33c2ce4a47b1cc7dce9537d2dd3b1b9fe499e",
    "value": "30054550755581"
  },
  {
    "address": "d2a89d5265c6dd2b8fb651b389db5986d5a38fecfbe0187b6d38a7cc5004fd13",
    "value": "30030042000000"
  },
  {
    "address": "9f4f2e7627b44bbc552eb49cc74e9d22594f3c8de1e451b76accdeb8805311bb",
    "value": "29999999999999"
  },
  {
    "address": "6aeb8c3e91bc79bff9ce08e73827adaa48180520c2f08d7ec3022b6d1aad63a3",
    "value": "25000000000000"
  },
  {
    "address": "08fdcd86707bf9c16589c20f05638fe52ab73b40f1f9f1977c861631066eb286",
    "value": "24900000000000"
  },
  {
    "address": "d744c2f2547ea2886f91bebe6dd5179532cb7e035003eb60680de2ea92b0c86d",
    "value": "24900000000000"
  },
  {
    "address": "0f5a01a2b413e605ab552a0179485163ccc812ae4c7ec25f683be7c83bf00403",
    "value": "24467213000000"
  },
  {
    "address": "795783c8edac5f84c594d206940624148d13749ff3624c23057b0d82406c72c5",
    "value": "24467212000000"
  },
  {
    "address": "85af5da6d553ba1153166f16a47ebcb93051f72184d0ad7229ddc942ea8a811f",
    "value": "24333131461641"
  },
  {
    "address": "d3d1a46b87b3ddbfc015f1750833a56d0bdf47f83e7498d5cb258e48d5b912f1",
    "value": "24152294000000"
  },
  {
    "address": "bf6c44ca2eeca9fa33671045310d32eebbb03f02347914b361c7c85e59dbb40f",
    "value": "23451850446803"
  },
  {
    "address": "ceab12b8224133cb48e9c2f2586e3b2814a6ff5a3053e7a7c9695bee0da7a7c1",
    "value": "22527545223797"
  },
  {
    "address": "2005e31a9be7e62e8c12242c28cc7ee82eefbb8ec93104114c4f71a29df985d0",
    "value": "22491959047685"
  },
  {
    "address": "b02dd174376df1f777ff9a464f174f0e409b51dda2f0c1ac4642fc8bd5a5eb7e",
    "value": "20310522000000"
  },
  {
    "address": "1e4ec21aa0e6872516bd52653cb6844c51cfdd22678f5711597258fd557f8f13",
    "value": "20000000000000"
  },
  {
    "address": "58a3360037eed35933d5168cd527112e52539d515275b0ca46928465f574a798",
    "value": "20000000000000"
  },
  {
    "address": "8e8998eabd352af63d5be1441637685f860d1a66e806e8d1cd7eec1a2f35246a",
    "value": "20000000000000"
  },
  {
    "address": "9443a852b92b168fda3420943cb530589a168eca0d598bf2888815ede2896fe4",
    "value": "20000000000000"
  },
  {
    "address": "94bf5f5c8758640721b622e9e62389ba22c9cd4648304dc0bd15d20aa9e9eed5",
    "value": "20000000000000"
  },
  {
    "address": "e6ab02c43507636d2527f29c0d150b63b71e13209dd2fef16738e80bcf2b44cb",
    "value": "20000000000000"
  },
  {
    "address": "d253bc75480ac6e7de8a3af48a3c823332bca4f85b84962172359f27ea6309e3",
    "value": "19900000000000"
  },
  {
    "address": "c85e6c95b87de695cd429c9082310616d804152ecb170771ef926bdd17a5e7f7",
    "value": "19697045170662"
  },
  {
    "address": "d9b0ce402e0a1c0159146ad2b27b3ca687461e332e0c28e0ac88882b9ca3426f",
    "value": "19608983798515"
  },
  {
    "address": "b85eae1c21840b414f9ad962269d859b065025c5f0bf819a7354d98eb37ad0f5",
    "value": "18000000000000"
  },
  {
    "address": "fae397bb6062e77e119c7640a3fff3fd9645bb0ae5b85009c2b78c6f3bebf43d",
    "value": "16834757612064"
  },
  {
    "address": "077da5541a49c685778fc9fcfc2e916f2ae0bfed1977d2e9dc367990995a6338",
    "value": "15156951741349"
  },
  {
    "address": "505c4210e8f61b7cd99bf5380c55e3ee6b35de1ff7a415265746af7fbea0421d",
    "value": "14606486680364"
  },
  {
    "address": "4a9687efa28edce2b93beaa34dc989511e5369e07c0d06658e70e60ece7acbdc",
    "value": "12500000000000"
  },
  {
    "address": "b8c82eea78b4cc81fd0183b83db46fcff1003852852b6b14453cfe68658663cc",
    "value": "11402174042912"
  },
  {
    "address": "15ad62d885075114fcc0cd4e5e27096445ea9721e00e58e34530c4b986ce8f54",
    "value": "10155261000000"
  },
  {
    "address": "6ab6a3beb60d92c154455d8d2cb9ce404163115959cb180c16888be53ee22f96",
    "value": "10000000000003"
  },
  {
    "address": "0c9fa8fec1adcd4105dcbba90f6dda0a4fa6e1c9b90c0c220fca91fef26bb2b5",
    "value": "10000000000000"
  },
  {
    "address": "1439e86df137e3a261917596050d051bc5c27b05943d1844a0fc7af739f31d6c",
    "value": "10000000000000"
  },
  {
    "address": "29a5c14c2afc1b825ef0ea8ef89c8c8a93d16c5d2ca123345654f1732fca0c8b",
    "value": "10000000000000"
  },
  {
    "address": "653e077b0c80138c37d81693e77e8a4956c7d248d252501416e6a5f878df0066",
    "value": "10000000000000"
  },
  {
    "address": "6820fd7d4f72f7fe75621f7db9fafa2e4ac26aa938312936474d315714f64dab",
    "value": "10000000000000"
  },
  {
    "address": "7db87c9b83c66da26ccd85e3974665b60ac213dfc32635da08bf26c9bc09e27a",
    "value": "10000000000000"
  },
  {
    "address": "a2c42596c35e4225729ff733275ca4669cad690aa52e0182561b2b2a7a3378d0",
    "value": "10000000000000"
  },
  {
    "address": "c238954289f7cf32e8f374c52d2d537a427247e46521741584cbfd1b169a4bda",
    "value": "10000000000000"
  },
  {
    "address": "34850d949e5185d3a5cf057fae753e7d35d5202a3d9a9ad74f891942844fa851",
    "value": "8791054487703"
  },
  {
    "address": "dc1cc5ce1aa0eefbf03ac7604e8753a4cea4f58f734869fae6ebcd289428968a",
    "value": "8713214000000"
  },
  {
    "address": "16569ef29408625c6aaca8eae345187a3d1c980f740885e47c882dcb607cd029",
    "value": "8539013005615"
  },
  {
    "address": "4d76bf86793acae6ded70c06e7e9b4244718a7548b729514179aadbe621a2cba",
    "value": "8155737000000"
  },
  {
    "address": "5ff984cb5dd44b12e8d396fbe64cc0e6e65c9facc3e38700043dcb5225d7da60",
    "value": "7749038000000"
  },
  {
    "address": "93cad686847623d769337bc2576c47433fccd11883681463295e9546dde9fc99",
    "value": "7749038000000"
  },
  {
    "address": "3808e3c0082c590dbd4de2d9ec1438d967455c02fd036f8fa69f5633cfd80a10",
    "value": "7713885852000"
  },
  {
    "address": "842b37c5da881e7f725df26fe3f3493d7ef22fbaa40a89a9fc7a07dcee01fb9e",
    "value": "7692308000000"
  },
  {
    "address": "7b38b29af7af033319813feb4697df2ecb6fd4ad33f09e3f993fe7d597ded854",
    "value": "7625000000000"
  },
  {
    "address": "adf15999a56352c1d850ee1a52d654ec4605efc229733da9253b2e4f658d0968",
    "value": "7499507937300"
  },
  {
    "address": "afdb185651ad8e9717c8f6a42d96c14f7e5fca2aab7db60cbeb95fe1a0f5d076",
    "value": "7208516000000"
  },
  {
    "address": "921e1c79216b9c82eb2bd6180eea03c82f9c33d1974e9e534d812ae1177e3947",
    "value": "7108682108683"
  },
  {
    "address": "109438db8118d81007637a004b51eccf7f7c05237c0fe4722c4dfce80408095f",
    "value": "6796448000000"
  },
  {
    "address": "da80f314ef4a39983cc866088249b9ef8839ff7ad29b4d021c9e2c29d3a3957f",
    "value": "6600920000000"
  },
  {
    "address": "2f212319fae86e8a19b839c8a2ff0253c1c198d1089ed2aeb51e077b27ed2a66",
    "value": "6323969031786"
  },
  {
    "address": "1806240afb55eba7fa3196e7fe3a61c25281e1b8249f456a008d18b7878cc0b9",
    "value": "6192983000000"
  },
  {
    "address": "42533a02d31918742df54cd6cf88da27a5a2c59646e9c2f32773767469eca7e0",
    "value": "6180056014090"
  },
  {
    "address": "88484db51483ce79ecce9a27e3afc47c700f0d88c1e9ceb5e6576ffe4fa450bb",
    "value": "6000000000000"
  },
  {
    "address": "6c4f416c85fda35b7075ef388b9b2eebcd189248afdf40d713ccbb8ca29131d7",
    "value": "5585393000000"
  },
  {
    "address": "8d9875fd8d8c9fd345901559b052500b73da292ee231692b23f1855659c35539",
    "value": "5437158000000"
  },
  {
    "address": "f398889636707fdacc23943a30f8ddab0690c05eb5d10371c2dd81f17432f218",
    "value": "5437158000000"
  },
  {
    "address": "d2dc2bc9d448146d03785df1ec55e1c74a7b9233839ab4be92345d73d6b7e87f",
    "value": "5302994889000"
  },
  {
    "address": "f9dc5e4eed579ac73dc53bf1929c4a7e63c11b66441b66741451ccd4641182b4",
    "value": "5100000980000"
  },
  {
    "address": "415cad60f6efbbf0d07e77f2d5465b377e69dc73bd7d019bb4971c21ae0d8641",
    "value": "5077630000000"
  },
  {
    "address": "66698122e05c8230bdac888eea319f4b1fa844d8f99e56828f1dc43b13fbe44a",
    "value": "5000000000000"
  },
  {
    "address": "8032f40f21f2a82ba9bbe22866168367113e5dc53e9e8e0b39df09f31093ff3e",
    "value": "5000000000000"
  },
  {
    "address": "803594c9b02bd313b6aa5fa072fc88e206713fa5ec24d76c96c5629f5c9f02c4",
    "value": "5000000000000"
  },
  {
    "address": "8f11de1b375f6dec8447ca9ca0c38b673ef1685dadcd822aca2bfcb7c6b5c3ea",
    "value": "5000000000000"
  }
]
}
}

  }
</script>

<style scoped lang="stylus">
.blue-color{
color:#1e7fde;
}

</style>
