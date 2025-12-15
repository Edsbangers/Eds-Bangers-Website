// Ed's Bangers - Product and Content Data

export const siteConfig = {
  name: "Ed's Bangers",
  tagline: "Award-winning artisan sausages & sauces",
  description: "Great Taste Producer. Handcrafted sausages and sauces from Hampshire. UK Sausage Week finalists.",
  email: "edsbangers@gmail.com",
  phone: "", // Add when ready
  location: "Hampshire, UK",
  social: {
    instagram: "https://instagram.com/edsbangers",
    facebook: "https://facebook.com/edsbangers",
  }
};

export const awards = [
  { year: '2019', award: 'Runner Up', product: 'JD Banger', event: 'UK Sausage Week', icon: '🏆' },
  { year: '2019', award: 'Highly Commended', product: 'Shroom Banger', event: 'UK Sausage Week', icon: '🍄' },
  { year: '2021', award: 'Highly Commended', product: 'Tashio Banger', event: 'FMT Awards', icon: '🌸' },
  { year: '2021', award: '1 Star', product: 'Great Taste Award', event: 'Great Taste Awards', icon: '⭐' },
  { year: '2022', award: '1 Star', product: 'Great Taste Award', event: 'Great Taste Awards', icon: '⭐' },
  { year: '2023', award: '1 Star', product: 'Chilli Paste', event: 'Great Taste Awards', icon: '🌶️' },
  { year: '2023', award: '1 Star', product: 'Gravy', event: 'Great Taste Awards', icon: '🥄' },
  { year: '2023', award: '1 Star', product: 'Smoked BBQ Sauce', event: 'Great Taste Awards', icon: '🔥' },
];

export const greatTasteYears = [
  { year: '2021', stars: 1 },
  { year: '2022', stars: 1 },
  { year: '2023', stars: 1 },
];

export const bangers = [
  {
    id: 'jd-banger',
    name: 'JD Banger',
    description: 'Our signature sausage with a smooth whiskey twist. The one that started it all.',
    longDescription: 'A premium pork sausage infused with the smooth, oaky notes of Jack Daniel\'s Tennessee Whiskey. Perfect for BBQs, bangers and mash, or a proper fry-up.',
    award: 'Runner Up - UK Sausage Week 2019',
    price: null, // Made to order
    available: true,
  },
  {
    id: 'shroom-banger',
    name: 'Shroom Banger',
    description: 'Rich, earthy mushroom goodness packed into every bite.',
    longDescription: 'Wild mushrooms and fresh herbs combined with premium pork for a deep, savoury flavour. A favourite with the vegetable-curious.',
    award: 'Highly Commended - UK Sausage Week 2019',
    price: null,
    available: true,
  },
  {
    id: 'tashio-banger',
    name: 'Tashio Banger',
    description: 'Japanese-inspired flavour bomb with an umami kick.',
    longDescription: 'East meets West in this unique creation. Miso, ginger, and spring onion bring Japanese umami to a classic British banger.',
    award: 'Highly Commended - FMT Awards 2021',
    price: null,
    available: true,
  },
];

export const sauces = [
  {
    id: 'chilli-paste',
    name: 'Chilli Paste',
    description: 'Fiery, complex heat with serious depth. Not for the faint-hearted.',
    longDescription: 'A rich, aromatic chilli paste with layers of heat and flavour. Perfect for marinades, stir-fries, or adding a kick to any dish.',
    award: '1-Star Great Taste Award 2023',
    price: 5.50,
    size: '200g jar',
    available: true,
    image: '/images/chilli-paste.jpg',
  },
  {
    id: 'proper-gravy',
    name: 'Proper Gravy',
    description: 'Rich, meaty, and utterly addictive. Sunday dinner sorted.',
    longDescription: 'Made with real meat juices and slow-cooked aromatics. This is gravy the way it should be - thick, glossy, and packed with flavour.',
    award: '1-Star Great Taste Award 2023',
    price: 4.50,
    size: '300g jar',
    available: true,
    image: '/images/gravy.jpg',
  },
  {
    id: 'smoked-bbq-sauce',
    name: 'Smoked BBQ Sauce',
    description: 'Low and slow smokiness in every drop. American soul, British heart.',
    longDescription: 'Hickory-smoked with a perfect balance of sweet, tangy, and smoky. Ideal for ribs, pulled pork, or slathering on anything from the grill.',
    award: '1-Star Great Taste Award 2023',
    price: 5.00,
    size: '250ml bottle',
    available: true,
    image: '/images/bbq-sauce.jpg',
  },
];

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  address: string;
  description: string;
  type: 'festival' | 'market' | 'private' | 'popup';
  featured: boolean;
}

export const events: Event[] = [
  // Add your upcoming events here
  {
    id: 'example-festival-2024',
    title: 'Hampshire Food Festival',
    date: '2024-07-15',
    endDate: '2024-07-16',
    time: '10:00 - 18:00',
    location: 'Hampshire Showground',
    address: 'Hampshire Showground, Winchester, SO21 1AJ',
    description: 'Join us for a weekend of sizzling bangers and award-winning sauces at Hampshire\'s biggest food festival.',
    type: 'festival',
    featured: true,
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'great-taste-producer-2023',
    title: 'We\'re Now a Great Taste Producer!',
    excerpt: 'After five consecutive years of winning Great Taste stars, we\'ve officially earned Great Taste Producer status.',
    content: `
      <p>We're thrilled to announce that Ed's Bangers has officially been awarded <strong>Great Taste Producer</strong> status!</p>
      
      <p>This prestigious recognition is given to producers who have won a Great Taste star every year for five consecutive years. It's a testament to our commitment to quality and consistency.</p>
      
      <p>From our first star in 2021 to our triple win in 2023 with our Chilli Paste, Proper Gravy, and Smoked BBQ Sauce, every product we make is crafted with the same dedication to flavour and quality.</p>
      
      <p>Thank you to everyone who has supported us on this journey - from festival-goers who queue up for our bangers to the shops and delis who stock our sauces. This one's for you!</p>
    `,
    date: '2023-09-15',
    author: 'Ed',
    tags: ['awards', 'great taste', 'news'],
  },
];

export const weddingPackages = [
  {
    id: 'evening-bangers',
    name: 'Evening Bangers',
    description: 'Perfect for evening receptions. Hot, freshly grilled gourmet sausages served from our street food setup.',
    includes: [
      'Selection of 3 award-winning banger varieties',
      'Fresh artisan rolls',
      'Homemade sauces and condiments',
      'Professional service team',
      'All equipment provided',
    ],
    minGuests: 50,
    priceFrom: 'From £8 per head',
  },
  {
    id: 'full-catering',
    name: 'Full Event Catering',
    description: 'Complete street food catering for your special day. Multiple courses, multiple flavours.',
    includes: [
      'Starter nibbles on arrival',
      'Main course - choice of bangers or mixed menu',
      'Selection of our Great Taste award-winning sauces',
      'Vegetarian and dietary options available',
      'Full service team',
      'Equipment, setup and cleanup included',
    ],
    minGuests: 80,
    priceFrom: 'From £15 per head',
  },
  {
    id: 'bespoke',
    name: 'Bespoke Package',
    description: 'Let\'s create something unique for your event. We\'ll work with you to design the perfect menu.',
    includes: [
      'Menu consultation and tasting',
      'Custom sausage creation (your own signature banger!)',
      'Flexible service options',
      'Tailored to your venue and vision',
    ],
    minGuests: 30,
    priceFrom: 'Price on enquiry',
  },
];
