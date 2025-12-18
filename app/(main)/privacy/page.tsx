import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <SectionHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <GlassCard className="mb-6">
        <h2 className="text-xl font-bold text-navy mb-3">Information We Collect</h2>
        <p className="text-slate">
          We collect information you provide directly to us, such as when you create an account,
          fill out a form, or communicate with us. This may include your name, email address,
          and other contact information.
        </p>
      </GlassCard>

      <GlassCard className="mb-6">
        <h2 className="text-xl font-bold text-navy mb-3">How We Use Your Information</h2>
        <p className="text-slate mb-3">
          We use the information we collect to:
        </p>
        <ul className="space-y-2 text-slate">
          <li>• Provide, maintain, and improve our services</li>
          <li>• Send you updates and information</li>
          <li>• Respond to your inquiries and requests</li>
          <li>• Protect against fraud and abuse</li>
        </ul>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-bold text-navy mb-3">Data Security</h2>
        <p className="text-slate">
          We implement appropriate security measures to protect your personal information.
          However, no method of transmission over the Internet is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </GlassCard>
    </div>
  );
}


