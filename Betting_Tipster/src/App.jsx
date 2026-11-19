import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { DataProvider } from './context/DataContext';

// Layout Imports
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Page Imports
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Tips from './pages/Tips/Tips';
import TipDetail from './pages/Tips/TipDetail';
import HotTips from './pages/HotTips/HotTips';
import Football from './pages/Football/Football';
import FootballDetail from './pages/Football/FootballDetail';
import Tennis from './pages/Tennis/Tennis';
import TennisDetail from './pages/Tennis/TennisDetail';
import Basketball from './pages/Basketball/Basketball';
import BasketballDetail from './pages/Basketball/BasketballDetail';
import Stats from './pages/Stats/Stats';
import Tipsters from './pages/Tipsters/Tipsters';
import TipsterDetail from './pages/Tipsters/TipsterDetail';
import Bookmakers from './pages/Bookmakers/Bookmakers';
import BonusCodes from './pages/BonusCodes/BonusCodes';
import Competitions from './pages/Competitions/Competitions';
import Previews from './pages/Previews/Previews';
import PreviewDetail from './pages/Previews/PreviewDetail';
import FootballStatistics from './pages/FootballStatistics/FootballStatistics';
import Racing from './pages/Racing/Racing';

// Casino Pages
import CasinoHome from './pages/Casino/CasinoHome';
import BeginnersGuide from './pages/Casino/BeginnersGuide';
import Top10 from './pages/Casino/Top10';
import CasinoReviews from './pages/Casino/CasinoReviews';
import CasinoBonusCodes from './pages/Casino/CasinoBonusCodes';
import HighRollers from './pages/Casino/HighRollers';
import Slots from './pages/Casino/Slots';
import Roulette from './pages/Casino/Roulette';

// Poker Pages
import PokerHome from './pages/Poker/PokerHome';
import PokerGuide from './pages/Poker/PokerGuide';
import PokerTips from './pages/Poker/PokerTips';
import PokerRooms from './pages/Poker/PokerRooms';
import PokerBonusCodes from './pages/Poker/PokerBonusCodes';

// Bingo Pages
import BingoHome from './pages/Bingo/BingoHome';
import GettingStarted from './pages/Bingo/GettingStarted';
import BingoRules from './pages/Bingo/BingoRules';
import BingoStrategy from './pages/Bingo/BingoStrategy';
import BingoHalls from './pages/Bingo/BingoHalls';
import BingoFAQ from './pages/Bingo/BingoFAQ';

// Blog, Store, Auth & Profile
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import Store from './pages/Store/Store';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

// Admin Page Imports
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminTips from './pages/admin/AdminTips';
import AdminTipsters from './pages/admin/AdminTipsters';
import AdminMatches from './pages/admin/AdminMatches';
import AdminSports from './pages/admin/AdminSports';
import AdminCompetitions from './pages/admin/AdminCompetitions';
import AdminBookmakers from './pages/admin/AdminBookmakers';
import AdminBonusCodes from './pages/admin/AdminBonusCodes';
import AdminArticles from './pages/admin/AdminArticles';
import AdminTestimonials from './pages/admin/AdminTestimonials';
import AdminReviews from './pages/admin/AdminReviews';
import AdminStatistics from './pages/admin/AdminStatistics';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              {/* Standalone Auth Routes (No Header, Sidebar, or Footer) */}
              <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
              </Route>

              {/* Dedicated Admin Panel Routes */}
              <Route path="admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="tips" element={<AdminTips />} />
                <Route path="tipsters" element={<AdminTipsters />} />
                <Route path="matches" element={<AdminMatches />} />
                <Route path="sports" element={<AdminSports />} />
                <Route path="competitions" element={<AdminCompetitions />} />
                <Route path="bookmakers" element={<AdminBookmakers />} />
                <Route path="bonus-codes" element={<AdminBonusCodes />} />
                <Route path="articles" element={<AdminArticles />} />
                <Route path="testimonials" element={<AdminTestimonials />} />
                <Route path="reviews" element={<AdminReviews />} />
                <Route path="statistics" element={<AdminStatistics />} />
                <Route path="settings" element={<AdminSettings />} />
              </Route>

              {/* Public Website Routes */}
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />

                <Route path="tips" element={<Tips />} />
                <Route path="tips/:id" element={<TipDetail />} />
                <Route path="hot-tips" element={<HotTips />} />

                <Route path="football" element={<Football />} />
                <Route path="football/:id" element={<FootballDetail />} />
                <Route path="tennis" element={<Tennis />} />
                <Route path="tennis/:id" element={<TennisDetail />} />
                <Route path="basketball" element={<Basketball />} />
                <Route path="basketball/:id" element={<BasketballDetail />} />
                <Route path="racing" element={<Racing />} />

                <Route path="stats" element={<Stats />} />
                <Route path="tipsters" element={<Tipsters />} />
                <Route path="tipsters/:id" element={<TipsterDetail />} />
                <Route path="bookmakers" element={<Bookmakers />} />
                <Route path="bonus-codes" element={<BonusCodes />} />
                <Route path="competitions" element={<Competitions />} />
                <Route path="previews" element={<Previews />} />
                <Route path="previews/:id" element={<PreviewDetail />} />
                <Route path="football-statistics" element={<FootballStatistics />} />

                {/* Casino Routes */}
                <Route path="casino" element={<CasinoHome />} />
                <Route path="casino/beginners-guide" element={<BeginnersGuide />} />
                <Route path="casino/top-10" element={<Top10 />} />
                <Route path="casino/reviews" element={<CasinoReviews />} />
                <Route path="casino/bonus-codes" element={<CasinoBonusCodes />} />
                <Route path="casino/high-rollers" element={<HighRollers />} />
                <Route path="casino/slots" element={<Slots />} />
                <Route path="casino/roulette" element={<Roulette />} />

                {/* Poker Routes */}
                <Route path="poker" element={<PokerHome />} />
                <Route path="poker/guide" element={<PokerGuide />} />
                <Route path="poker/tips" element={<PokerTips />} />
                <Route path="poker/rooms" element={<PokerRooms />} />
                <Route path="poker/bonus-codes" element={<PokerBonusCodes />} />

                {/* Bingo Routes */}
                <Route path="bingo" element={<BingoHome />} />
                <Route path="bingo/getting-started" element={<GettingStarted />} />
                <Route path="bingo/rules" element={<BingoRules />} />
                <Route path="bingo/strategy" element={<BingoStrategy />} />
                <Route path="bingo/halls" element={<BingoHalls />} />
                <Route path="bingo/faq" element={<BingoFAQ />} />

                {/* Blog, Store & Profile */}
                <Route path="blog" element={<Blog />} />
                <Route path="blog/:id" element={<BlogDetail />} />
                <Route path="store" element={<Store />} />
                <Route path="profile" element={<Profile />} />

                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
