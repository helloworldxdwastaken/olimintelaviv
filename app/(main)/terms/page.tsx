import GlassCard from '@/components/ui/GlassCard';
import SectionHeader from '@/components/ui/SectionHeader';

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <SectionHeader
        title="Terms of Service"
        subtitle="Terms and conditions for using Olim in TLV"
      />

      <GlassCard className="mb-6">
        <h2 className="text-xl font-bold text-navy mb-3">Acceptance of Terms</h2>
        <p className="text-slate">
          By accessing and using Olim in TLV, you accept and agree to be bound by the terms
          and provisions of this agreement.
        </p>
      </GlassCard>

      <GlassCard className="mb-6">
        <h2 className="text-xl font-bold text-navy mb-3">Use of Service</h2>
        <p className="text-slate mb-3">
          You agree to use our service only for lawful purposes and in accordance with these Terms.
          You agree not to:
        </p>
        <ul className="space-y-2 text-slate">
          <li>• Use the service in any way that violates any applicable law or regulation</li>
          <li>• Impersonate or attempt to impersonate another user</li>
          <li>• Engage in any conduct that restricts or inhibits use of the service</li>
          <li>• Use the service to harass, abuse, or harm another person</li>
        </ul>
      </GlassCard>

      <GlassCard>
        <h2 className="text-xl font-bold text-navy mb-3">Disclaimer</h2>
        <p className="text-slate">
          The service is provided on an "as is" and "as available" basis. We make no warranties,
          expressed or implied, regarding the service, including warranties of merchantability,
          fitness for a particular purpose, or non-infringement.
        </p>
      </GlassCard>
    </div>
  );
}


