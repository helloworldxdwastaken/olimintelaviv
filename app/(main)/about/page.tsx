import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';

export default function AboutPage() {
  return (
    <div>
      <Hero
        title="About Olim in TLV"
        subtitle="Empowering olim to thrive in Tel Aviv"
        image="https://images.unsplash.com/photo-1548848571-f73f5874b2e2?w=1200"
        height="medium"
      />

      <div className="max-w-3xl mx-auto">
        <GlassCard className="mb-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
          <p className="text-slate mb-4">
            Olim in TLV was created to help new immigrants navigate and thrive in Tel Aviv.
            We understand the challenges of starting a new life in a new country, and we're here
            to make that transition smoother and more enjoyable.
          </p>
          <p className="text-slate">
            From finding housing and making connections to exploring the best the city has to offer,
            we provide comprehensive resources tailored specifically for the olim community.
          </p>
        </GlassCard>

        <GlassCard>
          <h2 className="text-2xl font-bold text-navy mb-4">What We Offer</h2>
          <ul className="space-y-3 text-slate">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>A dating platform connecting olim in Tel Aviv</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Comprehensive guides for renting and housing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>University and academic resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Food and restaurant recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Practical tips for navigating Israeli life</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}


