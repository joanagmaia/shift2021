import { useState, useEffect, createContext, useContext } from 'react';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';

export const useStore = () => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const lastSelectedThemeName = window.localStorage.getItem('theme');

    if (lastSelectedThemeName) {
      const selectedTheme =
        lastSelectedThemeName === darkTheme.name ? darkTheme : lightTheme;

      setTheme(selectedTheme);
    }
  }, []);

  return {
    theme,
    setTheme,
  };
};

const ThemeContext = createContext();
export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;
