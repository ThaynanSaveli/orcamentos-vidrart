// src/context/ThemeContext.tsx
import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

type Theme = 'lara-light-blue' | 'lara-dark-blue';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getInitialTheme = (): Theme => {
    return (localStorage.getItem('theme') as Theme) || 'lara-light-blue';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const themeLink = document.getElementById('theme-css') as HTMLLinkElement;
    themeLink.href = `https://unpkg.com/primereact/resources/themes/${theme}/theme.css`;

    document.body.classList.toggle('dark-body', theme === 'lara-dark-blue');

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'lara-light-blue' ? 'lara-dark-blue' : 'lara-light-blue'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
