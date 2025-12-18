import Link from 'next/link';
import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { datingProfiles } from '@/data/profiles';

const features = [
  {
    title: 'Verified Olim',
    description: 'Connect with verified members of the olim community in Tel Aviv',
  },
  {
    title: 'Shared Experience',
    description: 'Meet people who understand the unique journey of making aliyah',
  },
  {
    title: 'Safe & Secure',
    description: 'Your privacy and safety are our top priorities',
  },
];

const safetyTips = [
  'Meet in public places for first dates',
  'Tell a friend where you\'re going',
  'Trust your instincts',
  'Report suspicious behavior',
  'Take your time getting to know someone',
];

export default function DatingLandingPage() {
  const featuredProfiles = datingProfiles.slice(0, 4);

  return (
    <div>
      <Hero
        title="Find Love in Tel Aviv"
        subtitle="Connect with other olim who understand your journey. Build meaningful relationships in your new home."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
        height="large"
      >
        <div className="flex gap-4">
          <Link href="/dating/browse">
            <Button size="lg" variant="primary">
              Browse Profiles
            </Button>
          </Link>
          <Link href="/dating/messages">
            <Button size="lg" variant="glass">
              Messages
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-navy text-center mb-12">
          Why Choose Olim in TLV Dating?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="text-center">
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-slate">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-navy">Featured Profiles</h2>
          <Link href="/dating/browse">
            <Button variant="ghost">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProfiles.map((profile) => (
            <Link key={profile.id} href={`/dating/profile/${profile.id}`}>
              <GlassCard className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={profile.photos[0]}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">
                  {profile.name}, {profile.age}
                </h3>
                <p className="text-sm text-slate mb-3">{profile.location}</p>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.slice(0, 3).map((interest) => (
                    <Badge key={interest} variant="primary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Safety Tips */}
      <section className="mb-16">
        <GlassCard variant="dark">
          <h2 className="text-2xl font-bold text-white mb-6">Safety First</h2>
          <p className="text-white/90 mb-4">
            Your safety is important to us. Here are some tips for safe dating:
          </p>
          <ul className="space-y-2">
            {safetyTips.map((tip) => (
              <li key={tip} className="flex items-start text-white/90">
                <span className="text-primary mr-2">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </section>

      {/* CTA */}
      <section>
        <GlassCard className="text-center py-12">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-slate mb-6 max-w-2xl mx-auto">
            Join thousands of olim already connecting and dating in Tel Aviv
          </p>
          <Link href="/dating/browse">
            <Button size="lg" variant="primary">
              Start Browsing
            </Button>
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}


