// Ed's Bangers - Product and Content Data

export const siteConfig = {
  name: "Ed's Bangers",
  tagline: "Award-winning artisan sausages & sauces",
  description: "Great Taste Producer. Handcrafted sausages and sauces from Hampshire. UK Sausage Week finalists.",
  email: "edsbangers@gmail.com",
  phone: "07956 139772",
  location: "Hampshire, UK",
  social: {
    instagram: "https://instagram.com/edsbangers",
    facebook: "https://facebook.com/edsbangers1",
    tiktok: "https://tiktok.com/@edsbangers",
  }
};

export const awards = [
  { year: '2019', award: 'Runner Up', product: 'JD Banger', event: 'UK Sausage Week', icon: '🏆' },
  { year: '2019', award: 'Highly Commended', product: 'Shroom Banger', event: 'UK Sausage Week', icon: '🍄' },
  { year: '2019', award: 'Silver', product: 'Shroom Banger Sausage', event: 'Hampshire Sausage & Pie Competition', icon: '🥈' },
  { year: '2019', award: 'Bronze', product: 'Banger Sausage', event: 'Hampshire Sausage & Pie Competition', icon: '🥉' },
  { year: '2021', award: 'Highly Commended — Best Red Meat Product', product: 'Tashio Banger', event: 'Food Management Today Industry Awards', icon: '🌸' },
  { year: '2021', award: '1 Star', product: 'JD Sauce', event: 'Great Taste Awards', icon: '⭐' },
  { year: '2022', award: 'National Finalist — Cooking Sauces', product: 'JD Sauce', event: 'Great British Food Awards', icon: '🏅', note: 'Judged by Michelin-starred Chef Shaun Rankin' },
  { year: '2022', award: '1 Star', product: 'Great Taste Award', event: 'Great Taste Awards', icon: '⭐' },
  { year: '2022', award: 'Gold', product: 'BaNaga Banger', event: 'Hampshire Sausage & Pie Competition', icon: '🥇' },
  { year: '2022', award: 'Silver', product: 'Plain Banger', event: 'Hampshire Sausage & Pie Competition', icon: '🥈' },
  { year: '2022', award: 'Bronze', product: 'Chickabrie Banger', event: 'Hampshire Sausage & Pie Competition', icon: '🥉' },
  { year: '2023', award: 'Bronze', product: 'Mighty Tashio Banger', event: 'Great British Food Awards', icon: '🥉' },
  { year: '2023', award: '1 Star', product: "Ed's Hot Paste", event: 'Great Taste Awards', icon: '🌶️' },
  { year: '2023', award: '1 Star', product: 'Proper Gravy', event: 'Great Taste Awards', icon: '🥄' },
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
    name: 'Mighty Tashio Banger',
    description: 'British Pork with Pistachio, British black truffle and Provolone cheese.',
    longDescription: 'East meets West in this award-winning creation. Pistachio, black truffle and Provolone cheese elevate this gourmet banger to something truly special. Bronze at the Great British Food Awards 2023.',
    award: 'Bronze - Great British Food Awards 2023',
    price: null,
    available: true,
  },
  {
    id: 'banaga-banger',
    name: 'BaNaga Banger',
    description: 'Hampshire Sausage & Pie Competition Gold Medal winner 2022.',
    longDescription: 'The Gold Medal winner at the Hampshire Sausage & Pie Competition 2022. A bold, distinctive flavour that took home the top prize.',
    award: 'Gold - Hampshire Sausage & Pie 2022',
    available: true,
  },
  {
    id: 'chickabrie-banger',
    name: 'Chickabrie Banger',
    description: 'Chicken and Brie — a refined combination that earned a Hampshire S&P Bronze.',
    longDescription: 'Tender chicken with creamy Brie in a premium sausage. Bronze Medal at the Hampshire Sausage & Pie Competition 2022.',
    award: 'Bronze - Hampshire Sausage & Pie 2022',
    available: true,
  },
];

