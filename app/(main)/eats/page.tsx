import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getPostsBySection } from '@/data/posts';
import { formatDate } from '@/lib/utils';

const categories = [
  { name: 'Food Guide', description: 'Best spots for authentic cuisine', icon: '🍽️' },
  { name: 'Budget Eats', description: 'Delicious food that won\'t break the bank', icon: '💵' },
  { name: 'Vegan', description: 'Plant-based paradise in Tel Aviv', icon: '🥗' },
  { name: 'Cafes', description: 'Coffee culture and work-friendly spots', icon: '☕' },
];

export default function EatsPage() {
  const posts = getPostsBySection('eats');

  return (
    <div>
      <Hero
        title="Eats in Tel Aviv"
        subtitle="Explore the vibrant food scene. From hummus to haute cuisine, discover the best of Tel Aviv's culinary world."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200"
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
        <h2 className="text-2xl font-bold text-navy mb-6">Featured Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/eats/${post.slug}`}>
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
          <h3 className="text-xl font-bold text-navy mb-3">Know a hidden gem?</h3>
          <p className="text-slate mb-4">Share your favorite food spots with the community</p>
          <Button variant="primary">Submit a Recommendation</Button>
        </GlassCard>
      </section>
    </div>
  );
}


