import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

const features = [
  {
    title: 'Dating',
    description: 'Connect with other olim in Tel Aviv. Find meaningful relationships in your new home.',
    href: '/dating',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
  },
  {
    title: 'Renting',
    description: 'Find your perfect apartment. Get tips on neighborhoods, contracts, and navigating the rental market.',
    href: '/renting',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
  },
  {
    title: 'University',
    description: 'Explore academic opportunities, scholarships, and student life in Tel Aviv.',
    href: '/university',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
  },
  {
    title: 'Eats',
    description: 'Discover the best restaurants, cafes, and food spots in the city.',
    href: '/eats',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
  },
  {
    title: 'Local',
    description: 'Navigate bureaucracy, learn Hebrew, and master daily life in Israel.',
    href: '/local',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
  },
  {
    title: 'Partnerships',
    description: 'Collaborate with us to support the olim community in Tel Aviv.',
    href: '/partnerships',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
  },
];

export default function HomePage() {
  return (
    <div>
      <Hero
        title="Welcome to Olim in TLV"
        subtitle="Your comprehensive guide to thriving in Tel Aviv. Connect, explore, and build your new life in Israel."
        image="https://images.unsplash.com/photo-1548848571-f73f5874b2e2?w=1200"
        height="large"
      >
        <Button size="lg" variant="primary" className="shadow-xl">
          <Link href="/dating">Start Connecting</Link>
        </Button>
      </Hero>

      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Everything You Need</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            From finding love to finding your home, we've got you covered with resources tailored for olim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href}>
              <GlassCard className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="aspect-video relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                <p className="text-slate">{feature.description}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <GlassCard className="text-center py-12" variant="dark">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Thousands of olim are already using our platform to connect and thrive in Tel Aviv.
            Start your journey today.
          </p>
          <Button size="lg" variant="primary">
            <Link href="/dating/browse">Browse Profiles</Link>
          </Button>
        </GlassCard>
      </section>
    </div>
  );
}


