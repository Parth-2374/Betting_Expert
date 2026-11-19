import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const defaultUser = {
  id: "usr-99",
  username: "Alex_Bettor",
  email: "alex@bettingexpert.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
  joinDate: "January 2026",
  points: 2400,
  savedTips: ["tip-1", "tip-3"],
  followedTipsters: ["tipster-1", "tipster-4"]
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('be_user');
    return saved ? JSON.parse(saved) : defaultUser;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem('be_auth');
    return saved ? JSON.parse(saved) : true; // Default logged in for demo
  });

  useEffect(() => {
    localStorage.setItem('be_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('be_auth', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = (email, password) => {
    const loggedUser = {
      ...defaultUser,
      email: email,
      username: email.split('@')[0] || "User"
    };
    setUser(loggedUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = (username, email, password) => {
    const newUser = {
      ...defaultUser,
      id: `usr-${Date.now()}`,
      username,
      email,
      points: 1000 // Welcome bonus
    };
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const toggleSaveTip = (tipId) => {
    setUser(prev => {
      const isSaved = prev.savedTips.includes(tipId);
      const updatedSaved = isSaved
        ? prev.savedTips.filter(id => id !== tipId)
        : [...prev.savedTips, tipId];
      return { ...prev, savedTips: updatedSaved };
    });
  };

  const toggleFollowTipster = (tipsterId) => {
    setUser(prev => {
      const isFollowed = prev.followedTipsters.includes(tipsterId);
      const updatedFollowed = isFollowed
        ? prev.followedTipsters.filter(id => id !== tipsterId)
        : [...prev.followedTipsters, tipsterId];
      return { ...prev, followedTipsters: updatedFollowed };
    });
  };

  const deductPoints = (amount) => {
    if (user.points >= amount) {
      setUser(prev => ({ ...prev, points: prev.points - amount }));
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
        toggleSaveTip,
        toggleFollowTipster,
        deductPoints
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
