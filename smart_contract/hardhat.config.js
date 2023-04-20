// https key
// https://eth-goerli.g.alchemy.com/v2/sZlx8Z0hULRt44xmvprp8M2N7M9n86jG


require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/sZlx8Z0hULRt44xmvprp8M2N7M9n86jG',
      accounts: ['a42955f04f44c6be35012303762c983589f6576ba89ef04a5907948991821c0e'],
    },
  },
};


// Transactions address:  0x3366B5b5d050Dc1f4288c2319270AB94bD40F829