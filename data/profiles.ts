export interface DatingProfile {
  id: string;
  name: string;
  age: number;
  location: string;
  languages: string[];
  interests: string[];
  bio: string;
  photos: string[];
  verifiedDate: string;
  lookingFor: string;
}

export const datingProfiles: DatingProfile[] = [
  {
    id: '1',
    name: 'Sarah',
    age: 26,
    location: 'Florentin',
    languages: ['English', 'Hebrew', 'French'],
    interests: ['Travel', 'Coffee', 'Tech', 'Yoga'],
    bio: 'Made aliyah 2 years ago from NYC. Software engineer by day, beach lover by weekend. Looking to meet genuine people and explore this amazing city together.',
    photos: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
    ],
    verifiedDate: '2024-01-15',
    lookingFor: 'Serious relationship',
  },
  {
    id: '2',
    name: 'David',
    age: 29,
    location: 'Tel Aviv Port',
    languages: ['English', 'Hebrew'],
    interests: ['Music', 'Hiking', 'Cooking', 'History'],
    bio: 'Oleh from London, working in fintech. Love exploring Israeli nature and trying new restaurants. Fluent in terrible Hebrew jokes.',
    photos: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    ],
    verifiedDate: '2024-02-01',
    lookingFor: 'Dating and see where it goes',
  },
  {
    id: '3',
    name: 'Maya',
    age: 24,
    location: 'Neve Tzedek',
    languages: ['Hebrew', 'English', 'Spanish'],
    interests: ['Art', 'Photography', 'Dance', 'Food'],
    bio: 'Argentine olah, graphic designer. Always up for spontaneous adventures and finding the best hummus in the city.',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
    ],
    verifiedDate: '2024-01-20',
    lookingFor: 'New friends and dates',
  },
  {
    id: '4',
    name: 'Alex',
    age: 31,
    location: 'Jaffa',
    languages: ['English', 'Hebrew', 'Russian'],
    interests: ['Startups', 'Surfing', 'Reading', 'Wine'],
    bio: 'Entrepreneur from SF. Made aliyah last year and loving the startup scene here. Looking for someone who can keep up with adventures.',
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800',
    ],
    verifiedDate: '2024-02-10',
    lookingFor: 'Serious relationship',
  },
  {
    id: '5',
    name: 'Rachel',
    age: 27,
    location: 'Ramat Aviv',
    languages: ['English', 'Hebrew'],
    interests: ['Running', 'Psychology', 'Volunteering', 'Brunch'],
    bio: 'Moved from Toronto 3 years ago. Clinical psychologist who loves helping others. Seeking someone kind and motivated.',
    photos: [
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800',
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
    ],
    verifiedDate: '2024-01-05',
    lookingFor: 'Serious relationship',
  },
  {
    id: '6',
    name: 'Michael',
    age: 28,
    location: 'Dizengoff',
    languages: ['English', 'Hebrew', 'German'],
    interests: ['Film', 'Basketball', 'Gaming', 'Travel'],
    bio: 'Berlin to Tel Aviv. Video editor working on cool projects. Looking for someone to share laughs and experiences with.',
    photos: [
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800',
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800',
    ],
    verifiedDate: '2024-02-15',
    lookingFor: 'Dating and see where it goes',
  },
  {
    id: '7',
    name: 'Leah',
    age: 25,
    location: 'Rothschild',
    languages: ['Hebrew', 'English', 'Italian'],
    interests: ['Fashion', 'Fitness', 'Animals', 'Music'],
    bio: 'Italian olah, fashion buyer. Dog mom to the cutest golden retriever. Looking for someone genuine and fun-loving.',
    photos: [
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    ],
    verifiedDate: '2024-01-25',
    lookingFor: 'New friends and dates',
  },
  {
    id: '8',
    name: 'Josh',
    age: 30,
    location: 'Park Hayarkon',
    languages: ['English', 'Hebrew'],
    interests: ['Sports', 'Business', 'Beach', 'Nightlife'],
    bio: 'Australian oleh, working in marketing. Beach volleyball enthusiast and always down for a good time. Let\'s grab a drink!',
    photos: [
      'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800',
      'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=800',
    ],
    verifiedDate: '2024-02-05',
    lookingFor: 'Dating and see where it goes',
  },
];

export function getProfileById(id: string): DatingProfile | undefined {
  return datingProfiles.find(profile => profile.id === id);
}

export function filterProfiles(filters: {
  ageMin?: number;
  ageMax?: number;
  location?: string;
  language?: string;
  interest?: string;
}): DatingProfile[] {
  return datingProfiles.filter(profile => {
    if (filters.ageMin && profile.age < filters.ageMin) return false;
    if (filters.ageMax && profile.age > filters.ageMax) return false;
    if (filters.location && !profile.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.language && !profile.languages.some(lang => lang.toLowerCase().includes(filters.language!.toLowerCase()))) return false;
    if (filters.interest && !profile.interests.some(int => int.toLowerCase().includes(filters.interest!.toLowerCase()))) return false;
    return true;
  });
}


