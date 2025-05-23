const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress, treasuryExports } = require("../helper/treasury");

const eth = "0x65bb797c2B9830d891D87288F029ed8dACc19705";
const bsc = "0x6e690075eedBC52244Dd4822D9F7887d4f27442F";
const avax = "0x2B065946d41ADf43BBc3BaF8118ae94Ed19D7A40";
const polygon = "0x47290DE56E71DC6f46C26e50776fe86cc8b21656";
const arbitrum = "0x9CD50907aeb5D16F29Bddf7e1aBb10018Ee8717d";
const optimism = "0x392AC17A9028515a3bFA6CCe51F8b70306C6bd43";
const fantom = "0x2351BBCb7cF7Ee9D18AF2Be0d106BFc5D47A9E85";
const metis = "0x90c3DFD4Ea593336DBB9F925f73413e6EE84c90E";

module.exports = treasuryExports({
  ethereum: {
    tokens: [
      nullAddress,
      ADDRESSES.ethereum.USDC,
      "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490", // 3CRV DAI/USDC/USDT
      "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F", // SDT
      ADDRESSES.ethereum.cvxCRV,
      ADDRESSES.ethereum.SAFE,
      "0xFCc5c47bE19d06BF83eB04298b026F81069ff65b", // yCRV
      "0x616e8BfA43F920657B3497DBf40D6b1A02D4608d", // auraBAl
      "0xA13a9247ea42D743238089903570127DdA72fE44", // bb-a-USD
      ADDRESSES.ethereum.cvxFXS,
      "0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC", // crvFRAX
      "0xfA0F307783AC21C39E939ACFF795e27b650F6e68", // S*FRAX
      "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d", // S*DAI
      "0x692953e758c3669290cb1677180c64183cEe374e", // S*USDD
      "0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2", // S*LUSD
      "0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8", // S*MAI
      "0x5af15DA84A4a6EDf2d9FA6720De921E1026E37b7", // sdFRAX3CRV-f
      "0x7f50786A0b15723D741727882ee99a0BF34e3466", // sdCRV-gauge
      "0x101816545F6bd2b1076434B54383a1E633390A2E", // S*SGETH
      "0x590d4f8A68583639f215f675F3a259Ed84790580", // S*sUSD
      "0x38EA452219524Bb87e18dE1C24D3bB59510BD783", // S*USDT
      "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56", // S*USDC
    ],
    ownTokens: [
      "0xAf5191B0De278C7286d6C7CC6ab6BB8A73bA2Cd6", // STG
      "0x341bb10D8f5947f3066502DC8125d9b8949FD3D6", // yvCurve-STG-USDC
      "0x9de1c3D446237ab9BaFF74127eb4F303802a2683", // STG/FRAXBP-f
      "0x95d16646311fDe101Eb9F897fE06AC881B7Db802", // STGUSDC-f-gauge
      "0xaa8D332531B5B953938AA412730e7536178b4783", // aura50STG-50bb-a-USD-vault
      "0x6cCA86CC27EB8c7C2d10B0672FE392CFC88e62ff", // STG-USDC Cake-LP
      "0xA89B9c336764c9Ae5f64Bc19688601341974bc22", // sdSTGUSDC-f-gauge
    ],
    owners: [eth],
  },
  bsc: {
    tokens: [
      nullAddress,
      ADDRESSES.bsc.USDT,
      "0x98a5737749490856b401DB5Dc27F522fC314A4e1", // S*BUSD
      "0x4e145a589e4c03cBe3d28520e4BF3089834289Df", // S*USDD
      "0x7BfD7f2498C4796f10b6C611D9db393D3052510C", // S*MAI
      "0x9aA83081AA06AF7208Dcc7A4cB72C94d057D2cda", // S*USDT
    ],
    ownTokens: [
      "0xBCEA09e9e882eC2Bb6dCE07c4e6669968846CaBD", // STG-BUSD Cake-LP
      "0xB0D502E938ed5f4df2E681fE6E419ff29631d62b", // STG
    ],
    owners: [bsc],
  },
  avax: {
    tokens: [
      nullAddress,
      "0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea", // S*FRAX
      ADDRESSES.avax.USDC,
      "0x8736f92646B2542B3e5F3c63590cA7Fe313e283B", // S*MAI
      "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c", // S*USDt
      "0xEAe5c2F6B25933deB62f754f239111413A0A25ef", // S*USDt
      "0x1205f31718499dBf1fCa446663B532Ef87481fe1", // S*USDC
    ],
    ownTokens: [
      ADDRESSES.fuse.WETH_3, // STG
      "0x330f77BdA60D8daB14d2bb4F6248251443722009", // STG-USDC JLP
    ],
    owners: [avax],
  },
  polygon: {
    tokens: [
      nullAddress,
      ADDRESSES.polygon.USDC,
      "0x1c272232Df0bb6225dA87f4dEcD9d37c32f63Eea", // S*DAI
      "0x29e38769f23701A2e4A8Ef0492e19dA4604Be62c", // S*USDT
      "0x8736f92646B2542B3e5F3c63590cA7Fe313e283B", // S*miMATIC
      "0x9E2d266D6c90F6C0D80a88159b15958f7135B8Af", // SSX
      "0x1205f31718499dBf1fCa446663B532Ef87481fe1", // S*USDC
    ],
    ownTokens: [
      ADDRESSES.fuse.WETH_3, // STG
      "0xA34Ec05DA1E4287FA351c74469189345990a3F0C", // STG-USDC SLP
    ],
    owners: [polygon],
  },
  arbitrum: {
    owners: [arbitrum],
    tokens: [
      nullAddress,
      ADDRESSES.arbitrum.USDC,
      "0xaa4BF442F024820B2C28Cd0FD72b82c63e66F56C", // S*FRAX
      "0xF39B7Be294cB36dE8c510e267B82bb588705d977", // S*MAI
      "0x915A55e36A01285A14f05dE6e81ED9cE89772f8e", // S*SGETH
      "0xB6CfcF89a7B22988bfC96632aC2A9D6daB60d641", // S*USDT
      "0x892785f33CdeE22A30AEF750F285E18c18040c3e", // S*USDC
    ],
    ownTokens: [
      "0x6694340fc020c5E6B96567843da2df01b2CE1eb6", // STG
      "0x3a4c6D2404b5eb14915041e01F63200a82f4a343", // 50STG-50USDC
    ],
  },
  optimism: {
    owners: [optimism],
    tokens: [
      nullAddress,
      ADDRESSES.optimism.OP,
      ADDRESSES.optimism.USDC,
      "0x165137624F1f692e69659f944BF69DE02874ee27", // S*DAI
      "0x368605D9C6243A80903b9e326f1Cddde088B8924", // S*FRAX
      "0x3533F5e279bDBf550272a199a223dA798D9eff78", // S*LUSD
      "0x5421FA1A48f9FF81e4580557E86C7C0D24C18036", // S*MAI
      "0xd22363e3762cA7339569F3d33EADe20127D5F98C", // S*SGETH
      "0x2F8bC9081c7FCFeC25b9f41a50d97EaA592058ae", // S*sUSD
      "0xDecC0c09c3B5f6e92EF4184125D5648a66E35298", // S*USDC
    ],
    ownTokens: [
      "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97", // STG
      "0xec376c3856a4232bB6Ed9752d29402DDCD09A9A3", // STG/USDC RAKIS-5
      "0xE7D2E422098D8b3AF11695A734d347563ae160Cb", // bb-STG-USD-gauge
    ],
    resolveUniV3: true,
  },
  fantom: {
    owners: [fantom],
    tokens: [
      nullAddress,
      ADDRESSES.fantom.USDC,
      "0x12edeA9cd262006cC3C4E77c90d2CD2DD4b1eb97", // S*USDC
    ],
    ownTokens: [
      ADDRESSES.fuse.WETH_3, // STG
      "0x0a80C53AfC6DE9dfB2017781436BfE5090F4aCB4", // STG-USDC spLP
    ],
  },
  metis: {
    owners: [metis],
    tokens: [
      ADDRESSES.metis.Metis,
    ],
    ownTokens: [],
  },
});
