require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note ridge clutch install nature slot gasp'; 
let testAccounts = [
"0xb932e012bf4e58611b3640e9dcb589dd32db4216e4196405dea3694c9b353ed0",
"0xb4e5c1176f68a2b962b5a259d9437b3b159863b27b751b050da625a004903ee1",
"0x6b100da5f229e00a9953559a27159ac561515645c9927df183d4a48d499efec3",
"0xe6908cc67447175dba5bee157932b5b5f713b53dcfcf010544e07cb2c536bf3f",
"0x3831c63411cc2c824e1e6fdec1442de27bd2f3a2a5d484e50eac9c785973e65b",
"0x968639e1c68a2be0f74cdf1d7926c122a252c9cb862adca4d2dd3368e521c4ae",
"0x0fc239d9dcf6892c1a58317f301c34b97f155f1173e6cc0f9b75dfd9ec3d8b89",
"0xddb89122539b2d4a48f03f431ab55d345608417085b199f413c01bbcabf47ad3",
"0x99fd2a7abb72bc9be5df78895d609f0803795b1abb592a74d8be367d3bcd4c0d",
"0xd220be3f2e08c3d619855ab74f880f1c430ebb8f8312aaeb344546957e8621eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

