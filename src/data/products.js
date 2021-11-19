import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/rose.png',
    channel: 'Rose Premium',
    totalDownloads: '594',
    interestRate: '150%'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/whale-hunt.png',
    channel: 'Whale Hunt',
    totalDownloads: '625',
    interestRate: '180%'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/daily-scalp.png',
    channel: 'Daily Scalp',
    totalDownloads: '857',
    interestRate: '120%'
  },
];
