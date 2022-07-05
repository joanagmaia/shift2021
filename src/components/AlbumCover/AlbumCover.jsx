import { useThemeContext } from 'context/theme/ThemeContext';
import RoundButton from 'components/RoundButton';
import styles from './AlbumCover.module.scss';

const AlbumCover = ({
  id,
  img_url,
  onClick,
  iconOverlay,
  hasShadow = true,
  backgroundColor = '',
  size = 'medium',
}) => {
  const { theme } = useThemeContext();

  const colorBoxShadow = theme.name === 'light' ? theme.secondaryShadow : '';
  const primaryBoxShadow =
    theme.name === 'dark' && hasShadow ? theme.primaryShadow : '';
  const secondaryBoxShadow =
    theme.name === 'light' && hasShadow ? theme.secondaryShadow : '';

  return (
    <div className={styles.imageWrapper}>
      {!!backgroundColor.length && (
        <div
          className={styles.color}
          style={{ backgroundColor, boxShadow: colorBoxShadow }}
        />
      )}
      <div className={styles.overlayWrapper}>
        {iconOverlay && (
          <div className={styles.overlay}>
            <RoundButton
              secondary
              icon={iconOverlay}
              iconColor={theme.modalColor}
              onClick={onClick}
            />
          </div>
        )}
        <img
          alt={id}
          className={`${styles.image} ${styles[size]}`}
          src={img_url}
          style={{ boxShadow: primaryBoxShadow || secondaryBoxShadow }}
        />
      </div>
    </div>
  );
};

export default AlbumCover;
