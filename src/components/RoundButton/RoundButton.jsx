import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useThemeContext } from 'context/theme/ThemeContext';
import globalStyles from 'styles/global.scss';
import styles from './RoundButton.module.scss';

const RoundButton = ({ icon, iconColor, secondary, onClick }) => {
  const { theme } = useThemeContext();

  const backgroundColor = secondary ? theme.secondaryColor : '';

  const backgroundImage = !secondary ? theme.primaryColor1 : '';

  return (
    <button
      className={`${styles.roundButton} ${globalStyles.button}`}
      style={{
        backgroundImage,
        backgroundColor,
        color: theme.textColor,
        boxShadow: theme.primaryShadow,
      }}
      type="button"
      onClick={onClick}>
      <FontAwesomeIcon color={iconColor} icon={icon} size="2x" />
    </button>
  );
};

export default RoundButton;
