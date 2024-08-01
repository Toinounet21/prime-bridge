import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from 'x-prime-bridge';

const tokens = [
  new Token(ChainId.ARBITRUM, '0x3De81CE90f5A27C5E6A5aDb04b54ABA488a6d14E', 18, 'PRIME'),
  new Token(ChainId.AVALANCHE, '0x33C8036E99082B0C395374832FECF70c42C7F298', 18, 'PRIME'),
];

const proxy = [
  {
    chainId: ChainId.AVALANCHE,
    address: '0x35643752f4ea0ba70456f0ca1e2778f783206a20',
  },
];

export const mainnet = {tokens, proxy};
