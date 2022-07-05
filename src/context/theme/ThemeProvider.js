import ThemeContext, { useStore } from 'context/theme/ThemeContext';
import lightTheme from 'themes/light';

const ThemeProvider = ({ children }) => {
  const store = useStore({
    theme: lightTheme,
    toggleTheme: () => {},
  });
  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
