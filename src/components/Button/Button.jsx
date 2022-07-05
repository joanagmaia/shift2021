import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeContext } from 'context/theme/ThemeContext';
import globalStyles from 'styles/global.scss';
import styles from './Button.module.scss';

const Button = ({
  icon,
  label,
  searchTerm,
  onClick,
  onChange,
  onKeyPress,
  secondary = false,
  isTransformer = false,
  onHover,
}) => {
  const { theme } = useThemeContext();

  const backgroundImage = secondary ? theme.primaryColor2 : theme.primaryColor1;
  const flexDirection = isTransformer ? styles.reversedDirection : '';

  return (
    <button
      className={`${styles.button} ${globalStyles.button} ${flexDirection}`}
      style={{
        backgroundImage,
        boxShadow: theme.primaryShadow,
        color: '#FFFFFF',
      }}
      type="button"
      onClick={onClick}
      onMouseEnter={() => onHover()}
      onMouseLeave={() => onHover()}>
      {!isTransformer && (
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      )}
      {label && <p className={styles.label}>{label}</p>}
      {isTransformer && (
        <input
          autoFocus
          className={styles.input}
          styles={{ color: '#FFFFFF' }}
          type="text"
          value={searchTerm}
          onChange={(e) => onChange({ value: e.target.value })}
          onKeyPress={onKeyPress}
        />
      )}
    </button>
  );
};

export default Button;
