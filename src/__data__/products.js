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
    channelDisplayName: 'Binance Perpetual',
    description: ['Trading strategy created by Benson and Tcat using LSUR, OI and Funding rate data from Binance.', 'Update every 15 minutes.'],
    media: '/static/images/products/binance_perpetual.jpg',
  },
  {
    channel: 'VEGAS',
    channelDisplayName: 'Vegas Tunnel',
    description: ['Apply 4hr Vegas Tunnel, Use EMA144 169 as medium-term trend support Also use EMA 576 676 and 4 multiples of 144 and 169 as long-term support and trend direction.'],
    media: '/static/images/products/vegas_tunnel.jpeg',
  },
  {
    channel: 'DARIUS',
    channelDisplayName: 'Darius',
    description: ['All in one.'],
    media: '/static/images/products/darius.jpeg',
  },
];

export const productMedia = {
  'ROSE': {
    channelDisplayName: 'Rose Premium',
    media: '/static/images/products/rose.png',
    channel: 'ROSE',
  },
  'WHALE': {
    channelDisplayName: 'Whale Hunting',
    media: '/static/images/products/whale-hunt.png',
    channel: 'WHALE',
  },
  'DAILYSCALP': {
    channelDisplayName: 'Daily Scalping',
    media: '/static/images/products/daily-scalp.png',
    channel: 'DAILYSCALP',
  },
  'PERPETUAL': {
    channelDisplayName: 'Binance Perpetual',
    media: '/static/images/products/binance_perpetual.jpg',
    channel: 'PERPETUAL',
  },
  'VEGAS': {
    channelDisplayName: 'Vegas Tunnel',
    media: '/static/images/products/vegas_tunnel.jpeg',
    channel: 'VEGAS',
  },
  'DARIUS': {
    channelDisplayName: 'Darius',
    media: '/static/images/products/darius.jpeg',
    channel: 'DARIUS',
  }
}
