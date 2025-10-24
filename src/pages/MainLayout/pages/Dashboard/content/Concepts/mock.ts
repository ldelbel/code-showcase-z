import { ConceptsOverviewData, MyConceptsData } from '../types';

export const conceptsData = [
  {
    id: 'crown',
    name: 'The Crown',
    planets: ['sun', 'ascendant', 'moon'],
    theme: 'Core Identity',
  },
  {
    id: 'amulet',
    name: 'The Amulet',
    planets: ['jupiter', 'saturn', 'chiron'],
    theme: 'Growth and Responsibility',
  },
  {
    id: 'scepter',
    name: 'The Scepter',
    planets: ['mercury', 'mars', 'descendant'],
    theme: 'External Influence and Action',
  },
  {
    id: 'ring',
    name: 'The Ring',
    planets: ['venus', 'lilith', 'vertex'],
    theme: 'Spiritual Transformation',
  },
  {
    id: 'lantern',
    name: 'The Lantern',
    planets: ['pars_spiritus', 'imum_coeli', 'antivertex'],
    theme: 'Destiny and Purpose',
  },
  {
    id: 'orb',
    name: 'The Orb',
    planets: ['north_node', 'midheaven', 'pars_fortuna'],
    theme: 'Destiny and Purpose',
  },
];

export const myConceptsData: MyConceptsData = [
  {
    slug: 'crown',
    placements: ['sun', 'ascendant', 'moon'],
    userConcept: null,
    image: '/images/crown.png',
    composition: [],
  },
  {
    slug: 'amulet',
    placements: ['jupiter', 'saturn', 'chiron'],
    userConcept: null,
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
    slug: 'ring',
    placements: ['venus', 'lilith', 'vertex'],
    userConcept: null,
    composition: [],
  },
  {
    slug: 'lantern',
    placements: ['pars_spiritus', 'imum_coeli', 'antivertex'],
    userConcept: null,
    composition: [],
  },
  {
    slug: 'orb',
    placements: ['north_node', 'midheaven', 'pars_fortuna'],
    userConcept: null,
    composition: [],
  },
];

export const conceptOverviewData: ConceptsOverviewData = [
  {
    id: 'crown',
    name: 'The Crown of Focused Power',
    generated: false,
    cost: '3 credits',
  },
  {
    id: 'amulet',
    name: 'Your Amulet',
    generated: false,
    cost: '2 credits',
  },
  {
    id: 'scepter',
    name: 'Your Scepter',
    generated: false,
    cost: 'free',
  },
  {
    id: 'ring',
    name: 'Your Ring',
    generated: false,
    cost: '2 credits',
  },
  {
    id: 'lantern',
    name: 'Your Lantern',
    generated: false,
    cost: '3 credits',
  },
  {
    id: 'orb',
    name: 'Your Orb',
    generated: false,
    cost: '3 credits',
  },
];
