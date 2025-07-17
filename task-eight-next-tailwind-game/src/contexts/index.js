"use client"
import React, { useState, createContext, useContext } from 'react';
import { gameConfig } from '../utils/gameConfig';

// ============ CONTEXTS ============
const ThemeContext = createContext();
const RouterContext = createContext();

// ============ HOOKS ============
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a Router');
  }
  return context;
};

// ============ PROVIDERS ============
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Router = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [gameConfig, setGameConfig] = useState(null);
  
  const navigate = (route, config = null) => {
    setCurrentRoute(route);
    if (config) setGameConfig(config);
  };
  
  return (
    <RouterContext.Provider value={{ currentRoute, navigate, gameConfig }}>
      {children}
    </RouterContext.Provider>
  );
};

export { RouterContext };