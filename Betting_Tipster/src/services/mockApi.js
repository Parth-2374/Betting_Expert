import { mockUsers } from '../data/users';
import { mockTips } from '../data/tips';
import { mockTipsters } from '../data/tipsters';
import { mockMatches } from '../data/matches';
import { mockSports } from '../data/sports';
import { mockCompetitions } from '../data/competitions';
import { mockBookmakers } from '../data/bookmakers';
import { mockBonusCodes } from '../data/bonusCodes';
import { mockArticles } from '../data/articles';
import { mockTestimonials } from '../data/testimonials';
import { mockReviews } from '../data/reviews';

const getInitialData = (key, fallback) => {
  try {
    const saved = localStorage.getItem(`be_data_${key}`);
    return saved ? JSON.parse(saved) : fallback;
  } catch (e) {
    return fallback;
  }
};

const saveInitialData = (key, data) => {
  try {
    localStorage.setItem(`be_data_${key}`, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
};

export const initialCollections = {
  users: getInitialData('users', mockUsers),
  tips: getInitialData('tips', mockTips),
  tipsters: getInitialData('tipsters', mockTipsters),
  matches: getInitialData('matches', mockMatches),
  sports: getInitialData('sports', mockSports),
  competitions: getInitialData('competitions', mockCompetitions),
  bookmakers: getInitialData('bookmakers', mockBookmakers),
  bonusCodes: getInitialData('bonusCodes', mockBonusCodes),
  articles: getInitialData('articles', mockArticles),
  testimonials: getInitialData('testimonials', mockTestimonials),
  reviews: getInitialData('reviews', mockReviews)
};

export const mockApiService = {
  persistCollection(key, items) {
    saveInitialData(key, items);
  }
};
