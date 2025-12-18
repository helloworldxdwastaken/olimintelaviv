export interface Post {
  id: string;
  title: string;
  slug: string;
  section: 'renting' | 'university' | 'eats' | 'local';
  category: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  tags: string[];
}

export const posts: Post[] = [
  // Renting Posts
  {
    id: 'r1',
    title: 'Complete Guide to Renting in Tel Aviv',
    slug: 'complete-guide-to-renting-tel-aviv',
    section: 'renting',
    category: 'Guides',
    excerpt: 'Everything you need to know about finding and renting an apartment in Tel Aviv as an oleh.',
    content: `Finding an apartment in Tel Aviv can be challenging, but with the right approach and knowledge, you can secure a great place. Here's everything you need to know...
    
## Understanding the Market
Tel Aviv's rental market moves fast. Properties can be rented within days, so be prepared to act quickly when you find something you like.

## Key Tips
1. Start your search 1-2 months before you need to move
2. Budget for first month + deposit + agent fee (usually 1 month rent)
3. Join Facebook groups like "Secret Tel Aviv" and "Olim in Israel"
4. Use websites like Yad2 and Facebook Marketplace
5. Consider roommates to reduce costs

## Popular Neighborhoods
- Florentin: Trendy, young vibe, street art
- Neve Tzedek: Upscale, quiet, beautiful architecture
- Dizengoff: Central, nightlife, cafes
- Jaffa: Historic, diverse, artistic

## Red Flags to Watch For
- Landlords asking for cash only
- No written contract
- Unrealistic prices (too good to be true)
- Unwilling to show the property in person`,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    author: 'Sarah Cohen',
    date: '2024-02-15',
    tags: ['Housing', 'Tips', 'Neighborhoods'],
  },
  {
    id: 'r2',
    title: 'Best Neighborhoods for Young Olim',
    slug: 'best-neighborhoods-young-olim',
    section: 'renting',
    category: 'Neighborhoods',
    excerpt: 'Discover the top neighborhoods where young olim are building their community in Tel Aviv.',
    content: 'Detailed guide about neighborhoods...',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
    author: 'David Levi',
    date: '2024-02-10',
    tags: ['Neighborhoods', 'Community', 'Lifestyle'],
  },
  {
    id: 'r3',
    title: 'Understanding Israeli Rental Contracts',
    slug: 'understanding-israeli-rental-contracts',
    section: 'renting',
    category: 'Legal',
    excerpt: 'Navigate the legal aspects of renting in Israel with confidence.',
    content: 'Everything about rental contracts...',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    author: 'Rachel Green',
    date: '2024-02-05',
    tags: ['Legal', 'Contracts', 'Rights'],
  },
  
  // University Posts
  {
    id: 'u1',
    title: 'Top Universities in Tel Aviv Area',
    slug: 'top-universities-tel-aviv',
    section: 'university',
    category: 'Education',
    excerpt: 'Explore the best universities and academic programs for international students.',
    content: 'Guide to universities...',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
    author: 'Prof. Michael Gold',
    date: '2024-02-12',
    tags: ['Education', 'Programs', 'Admission'],
  },
  {
    id: 'u2',
    title: 'Scholarships for Olim Students',
    slug: 'scholarships-olim-students',
    section: 'university',
    category: 'Financial Aid',
    excerpt: 'Complete list of scholarships and financial aid available for olim pursuing higher education.',
    content: 'Scholarship opportunities...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
    author: 'Hannah Stein',
    date: '2024-02-08',
    tags: ['Scholarships', 'Financial Aid', 'Students'],
  },
  {
    id: 'u3',
    title: 'Student Life in Tel Aviv',
    slug: 'student-life-tel-aviv',
    section: 'university',
    category: 'Campus Life',
    excerpt: 'What to expect as a student in Tel Aviv - from housing to social activities.',
    content: 'Student life overview...',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    author: 'Alex Friedman',
    date: '2024-02-01',
    tags: ['Campus', 'Social', 'Activities'],
  },
  
  // Eats Posts
  {
    id: 'e1',
    title: 'Best Hummus Spots in Tel Aviv',
    slug: 'best-hummus-tel-aviv',
    section: 'eats',
    category: 'Food Guide',
    excerpt: 'A foodie\'s guide to finding the best hummus in the city, from traditional to modern.',
    content: 'Top hummus spots...',
    image: 'https://images.unsplash.com/photo-1628270461990-59c7409c78e8?w=800',
    author: 'Maya Romano',
    date: '2024-02-14',
    tags: ['Hummus', 'Traditional', 'Food'],
  },
  {
    id: 'e2',
    title: 'Budget-Friendly Restaurants',
    slug: 'budget-friendly-restaurants',
    section: 'eats',
    category: 'Budget Eats',
    excerpt: 'Eat well without breaking the bank - our favorite affordable restaurants.',
    content: 'Affordable dining options...',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    author: 'Josh Miller',
    date: '2024-02-11',
    tags: ['Budget', 'Restaurants', 'Value'],
  },
  {
    id: 'e3',
    title: 'Tel Aviv Vegan Scene',
    slug: 'tel-aviv-vegan-scene',
    section: 'eats',
    category: 'Vegan',
    excerpt: 'Discover why Tel Aviv is considered one of the most vegan-friendly cities in the world.',
    content: 'Vegan restaurants and cafes...',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    author: 'Leah Bloom',
    date: '2024-02-07',
    tags: ['Vegan', 'Healthy', 'Plant-based'],
  },
  
  // Local Posts
  {
    id: 'l1',
    title: 'Navigating Israeli Bureaucracy',
    slug: 'navigating-israeli-bureaucracy',
    section: 'local',
    category: 'Practical Tips',
    excerpt: 'Master the art of dealing with Israeli government offices and paperwork.',
    content: 'Bureaucracy survival guide...',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
    author: 'Sarah Cohen',
    date: '2024-02-13',
    tags: ['Bureaucracy', 'Paperwork', 'Tips'],
  },
  {
    id: 'l2',
    title: 'Hebrew Learning Resources',
    slug: 'hebrew-learning-resources',
    section: 'local',
    category: 'Language',
    excerpt: 'Best apps, courses, and methods for learning Hebrew as an adult.',
    content: 'Hebrew learning guide...',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800',
    author: 'David Levi',
    date: '2024-02-09',
    tags: ['Hebrew', 'Language', 'Learning'],
  },
  {
    id: 'l3',
    title: 'Healthcare System Guide for Olim',
    slug: 'healthcare-system-guide-olim',
    section: 'local',
    category: 'Healthcare',
    excerpt: 'Understanding Israeli healthcare: choosing a kupat holim and navigating the system.',
    content: 'Healthcare system overview...',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800',
    author: 'Rachel Green',
    date: '2024-02-03',
    tags: ['Healthcare', 'Insurance', 'Medical'],
  },
];

export function getPostsBySection(section: Post['section']): Post[] {
  return posts.filter(post => post.section === section);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}


