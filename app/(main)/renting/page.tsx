import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getPostsBySection } from '@/data/posts';
import { formatDate } from '@/lib/utils';

const categories = [
  { name: 'Guides', description: 'Step-by-step guides for renting in Tel Aviv', icon: '📖' },
  { name: 'Neighborhoods', description: 'Explore different areas and find your perfect spot', icon: '🏘️' },
  { name: 'Legal', description: 'Understand your rights and rental contracts', icon: '⚖️' },
  { name: 'Tips', description: 'Pro tips from experienced olim', icon: '💡' },
];

export default function RentingPage() {
  const posts = getPostsBySection('renting');

  return (
    <div>
      <Hero
        title="Renting in Tel Aviv"
        subtitle="Find your perfect home in the city. Get insider tips, neighborhood guides, and legal advice."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200"
        height="medium"
      />

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-navy mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <GlassCard key={category.name} className="text-center hover:scale-105 transition-transform cursor-pointer">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-bold text-navy mb-2">{category.name}</h3>
              <p className="text-sm text-slate">{category.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-navy mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/renting/${post.slug}`}>
              <GlassCard className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="aspect-video relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mb-3">
                  <Badge variant="primary">{post.category}</Badge>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{post.title}</h3>
                <p className="text-sm text-slate mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <GlassCard className="text-center py-8" variant="light">
          <h3 className="text-xl font-bold text-navy mb-3">Have a tip to share?</h3>
          <p className="text-slate mb-4">Help other olim by sharing your renting experience</p>
          <Button variant="primary">Submit a Tip</Button>
        </GlassCard>
      </section>
    </div>
  );
}


