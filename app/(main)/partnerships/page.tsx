'use client';

import { useState } from 'react';
import Hero from '@/components/shared/Hero';
import GlassCard from '@/components/ui/GlassCard';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { validateContactForm } from '@/lib/validation';

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, number>();

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    topic: '',
    budget: '',
    message: '',
    honeypot: '', // Anti-spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const topicOptions = [
    { value: '', label: 'Select a topic' },
    { value: 'sponsorship', label: 'Sponsorship Opportunities' },
    { value: 'collaboration', label: 'Content Collaboration' },
    { value: 'advertising', label: 'Advertising' },
    { value: 'events', label: 'Events & Workshops' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check (simple client-side)
    const now = Date.now();
    const lastSubmit = rateLimitMap.get(formData.email);
    if (lastSubmit && now - lastSubmit < 60000) {
      setErrors({ form: 'Please wait a minute before submitting again' });
      return;
    }

    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      console.log('Partnership form submitted:', formData);
      rateLimitMap.set(formData.email, now);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        organization: '',
        topic: '',
        budget: '',
        message: '',
        honeypot: '',
      });
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div>
        <Hero
          title="Partnerships"
          subtitle="Collaborate with us to support the olim community in Tel Aviv"
          image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
          height="medium"
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard className="text-center py-12" variant="light">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-bold text-navy mb-4">Thank You!</h2>
            <p className="text-lg text-slate mb-6">
              We've received your partnership inquiry and will get back to you within 2-3 business days.
            </p>
            <Button
              variant="primary"
              onClick={() => setIsSuccess(false)}
            >
              Submit Another Request
            </Button>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero
        title="Partnerships"
        subtitle="Collaborate with us to support the olim community in Tel Aviv"
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
        height="medium"
      />

      <div className="max-w-2xl mx-auto">
        <GlassCard className="mb-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Why Partner With Us?</h2>
          <ul className="space-y-3 text-slate">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Access to a growing community of thousands of olim in Tel Aviv</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Targeted exposure to English-speaking expats and new immigrants</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Opportunities for content collaboration and co-marketing</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Support a mission-driven platform helping olim thrive</span>
            </li>
          </ul>
        </GlassCard>

        <GlassCard>
          <h2 className="text-2xl font-bold text-navy mb-6">Get in Touch</h2>
          
          {errors.form && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded-2xl text-red-700">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />

            <Input
              label="Organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              error={errors.organization}
              required
            />

            <Select
              label="Topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              options={topicOptions}
              error={errors.topic}
              required
            />

            <Input
              label="Budget (Optional)"
              name="budget"
              placeholder="e.g., $1,000 - $5,000"
              value={formData.budget}
              onChange={handleChange}
            />

            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              placeholder="Tell us about your partnership idea..."
              required
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Partnership Inquiry'}
            </Button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}


