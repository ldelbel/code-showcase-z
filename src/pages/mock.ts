import { UserProfile } from '@zodic/shared/types';
import { MyConceptsData } from './MainLayout/pages/Dashboard/content/types';

export const mockConcepts: MyConceptsData = [
  {
    slug: 'crown',
    placements: ['sun', 'ascendant', 'moon'],
    userConcept: null,
    image: '/images/crown.png',
    composition: [],
  },
  {
    slug: 'scepter',
    placements: ['mercury', 'mars', 'descendant'],
    userConcept: null,
    image: '/images/scepter.png',
    composition: [],
  },
  {
    slug: 'amulet',
    placements: ['jupiter', 'saturn', 'chiron'],
    userConcept: null,
    image: '/images/amulet.png',
    composition: [],
  },
  {
    slug: 'ring',
    placements: ['venus', 'lilith', 'vertex'],
    userConcept: null,
    image: '/images/ring.png',
    composition: [],
  },
  {
    slug: 'lantern',
    placements: ['pars_spiritus', 'imum_coeli', 'antivertex'],
    userConcept: null,
    image: '/images/lantern.png',
    composition: [],
  },
  {
    slug: 'orb',
    placements: ['north_node', 'midheaven', 'pars_fortuna'],
    userConcept: null,
    image: '/images/orb.png',
    composition: [],
  },
];

export const mockConceptsWithComposition: MyConceptsData = [
  {
    slug: 'crown',
    placements: ['sun', 'ascendant', 'moon'],
    userConcept: null,
    image: '/images/crown.png',
    composition: [
      {
        placement: 'sun',
        sign: 'sagittarius',
      },
      {
        placement: 'ascendant',
        sign: 'aquarius',
      },
      {
        placement: 'moon',
        sign: 'libra',
      },
    ],
  },
  {
    slug: 'scepter',
    placements: ['mercury', 'mars', 'descendant'],
    userConcept: null,
    image: '/images/scepter.png',
    composition: [
      {
        placement: 'mercury',
        sign: 'capricorn',
      },
      {
        placement: 'mars',
        sign: 'gemini',
      },
      {
        placement: 'descendant',
        sign: 'leo',
      },
    ],
  },
  {
    slug: 'amulet',
    placements: ['jupiter', 'saturn', 'chiron'],
    userConcept: null,
    image: '/images/amulet.png',
    composition: [
      {
        placement: 'jupiter',
        sign: 'leo',
      },
      {
        placement: 'saturn',
        sign: 'capricorn',
      },
      {
        placement: 'chiron',
        sign: 'cancer',
      },
    ],
  },
  {
    slug: 'ring',
    placements: ['venus', 'lilith', 'vertex'],
    userConcept: null,
    image: '/images/ring.png',
    composition: [
      {
        placement: 'venus',
        sign: 'sagittarius',
      },
      {
        placement: 'lilith',
        sign: 'sagittarius',
      },
      {
        placement: 'vertex',
        sign: 'gemini',
      },
    ],
  },
  {
    slug: 'lantern',
    placements: ['pars_spiritus', 'imum_coeli', 'antivertex'],
    userConcept: null,
    image: '/images/lantern.png',
    composition: [
      {
        placement: 'pars_spiritus',
        sign: 'aries',
      },
      {
        placement: 'imum_coeli',
        sign: 'aries',
      },
      {
        placement: 'antivertex',
        sign: 'sagittarius',
      },
    ],
  },
  {
    slug: 'orb',
    placements: ['north_node', 'midheaven', 'pars_fortuna'],
    userConcept: null,
    image: '/images/orb.png',
    composition: [
      {
        placement: 'north_node',
        sign: 'capricorn',
      },
      {
        placement: 'midheaven',
        sign: 'libra',
      },
      {
        placement: 'pars_fortuna',
        sign: 'scorpio',
      },
    ],
  },
];

const mockUserProfile: UserProfile = {
  email: 'testuser@example.com',
  name: 'Test User',
  profileImage: 'https://example.com/profile.jpg',
  userPhotoId: '12345',
  userPhotoUrl: 'https://example.com/user-photo.jpg',
  gender: 'female',
  day: 15,
  month: 7,
  year: 1995,
  hour: 14,
  min: 30,
  latitude: -23.55052,
  longitude: -46.633308,
  birthLocation: 'São Paulo, Brazil',
  instagramUsername: 'testuser_ig',
  tiktokUsername: 'testuser_tt',
  oauthProvider: 'google',
  creditsBalance: 100,
  language: 'pt-BR',
};

export default mockUserProfile;
