# Ed's Bangers® Website

Award-winning artisan sausages & sauces from Hampshire.

## 🌭 Features

- **Homepage** - Hero section, awards showcase, product highlights
- **Shop** - Online ordering for sauces, enquiry system for bangers
- **Events Calendar** - Upcoming festivals and markets
- **Weddings & Events** - Booking enquiry forms with packages
- **Blog** - News, recipes, and behind-the-scenes content
- **Contact** - General enquiries with FAQ section

## 🎨 Brand Colours

- **Primary Red**: #C41E3A
- **Gold (Great Taste)**: #D4AF37
- **Sausage Brown**: #8B5A2B
- **Cream Background**: #FFF8F0
- **Charcoal Text**: #2D2A26

## 📁 Project Structure

```
eds-bangers/
├── src/
│   ├── app/                    # Pages (Next.js App Router)
│   │   ├── page.tsx            # Homepage
│   │   ├── shop/page.tsx       # Shop with cart
│   │   ├── events/page.tsx     # Events calendar
│   │   ├── weddings/page.tsx   # Wedding bookings
│   │   ├── blog/               # Blog section
│   │   ├── contact/page.tsx    # Contact form
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable components
│   │   ├── Header.tsx          # Navigation
│   │   └── Footer.tsx          # Footer
│   └── lib/
│       └── data.ts             # All content data
└── public/
    └── images/                 # Product images go here
```

## ✏️ How to Update Content

### Adding Events
Edit `src/lib/data.ts` and add to the `events` array:

```typescript
{
  id: 'unique-id',
  title: 'Event Name',
  date: '2024-07-15',
  time: '10:00 - 18:00',
  location: 'Venue Name',
  address: 'Full Address, Postcode',
  description: 'Event description',
  type: 'festival',
  featured: true,
}
```

### Adding Blog Posts
Add to the `blogPosts` array in `src/lib/data.ts`

### Updating Products
Edit the `bangers` and `sauces` arrays in `src/lib/data.ts`

---

## 🚀 Deployment to Vercel (Recommended)

Vercel is the easiest option and has a generous free tier.

### Step 1: Create GitHub Account
Go to https://github.com and sign up

### Step 2: Upload Code to GitHub
1. Create new repository called "eds-bangers"
2. Upload all project files

### Step 3: Deploy to Vercel
1. Go to https://vercel.com and sign up with GitHub
2. Click "Add New Project"
3. Import your repository
4. Click "Deploy"

### Step 4: Connect GoDaddy Domain
1. In Vercel: Project Settings → Domains → Add "edsbangers.com"
2. In GoDaddy DNS Manager, add these records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

Your site will be live within minutes!

---

## 🔧 Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

---

## 📝 Before Launch Checklist

- [ ] Add your logo image to /public/images/
- [ ] Add product photos
- [ ] Update social media links
- [ ] Add upcoming events
- [ ] Set up contact form (Formspree recommended)
- [ ] Test on mobile

---

Built with ❤️ and 🌭
