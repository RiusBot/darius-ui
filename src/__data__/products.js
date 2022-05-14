import { v4 as uuid } from 'uuid';

export const products = [
  {
    channel: 'ROSE',
    channelDisplayName: 'Rose Premium',
    description: ['ROSE 100btc CHALLENGE', 'Starting: 0.1 BTC', 'Target: 100BTC', 'Duration: 1 year', 'Plan: ~2-4% per day'],
    media: '/static/images/products/rose.png',
    status: 'active',
  },
  {
    channel: 'WHALE',
    channelDisplayName: 'Whale Hunting',
    description: ['Analyzes real time whale activities on DeFi protocols and Ethereum wallets.',
                  'Integration with Prysm, Debank, defi sniper, etherscan and Nansen.ai',
                  'Discover new opportunities and Follow the Smart Money.'],
    media: '/static/images/products/whale-hunt.png',
    status: 'active',
  },
  {
    channel: 'DAILYSCALP',
    channelDisplayName: 'Daily Scalping',
    description: ['Altcenter Signals for Crypto & Forex Trading',
                  'Scalping makes profits within a short period of time with automated bot trading & reliable safety machinism & high accuracy signals.'],
    media: '/static/images/products/daily-scalp.png',
    status: 'suspended',
  },
  {
    channel: 'PERPETUAL',
    channelDisplayName: 'Binance Perpetual',
    description: ['Trading strategy created by Benson and Tcat using LSUR, OI and Funding rate data from Binance.', 'Update every 15 minutes.'],
    media: '/static/images/products/binance_perpetual.jpg',
    status: 'active',
  },
  {
    channel: 'VEGAS',
    channelDisplayName: 'Vegas Tunnel',
    description: ['Apply 4hr Vegas Tunnel, Use EMA144 169 as medium-term trend support Also use EMA 576 676 and 4 multiples of 144 and 169 as long-term support and trend direction.'],
    media: '/static/images/products/vegas_tunnel.jpeg',
    status: 'active'
  },
  {
    channel: 'JUSTIN',
    channelDisplayName: "Justin's Trading Room",
    description: ['歡迎各位追蹤我的頻道。我是 Justin ，在台股用程式交易操盤 18 年，目前專注在加密貨幣市場的交易，我習慣用多個指標去做中長期的布局操作，並且使用 Pionex 平台提供的交易工具管控交易風險。'],
    media: '/static/images/products/Pionex.png',
    status: 'active',
  },
  {
    channel: 'MOON',
    channelDisplayName: "Moon Phases",
    description: ['月相玄學指標策略，新月做空，滿月做多。', '此策略只會操作 BTC ETH 兩種。'],
    media: '/static/images/products/moon.jpg',
    status: 'active',
  },
  {
    channel: 'COURAGE',
    channelDisplayName: "Courage",
    description: ['主流幣 4H 1D 進出策略'],
    media: '/static/images/products/courage.jpg',
    status: 'active',
  },
  {
    channel: 'SPACEFORCE',
    channelDisplayName: "Space Force",
    description: ['太空部隊'],
    media: '/static/images/products/shortcode.jpg',
    status: 'active',
  },
  {
    channel: 'WEBHOOK',
    channelDisplayName: "Webhook Bot",
    description: ['Start your automatic trading with webhook alerts and singals !!', 'One per account for now'],
    media: '/static/images/products/webhook.png',
    status: 'active',
  },
  // {
  //   channel: 'DARIUS',
  //   channelDisplayName: 'Darius',
  //   description: ['All in one.'],
  //   media: '/static/images/products/darius.jpeg',
  // },
];

export const productMedia = {
  'ROSE': {
    channelDisplayName: 'Rose Premium',
    media: '/static/images/products/rose.png',
    channel: 'ROSE',
    status: 'active',
  },
  'WHALE': {
    channelDisplayName: 'Whale Hunting',
    media: '/static/images/products/whale-hunt.png',
    channel: 'WHALE',
    status: 'active',
  },
  'DAILYSCALP': {
    channelDisplayName: 'Daily Scalping',
    media: '/static/images/products/daily-scalp.png',
    channel: 'DAILYSCALP',
    status: 'suspended',
  },
  'PERPETUAL': {
    channelDisplayName: 'Binance Perpetual',
    media: '/static/images/products/binance_perpetual.jpg',
    channel: 'PERPETUAL',
    status: 'active',
  },
  'VEGAS': {
    channelDisplayName: 'Vegas Tunnel',
    media: '/static/images/products/vegas_tunnel.jpeg',
    channel: 'VEGAS',
    status: 'active',
  },
  'JUSTIN': {
    channelDisplayName: "Justin's Trading Room",
    media: '/static/images/products/Pionex.png',
    channel: 'JUSTIN',
    status: 'active',
  },
  'MOON': {
    channelDisplayName: "Moon Phases",
    media: '/static/images/products/moon.jpg',
    channel: 'MOON',
  },
  'COURAGE': {
    channelDisplayName: "Courage",
    media: '/static/images/products/courage.jpg',
    channel: 'COURAGE',
  },
  'SPACEFORCE': {
    channelDisplayName: "Space force",
    media: '/static/images/products/shortcode.jpg',
    channel: 'SPACEFORCE',
  },
  'WEBHOOK': {
    channelDisplayName: "Webhook Bot",
    media: '/static/images/products/webhook.png',
    channel: 'WEBHOOK',
    status: 'active',
  },
}
