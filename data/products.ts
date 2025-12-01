import { Product, Flavor } from '@/types';

export const products: Product[] = [
  {
    name: 'Bio Whey Protein',
    flavor: 'Chocolate Fudge',
    category: 'Premium Whey',
    description: '25g protein per serving with 7g Orifice and 50% BCAA. Post-workout recovery and rapid recovery for lean strength and muscles. 55% protein purity.',
    image: '/images/new/isolate.jpg',
    price: 8499,
  },
  {
    name: 'Bio Whey Protein',
    flavor: 'Kesar Malai Kaju',
    category: 'Premium Whey',
    description: 'Unleash 25g of pure muscle-building power per serving. Fortified with 16g creatine and 5g BCAA for explosive gains, lightning-fast recovery, and unmatched strength.',
    image: '/images/new/whey.jpg',
    price: 8499,
  },
  {
    name: 'Bio Protein Gainer',
    flavor: 'chocolate fudge',
    category: 'Mass Gainer',
    description: 'The ultimate mass-building weapon. 20g premium protein and 60g complex carbs with 3g creatine fuel unstoppable muscle growth and raw power.',
    image: '/images/new/gainer.jpg',
    price: 4499,
  },
  {
    name: 'Launcher Pre-Workout',
    flavor: 'Berry Blast',
    category: 'Pre-Workout',
    description: 'Ignite your workout with explosive energy that lasts. Scientifically engineered to push your limits, shatter plateaus, and dominate every rep.',
    image: '/images/new/launcher.jpg',
    price: 2900,
  },
  {
    name: 'Current Aminos',
    flavor: 'Mix Fruit',
    category: 'BCAA',
    description: '5g BCAA per serving. Supports muscle growth and recovery. Unflavored for maximum versatility.',
    image: '/images/new/current-aminos.jpg',
    price: 2700,
  },
  {
    name: 'THOR Pre Workout',
    flavor: 'High-Ripphage',
    category: 'Pre-Workout',
    description: 'Where muscle meets science. Premium pre-workout engineered for explosive energy, enhanced focus, and maximum endurance. 300 grams of pure power.',
    image: '/images/new/thor.jpg',
    price: 2900,
  },
];

export const flavors: Flavor[] = [
  { name: 'Chocolate Almond', type: 'Bio Whey' },
  { name: 'Kesar Malai Kaju', type: 'Bio Whey' },
  { name: 'Café Mocha', type: 'Gainer' },
  { name: 'Malai Kulfi', type: 'Gainer' },
];
