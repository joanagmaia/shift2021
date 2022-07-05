import { useThemeContext } from 'context/theme/ThemeContext';
import darkTheme from 'themes/dark';
import lightTheme from 'themes/light';
import styles from './ToggleThemeButton.module.scss';

const ToggleThemeButton = () => {
  const { theme, setTheme } = useThemeContext();

  const isDarkTheme = theme.name === 'dark' ? theme.toggleActivatedColor : '';
  const isLightTheme = theme.name === 'light' ? theme.toggleActivatedColor : '';

  return (
    <div
      className={styles.toggleWrapper}
      style={{ backgroundColor: theme.toggleBackgroundColor }}>
      <button
        className={styles.toggleButton}
        style={{ backgroundColor: isDarkTheme }}
        type="button"
        onClick={() => setTheme(darkTheme)}>
        🌚
      </button>
      <button
        className={styles.toggleButton}
        style={{ backgroundColor: isLightTheme }}
        type="button"
        onClick={() => setTheme(lightTheme)}>
        🌞
      </button>
    </div>
  );
};

export default ToggleThemeButton;
