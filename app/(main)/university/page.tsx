import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { getPostsBySection } from '@/data/posts';
import { formatDate } from '@/lib/utils';

const categories = [
  { name: 'Education', description: 'Universities and academic programs', icon: '🎓' },
  { name: 'Financial Aid', description: 'Scholarships and funding opportunities', icon: '💰' },
  { name: 'Campus Life', description: 'Student activities and social life', icon: '👥' },
  { name: 'Admission', description: 'Application process and requirements', icon: '📝' },
];

export default function UniversityPage() {
  const posts = getPostsBySection('university');

  return (
    <div>
      <Hero
        title="University in Tel Aviv"
        subtitle="Pursue your academic dreams in Israel. Explore programs, scholarships, and student life."
        image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200"
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
        <h2 className="text-2xl font-bold text-navy mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/university/${post.slug}`}>
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
          <h3 className="text-xl font-bold text-navy mb-3">Have academic insights to share?</h3>
          <p className="text-slate mb-4">Help future students by sharing your university experience</p>
          <Button variant="primary">Submit a Resource</Button>
        </GlassCard>
      </section>
    </div>
  );
}


