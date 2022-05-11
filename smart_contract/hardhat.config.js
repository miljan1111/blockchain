

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/FLRR2ITZJi2M3fwJACGVBSXZbKh75KIT',
      accounts: [ '3036f419768fcb6edd6cbba8b15fad805282f8ad6b33735e2d1c48250a84fc47' ]
    }
  }
}
