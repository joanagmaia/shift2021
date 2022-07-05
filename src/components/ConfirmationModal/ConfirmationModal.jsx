import { useThemeContext } from 'context/theme/ThemeContext';
import RoundButton from 'components/RoundButton';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import AlbumCover from 'components/AlbumCover/AlbumCover';
import styles from './ConfirmationModal.module.scss';

const ConfirmationModal = ({ album, onConfirm, onCancel }) => {
  const { theme } = useThemeContext();

  const albumInfoTextColor =
    theme.name === 'dark' ? theme.whiteTextColor : theme.textColor;

  return (
    <div className={styles.modalWrapper}>
      <div
        className={styles.modal}
        style={{
          backgroundColor: theme.modalColor,
          boxShadow: theme.primaryShadow,
        }}>
        <div className={styles.albumInfo}>
          <p style={{ color: albumInfoTextColor }}>{album.name}</p>
          <p style={{ color: albumInfoTextColor }}>
            {album.artists.join(', ')}
          </p>
        </div>

        <AlbumCover id={album.id} img_url={album.img_url} />
        <p
          className={styles.helperText}
          style={{ color: theme.secondaryTextColor }}>
          Confirm if this is the right album.
        </p>
        <div className={styles.buttonWrapper}>
          <RoundButton
            icon={faCheck}
            iconColor={theme.modalColor}
            onClick={onConfirm}
          />
          <RoundButton
            secondary
            icon={faTimes}
            iconColor={theme.modalColor}
            onClick={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