export const sauces = [
  {
    id: 'chilli-paste',
    name: "Ed's Hot Paste",
    description: 'Fiery, complex heat with serious depth. Not for the faint-hearted.',
    longDescription: 'A rich, aromatic chilli paste with layers of heat and flavour. Perfect for marinades, stir-fries, or adding a kick to any dish. Winner of a Great Taste Award 2023.',
    award: '1-Star Great Taste Award 2023',
    size: '200g jar',
    available: true,
    image: '/images/chilli-paste.jpg',
    ingredients: 'Chilli peppers, garlic, vinegar, oil, salt, spices.',
    allergens: 'None. May contain traces of celery, mustard, and sulphur dioxide.',
    suitable: 'Vegetarian, Vegan, Gluten Free',
  },
  {
    id: 'proper-gravy',
    name: 'Proper Gravy',
    description: 'Rich, meaty, and utterly addictive. Sunday dinner sorted.',
    longDescription: 'Made with real meat juices and slow-cooked aromatics. This is gravy the way it should be - thick, glossy, and packed with flavour. Winner of a Great Taste Award 2023.',
    award: '1-Star Great Taste Award 2023',
    size: '300g jar',
    available: true,
    image: '/images/gravy.jpg',
    ingredients: 'Meat juices (beef, pork), onion, herbs, thyme, stock, cornflour, salt, pepper.',
    allergens: 'Contains: Celery. May contain traces of mustard and sulphur dioxide.',
    suitable: 'Gluten Free (when used with GF stock)',
  },
  {
    id: 'smoked-bbq-sauce',
    name: 'Smoked BBQ Sauce',
    description: 'Low and slow smokiness in every drop. American soul, British heart.',
    longDescription: 'Hickory-smoked with a perfect balance of sweet, tangy, and smoky. Ideal for ribs, pulled pork, or slathering on anything from the grill. Winner of a Great Taste Award 2023.',
    award: '1-Star Great Taste Award 2023',
    size: '250ml bottle',
    available: true,
    image: '/images/bbq-sauce.jpg',
    ingredients: 'Tomatoes, apple cider vinegar, brown sugar, smoked paprika, garlic, onion, Worcestershire sauce, black pepper, salt.',
    allergens: 'Contains: Celery, Mustard, Sulphur dioxide. May contain traces of fish.',
    suitable: 'Vegetarian',
  },
];

export const sauceBundle = {
  id: 'great-taste-bundle',
  name: 'Great Taste Bundle',
  description: 'All three award-winning sauces. The perfect gift for any food lover.',
  includes: ["Ed's Hot Paste 200g", 'Proper Gravy 300g', 'Smoked BBQ Sauce 250ml'],
};

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
  recurring?: string;
}

export const events: Event[] = [
  // Add your upcoming events here — update dates, times, locations as needed
  // Past events
  {
    id: 'victorious-festival-2024',
    title: 'Victorious Festival 2024',
    date: '2024-08-23',
    endDate: '2024-08-25',
    time: '12:00 - 22:00',
    location: 'Southsea Common, Portsmouth',
    address: 'Southsea Common, Portsmouth, PO4 0RG',
    description: 'Ed\'s Bangers at Victorious Festival, nominated for People\'s Choice Award for favourite local food trader.',
    type: 'festival',
    featured: true,
  },
  {
    id: 'hampshire-food-festival-2024',
    title: 'Hampshire Food Festival',
    date: '2024-07-15',
    endDate: '2024-07-16',
    time: '10:00 - 18:00',
    location: 'Hampshire Showground',
    address: 'Hampshire Showground, Winchester, SO21 1AJ',
    description: 'Join us for a weekend of sizzling bangers and award-winning sauces at Hampshire\'s biggest food festival.',
    type: 'festival',
    featured: false,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Mark Stevens',
    text: 'Ok best sausages ever? No competition it has to be Eds Bangers.',
    source: 'Facebook',
    rating: 5,
  },
  {
    id: '2',
    name: 'Will Ayliffe',
    text: 'Great guy, amazing food! Burger was tasty and the hotdog was even better!',
    source: 'Facebook',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma O\'Neill',
    text: 'Really tasty bangers and loved the JD sauce! Will definitely be back.',
    source: 'Facebook',
    rating: 5,
  },
  {
    id: '4',
    name: 'Hitched Review',
    text: 'Absolutely loved having Ed\'s Bangers at our wedding. The food was incredible and the service was professional throughout. All our guests were raving about it!',
    source: 'Hitched.co.uk',
    rating: 5,
  },
  {
    id: '5',
    name: 'Victorious Festival Review',
    text: 'For premium ticket holders, Ed\'s Bangers spoiled punters with luxury locally made sausages, gravy wrapped inside a Yorkshire pudding.',
    source: 'Strong Island Magazine',
    rating: 5,
  },
];

