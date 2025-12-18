'use client';

import { useState } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import SectionHeader from '@/components/ui/SectionHeader';
import { datingProfiles, filterProfiles } from '@/data/profiles';

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    ageMin: '',
    ageMax: '',
    location: '',
    language: '',
    interest: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Apply filters
  let filteredProfiles = filterProfiles({
    ageMin: filters.ageMin ? parseInt(filters.ageMin) : undefined,
    ageMax: filters.ageMax ? parseInt(filters.ageMax) : undefined,
    location: filters.location,
    language: filters.language,
    interest: filters.interest,
  });

  // Apply search
  if (searchQuery) {
    filteredProfiles = filteredProfiles.filter(profile =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.bio.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const locationOptions = [
    { value: '', label: 'All Locations' },
    { value: 'florentin', label: 'Florentin' },
    { value: 'neve tzedek', label: 'Neve Tzedek' },
    { value: 'jaffa', label: 'Jaffa' },
    { value: 'dizengoff', label: 'Dizengoff' },
    { value: 'rothschild', label: 'Rothschild' },
  ];

  return (
    <div>
      <SectionHeader
        title="Browse Profiles"
        subtitle={`Discover ${filteredProfiles.length} amazing ${filteredProfiles.length === 1 ? 'person' : 'people'} in Tel Aviv`}
      />

      {/* Filters */}
      <GlassCard className="mb-8">
        <h3 className="text-lg font-bold text-navy mb-4">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Input
            name="ageMin"
            placeholder="Min Age"
            type="number"
            value={filters.ageMin}
            onChange={handleFilterChange}
          />
          <Input
            name="ageMax"
            placeholder="Max Age"
            type="number"
            value={filters.ageMax}
            onChange={handleFilterChange}
          />
          <Select
            name="location"
            options={locationOptions}
            value={filters.location}
            onChange={handleFilterChange}
          />
          <Input
            name="language"
            placeholder="Language"
            value={filters.language}
            onChange={handleFilterChange}
          />
          <Input
            name="interest"
            placeholder="Interest"
            value={filters.interest}
            onChange={handleFilterChange}
          />
        </div>
      </GlassCard>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProfiles.map((profile) => (
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
              <p className="text-sm text-slate mb-2">{profile.location}</p>
              <p className="text-xs text-muted mb-3 line-clamp-2">{profile.bio}</p>
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

      {filteredProfiles.length === 0 && (
        <GlassCard className="text-center py-12">
          <p className="text-slate">No profiles match your filters. Try adjusting your search.</p>
        </GlassCard>
      )}
    </div>
  );
}


