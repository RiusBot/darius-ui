import { v4 as uuid } from 'uuid';

export const products = [
  {
    channel: 'ROSE',
    channelDisplayName: 'Rose Premium',
    description: ['ROSE 100btc CHALLENGE', 'Starting: 0.1 BTC', 'Target: 100BTC', 'Duration: 1 year', 'Plan: ~2-4% per day'],
    media: '/static/images/products/rose.png',
  },{
    channel: 'WHALE',
    channelDisplayName: 'Whale Hunting',
    description: ['Analyzes real time whale activities on DeFi protocols and Ethereum wallets.',
                  'Integration with Prysm, Debank, defi sniper, etherscan and Nansen.ai',
                  'Discover new opportunities and Follow the Smart Money.'],
    media: '/static/images/products/whale-hunt.png',
  },
  {
    channel: 'DAILYSCALP',
    channelDisplayName: 'Daily Scalping',
    description: ['Altcenter Signals for Crypto & Forex Trading',
                  'Scalping makes profits within a short period of time with automated bot trading & reliable safety machinism & high accuracy signals.'],
    media: '/static/images/products/daily-scalp.png',
  },
  {
    channel: 'PERPETUAL',
    channelDisplayName: 'Binance\nPerpetual',
    description: ['Trading strategy created by Benson and Tcat using LSUR, OI and Funding rate data from Binance.', 'Update every 15 minutes.'],
    media: '/static/images/products/binance_perpetual.jpg',
  },
];

export const productMedia = {
  'ROSE': {
    channelDisplayName: 'Rose Premium',
    media: '/static/images/products/rose.png',
  },
  'WHALE': {
    channelDisplayName: 'Whale Hunting',
    media: '/static/images/products/whale-hunt.png',
  },
  'DAILYSCALP': {
    channelDisplayName: 'Daily Scalping',
    media: '/static/images/products/daily-scalp.png',
  },
  'PERPETUAL': {
    channelDisplayName: 'Binance Perpetual',
    media: '/static/images/products/binance_perpetual.jpg',
  }
}
