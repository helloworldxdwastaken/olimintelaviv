'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { getProfileById } from '@/data/profiles';

export default async function ProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = getProfileById(id);
  
  if (!profile) {
    notFound();
  }
  
  return <ProfileContent profile={profile} />;
}

function ProfileContent({ profile }: { profile: ReturnType<typeof getProfileById> & {} }) {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (!profile) {
    notFound();
  }

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Link
        href="/dating/browse"
        className="inline-flex items-center text-primary hover:underline mb-6"
      >
        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Browse
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Photo Gallery */}
        <div className="lg:col-span-2">
          <GlassCard className="mb-6">
            <div className="aspect-square relative rounded-2xl overflow-hidden mb-4">
              <img
                src={profile.photos[currentPhotoIndex]}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {profile.photos.length > 1 && (
              <div className="flex gap-2">
                {profile.photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`flex-1 aspect-square rounded-xl overflow-hidden ${
                      index === currentPhotoIndex ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`${profile.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </GlassCard>

          {/* About */}
          <GlassCard>
            <h2 className="text-2xl font-bold text-navy mb-4">About {profile.name}</h2>
            <p className="text-slate leading-relaxed">{profile.bio}</p>
          </GlassCard>
        </div>

        {/* Profile Info & Actions */}
        <div className="space-y-6">
          <GlassCard>
            <h1 className="text-3xl font-bold text-navy mb-2">
              {profile.name}, {profile.age}
            </h1>
            <p className="text-slate mb-4">{profile.location}</p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-navy mb-2">Looking For</h3>
                <Badge variant="primary">{profile.lookingFor}</Badge>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-navy mb-2">Languages</h3>
                <div className="flex flex-wrap gap-1">
                  {profile.languages.map((lang) => (
                    <Badge key={lang} variant="secondary">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-navy mb-2">Interests</h3>
                <div className="flex flex-wrap gap-1">
                  {profile.interests.map((interest) => (
                    <Badge key={interest} variant="muted">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                variant="primary"
                className="w-full"
                onClick={() => setShowMessageModal(true)}
              >
                Send Message
              </Button>
              <Button
                variant={isLiked ? 'secondary' : 'glass'}
                className="w-full"
                onClick={handleLike}
              >
                {isLiked ? 'Liked ❤️' : 'Like 🤍'}
              </Button>
            </div>
          </GlassCard>

          <GlassCard>
            <button
              onClick={() => setShowReportModal(true)}
              className="text-sm text-muted hover:text-red-600 transition-colors"
            >
              Report Profile
            </button>
          </GlassCard>
        </div>
      </div>

      {/* Message Modal */}
      <Modal
        isOpen={showMessageModal}
        onClose={() => setShowMessageModal(false)}
        title={`Send a message to ${profile.name}`}
      >
        <p className="mb-4">This feature is coming soon! For now, this is a mock interface.</p>
        <Button variant="primary" onClick={() => setShowMessageModal(false)}>
          Close
        </Button>
      </Modal>

      {/* Report Modal */}
      <Modal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        title="Report Profile"
      >
        <p className="mb-4">
          If you've encountered suspicious behavior or content that violates our community
          guidelines, please let us know. This is a mock interface for MVP purposes.
        </p>
        <Button variant="primary" onClick={() => setShowReportModal(false)}>
          Close
        </Button>
      </Modal>
    </div>
  );
}

