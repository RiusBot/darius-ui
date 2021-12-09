import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: ['ROSE 100btc CHALLENGE', 'Starting: 0.1 BTC', 'Target: 100BTC', 'Duration: 1 year', 'Plan: ~2-4% per day'],
    media: '/static/images/products/rose.png',
    channel: 'Rose Premium',
  },{
    id: uuid(),
    createdAt: '31/03/2019',
    description: ['Analyzes real time whale activities on DeFi protocols and Ethereum wallets.',
                  'Integration with Prysm, Debank, defi sniper, etherscan and Nansen.ai',
                  'Discover new opportunities and Follow the Smart Money.'],
    media: '/static/images/products/whale-hunt.png',
    channel: 'Whale Hunt',
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: ['Altcenter Signals for Crypto & Forex Trading',
                  'Scalping makes profits within a short period of time with automated bot trading & reliable safety machinism & high accuracy signals.'],
    media: '/static/images/products/daily-scalp.png',
    channel: 'Daily Scalping',
  },
];
