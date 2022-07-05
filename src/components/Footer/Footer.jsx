import { useThemeContext } from 'context/theme/ThemeContext';
import styles from './Footer.module.scss';

const Footer = () => {
  const { theme } = useThemeContext();

  return (
    <div className={styles.footer} style={{ color: theme.secondaryTextColor }}>
      TIKE & MEREZA
    </div>
  );
};

export default Footer;
