require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth meadow coin gesture nation equal gather'; 
let testAccounts = [
"0xfc34865e6fd50a53a0dcd1d6b93234843fe126f49c5992379a597f8a0da3ea1e",
"0x27b9463e66299a2d3c69c8592aadfe226a8469866af00a01419edbfb0ba58bdf",
"0xb91987a3be6981d4bdf7c5beb7573aec02dba120438eb37f48af679b69cc0d2d",
"0xcbf2acd520e2bdbf9110618199305c02c90b020e5960e1289c13737e885de9e9",
"0xe096affdd31e7ccee2b6ee5b4086203b69609c673b463769a94cba253d85e7ab",
"0xef886605ee8985d99920b4a38e565f040fdf6abe3ac5b3b148cd57d13eeaaad4",
"0x7a855a19edda13f49efb6864e515c1989ce9442864c97b74ea9fa0e48825f9ec",
"0xe3b40133dcfd8313b0462ae5f1ef7d52f350f377462d9b3555f3857e2f036f00",
"0x6cb1c64e1fb81884a9c43abce76202916ab5fd67e06119581e9781e461121ccf",
"0x457f23d60689d040116db52795708477f934d2ca8688c59338dd5721fe70c335"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