export const pressFeatures = [
  {
    id: 'victorious',
    title: 'Victorious Festival',
    description: 'Nominated for People\'s Choice Award, Neighbourhood Eats',
    year: '2024',
    icon: '🎪',
  },
  {
    id: 'portsmouth-news',
    title: 'The Portsmouth News',
    description: 'Feature: "Meet the sausage-making soldier"',
    year: '2019',
    icon: '📰',
  },
  {
    id: 'hitched',
    title: 'Hitched.co.uk',
    description: '5.0 stars — 100% of couples recommend',
    year: 'Ongoing',
    icon: '💒',
  },
  {
    id: 'great-taste',
    title: 'Guild of Fine Food',
    description: 'Official Great Taste Producer Directory',
    year: '2023',
    icon: '⭐',
  },
];

export const aboutEd = {
  headline: "From the Army to the Sausage Shed",
  story: [
    "Ed's Bangers started the way all the best food businesses do — with a bloke who couldn't stop thinking about sausages.",
    "Jason Misters (yes, Ed is a character, but the passion is all Jason's) served in the British Army before trading his uniform for an apron. The name 'Ed's Bangers' came from that military background — 'Ed' being the phonetic alphabet for the letter E, as in Excellent.",
    "Starting with a market stall in Portsmouth, Jason quickly turned heads with his unconventional flavour combinations: Jack Daniel's-infused pork, Japanese umami-spiced bangers, pistachio and truffle creations that would look at home in a Michelin-starred kitchen.",
    "The awards followed naturally. UK Sausage Week finalist. Hampshire Sausage & Pie Competition medals. And then, three consecutive Great Taste stars — earning the prestigious Great Taste Producer status, awarded only to producers who achieve at least 3 stars within 5 years.",
    "The brand now holds a registered trademark, a 5-star Food Hygiene Rating from Portsmouth City Council, and a growing range of award-winning sauces that can be shipped across the UK.",
    "Ed's Bangers is also a regular at Victorious Festival and events across Hampshire — if you see the red and gold trailer, you know the queue will be worth it."
  ],
  credentials: [
    "Great Taste Producer — Guild of Fine Food",
    "5-Star Food Hygiene Rating — Portsmouth City Council (Sept 2024)",
    "Registered Trademark — Ed's Bangers®",
    "UK Sausage Week Finalist",
    "Multiple Hampshire Sausage & Pie Competition medals",
    "Victorious Festival Neighbourhood Eats — People's Choice Nominee 2024",
  ]
};

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
      <p>We're thrilled to announce that Ed's Bangers has officially been awarded <strong>Great Taste Producer</strong> status by the Guild of Fine Food!</p>

      <p>This prestigious recognition is given to producers who have won a Great Taste star every year for five consecutive years. It's a testament to our commitment to quality and consistency.</p>

      <p>From our first star in 2021 to our triple win in 2023 with our Chilli Paste, Proper Gravy, and Smoked BBQ Sauce, every product we make is crafted with the same dedication to flavour and quality.</p>

      <h2>What is Great Taste Producer Status?</h2>

      <p>The Great Taste awards are judged by over 500 food experts — chefs, buyers, producers, writers, and retailers. Getting a star means your product passed a rigorous blind tasting. Getting three or more over five consecutive years? That earns you the Great Taste Producer badge — a mark worn by only a tiny percentage of food producers in the UK.</p>

      <p>Thank you to everyone who has supported us on this journey — from festival-goers who queue up for our bangers to the shops and delis who stock our sauces. This one's for you!</p>
    `,
    date: '2023-09-15',
    author: 'Jason',
    tags: ['awards', 'great taste', 'news'],
  },
  {
    id: '2',
    slug: 'victorious-festival-2024',
    title: 'Victorious Festival 2024 — What a Weekend!',
    excerpt: 'We were nominated for the People\'s Choice Award at Victorious 2024. Here\'s how it went down.',
    content: `
      <p>Victorious Festival 2024 was something special. Three days at Southsea Common, thousands of food-loving festival-goers, and Ed's Bangers right in the thick of it in the Neighbourhood Eats area.</p>

      <p>We were humbled — and genuinely surprised — to be nominated for the <strong>People's Choice Award</strong> for favourite local food trader. We didn't take the trophy home, but the nomination means the world. It tells us that the people who queue up (and the queue did get long, we won't lie) genuinely love what we do.</p>

      <h2>What We Served</h2>

      <p>This year we kept it tight and focused on what we do best: proper bangers in proper rolls, with our award-winning sauces on the side. The Smoked BBQ paired with our classic pork banger was the runaway hit of the weekend.</p>

      <p>We also had the Proper Gravy doing its thing in Yorkshire pudding wraps — a format that went down incredibly well and will definitely be making an appearance at future events.</p>

      <h2>Victorious 2025?</h2>

      <p>Watch this space. We'll be putting our application in for next year. If you want to help us get nominated for that People's Choice Award again, follow us on Instagram and Facebook and spread the word!</p>
    `,
    date: '2024-08-28',
    author: 'Jason',
    tags: ['events', 'victorious', 'festivals'],
  },
  {
    id: '3',
    slug: 'shed-sauce-production',
    title: 'The Bangers and Sauces Are Coming Back!',
    excerpt: 'Some of you have been asking — where have the bangers gone? After an 18-month gap to rebuild our production setup, we\'re planning a return. Sauces first, then small-batch bangers for our loyal fans. Expected late summer 2026.',
    content: `
      <p>This one's been a long time coming, and we're genuinely excited to finally share it: Ed's Bangers is in the planning stages of getting back into production after an 18-month break.</p>

      <p>Life throws curveballs — in our case, it meant relocating our entire production setup. Moving premises, working through the planning process, FSA registrations, fitting everything out to the right standards — none of it is quick, and none of it is cheap. But we've done it right, and we're incredibly proud of what's being built.</p>

      <h2>Where Have the Bangers Gone?</h2>

      <p>We know — some of you have been asking. Where are the bangers? Where are the sauces? The honest answer: we moved production, and doing it properly takes time. We refused to cut corners on food safety, quality, or process — so rather than rush it, we paused. The 18-month gap has been frustrating for us too, but the setup we're building is worth the wait.</p>

      <p>The loyalty and messages from our regulars genuinely means the world to us. You haven't been forgotten — and neither have your bangers.</p>

      <h2>The Plan — Sauces First</h2>

      <p>We're starting small and doing it right. First up will be our three Great Taste Award-winning sauces:</p>

      <ul>
        <li><strong>Ed's Hot Paste</strong> — fiery, complex, and deeply aromatic. The one that divides the room (in the best way).</li>
        <li><strong>Proper Gravy</strong> — thick, glossy, made with real meat juices. Sunday dinner has never been easier.</li>
        <li><strong>Smoked BBQ Sauce</strong> — low-and-slow smokiness, sweet and tangy. American soul with a British heart.</li>
      </ul>

      <p>All three carry Great Taste stars, and all three will be made in small batches to maintain the quality you know and love. No shortcuts — ever.</p>

      <h2>Then the Bangers</h2>

      <p>Once the sauce side is up and running, the bangers are next. We'll be bringing them back in small batches initially — for our original loyal fans first. The people who queued at the market stall, who turned up at Victorious, who've been sliding into our DMs asking when they're coming back. You'll be first.</p>

      <p>We'll scale up when it's right to do so — not before. Quality over quantity, always.</p>

      <h2>When?</h2>

      <p>We're targeting <strong>late summer 2026</strong> to have the shed up and running and our first sauces ready to go. Follow us on Instagram and Facebook for updates as things progress — you'll be first to know when we're ready to take orders.</p>

      <p>Questions about wholesale or stockist enquiries? Get in touch early — edsbangers@gmail.com. We'd love to hear from you.</p>
    `,
    date: '2026-03-01',
    author: 'Jason',
    tags: ['news', 'sauces', 'production'],
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
