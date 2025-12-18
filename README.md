# Olim in TLV

A modern, production-ready website for olim (new immigrants) in Tel Aviv. Built with Next.js, TypeScript, and Tailwind CSS featuring glassmorphism design and a comprehensive dating mini-site.

## Features

- **Modern Glassmorphism UI** - Clean, premium design with glass effects and rounded pill navigation
- **Dating Platform** - Complete mini-site for connecting olim with browse, profile, and messaging features
- **Resource Sections** - Comprehensive guides for renting, university, food, and local life
- **Partnership Form** - Contact form with validation and anti-spam measures
- **Responsive Design** - Mobile-first approach with seamless tablet and desktop experiences
- **SEO Optimized** - Proper metadata, sitemap, and robots.txt
- **Design System** - Reusable components with consistent styling

## Design System

### Color Palette

- Deep Navy: `#06031C`
- Slate: `#3D4960`
- Primary Blue: `#4A84C6`
- Muted Gray-Lavender: `#877984`
- Light Blue-Gray: `#A2B9D2`
- Light Background: `#E0E3E8`
- White: `#FFFFFF`

### Components

- **Button** - Multiple variants (primary, secondary, ghost, glass)
- **GlassCard** - Glassmorphism card component
- **Input/Select/Textarea** - Form components with validation
- **Modal** - Accessible modal dialogs
- **Badge** - Tag/badge component
- **Tabs** - Tab navigation component
- **Hero** - Hero section with image overlay

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Images:** Next.js Image Optimization
- **Data:** Mock TypeScript data (ready for API integration)

## Installation

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

Create an optimized production build:

```bash
npm run build
```

## Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
/app
  /(main)              # Main site route group
    layout.tsx         # Main layout with header/footer
    page.tsx           # Homepage
    /renting           # Renting section
    /university        # University section
    /eats              # Food & restaurants section
    /local             # Local life tips section
    /partnerships      # Partnership contact form
    /about             # About page
    /privacy           # Privacy policy
    /terms             # Terms of service
    /[section]/[slug]  # Dynamic article pages
  /(dating)            # Dating mini-site route group
    layout.tsx         # Dating layout
    /dating
      page.tsx         # Dating landing page
      /browse          # Browse profiles with filters
      /profile/[id]    # Individual profile pages
      /messages        # Messaging interface
  layout.tsx           # Root layout
  globals.css          # Global styles
  sitemap.ts           # Sitemap generation

/components
  /ui                  # Design system components
    Button.tsx
    GlassCard.tsx
    Input.tsx
    Select.tsx
    Textarea.tsx
    Badge.tsx
    Modal.tsx
    Tabs.tsx
    SectionHeader.tsx
  /shared              # Shared layout components
    Header.tsx         # Site header with pill navigation
    Footer.tsx         # Site footer
    Hero.tsx           # Hero section component

/data                  # Mock data
  profiles.ts          # Dating profiles
  posts.ts             # Blog posts/resources
  messages.ts          # Messaging data

/lib                   # Utilities
  utils.ts             # Helper functions
  validation.ts        # Form validation

/public
  /images              # Static images
  robots.txt           # SEO robots file
```

## Pages Overview

### Main Site

- **/** - Homepage with feature cards and call-to-actions
- **/renting** - Housing guides, neighborhood info, and rental tips
- **/university** - Academic programs, scholarships, and student life
- **/eats** - Restaurant guides and food recommendations
- **/local** - Practical tips for Israeli life, Hebrew learning, healthcare
- **/partnerships** - Contact form for business collaborations
- **/about** - About Olim in TLV
- **/privacy** - Privacy policy
- **/terms** - Terms of service
- **/[section]/[slug]** - Dynamic article detail pages

### Dating Mini-Site

- **/dating** - Dating landing page with features, safety tips, and featured profiles
- **/dating/browse** - Browse all profiles with advanced filtering (age, location, language, interests)
- **/dating/profile/[id]** - Individual profile pages with photo gallery, bio, and actions
- **/dating/messages** - Messaging interface with conversation list and chat UI

## Mock Data

All data is stored in TypeScript files under `/data` for easy transition to a real backend:

- **8 Dating Profiles** - Complete with photos, bios, interests, languages
- **12 Resource Posts** - Covering renting, university, food, and local topics
- **3 Mock Conversations** - Sample messaging data

## Features Breakdown

### Dating Platform

- Profile browsing with live filtering
- Individual profile pages with photo galleries
- Mock messaging interface
- Like/unlike functionality
- Report profile capability
- Safety tips and guidelines

### Partnership Form

- Complete validation (client-side)
- Honeypot anti-spam field
- Rate limiting (in-memory)
- Success state handling
- Required/optional fields
- Topic dropdown selection

### Design Features

- Glassmorphism effects throughout
- Pill-style navigation (responsive)
- Smooth transitions and hover effects
- Mobile-responsive design
- Accessible HTML structure
- Optimized images (lazy loading)

## Development Notes

### Adding New Posts

Edit `/data/posts.ts` and add new post objects with the following structure:

```typescript
{
  id: 'unique-id',
  title: 'Post Title',
  slug: 'post-slug',
  section: 'renting' | 'university' | 'eats' | 'local',
  category: 'Category Name',
  excerpt: 'Short description...',
  content: 'Full content...',
  image: 'https://...',
  author: 'Author Name',
  date: '2024-02-15',
  tags: ['tag1', 'tag2'],
}
```

### Adding New Dating Profiles

Edit `/data/profiles.ts` and add new profile objects.

### Customizing Colors

Edit `/tailwind.config.ts` to modify the design tokens.

### Adding Pages

Create new pages in appropriate route groups under `/app/(main)` or `/app/(dating)`.

## Future Enhancements

- Backend API integration
- User authentication
- Real-time messaging
- Database integration (PostgreSQL/MongoDB)
- Image upload functionality
- Advanced search and matching algorithm
- Email notifications
- Admin dashboard
- Content management system

## SEO

The site includes:
- Dynamic sitemap generation
- robots.txt configuration
- Meta tags for all pages
- Open Graph tags
- Twitter Card tags
- Structured data ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Olim in TLV © 2024

## Contact

For partnership inquiries, visit [/partnerships](/partnerships)

---

Built with care for the olim community in Tel Aviv.


