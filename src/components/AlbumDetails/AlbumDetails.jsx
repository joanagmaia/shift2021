import React, { useRef } from 'react';
import AlbumCover from 'components/AlbumCover';
import { useThemeContext } from 'context/theme/ThemeContext';
import { exportComponentAsPNG } from 'react-component-export-image';
import { faTimes, faPlay, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import globalStyles from 'styles/global.scss';
import styles from './AlbumDetails.module.scss';

const AlbumDetails = ({ album, onCloseClick }) => {
  const { theme } = useThemeContext();
  const sharedComponent = useRef();

  const artists = album.artists && album.artists.join(', ');
  const { artist } = album;

  const handleOnAlbumClick = (id) => {
    window.open(`https://open.spotify.com/album/${id}`, '_blank');
  };

  const handleOnShareClick = () => {
    window.scroll(0, 0);
    exportComponentAsPNG(sharedComponent);
  };

  return (
    <div
      ref={sharedComponent}
      className={styles.albumDetailsWrapper}
      style={{
        backgroundColor: theme.modalColor,
        boxShadow: theme.primaryShadow,
      }}>
      <div className={styles.header}>
        <div className={styles.albumInfo}>
          <AlbumCover
            hasShadow={false}
            iconOverlay={faPlay}
            id={album.id}
            img_url={album.img_url}
            onClick={() => handleOnAlbumClick(album.id)}
          />
          <div className={styles.text} style={{ color: theme.textColor }}>
            <div>
              <p className={styles.boldText}>NAME</p>
              <p>{album.album_name}</p>
            </div>
            <div>
              <p className={styles.boldText}>ARTIST</p>
              <p>{artist || artists}</p>
            </div>
            <div>
              <p className={styles.boldText}>RELEASED</p>
              <p>{album.release_date}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${globalStyles.button}`}
            style={{ color: theme.textColor }}
            type="button"
            onClick={handleOnShareClick}>
            <FontAwesomeIcon icon={faShare} size="2x" />
          </button>
          <button
            className={`${styles.button} ${globalStyles.button}`}
            style={{ color: theme.textColor }}
            type="button"
            onClick={onCloseClick}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
      </div>
      <div className={styles.textBlock}>
        <div
          className={styles.color}
          style={{
            backgroundColor: `rgb(${album.color.r}, ${album.color.g}, ${album.color.b})`,
          }}
        />
        <div style={{ color: theme.textColor }}>
          <p className={styles.boldText}>RGB</p>
          <p>{`${album.color.r}, ${album.color.g}, ${album.color.b}`}</p>
        </div>
        <div style={{ color: theme.textColor }}>
          <p className={styles.boldText}>TRACKS</p>
          {album.track_list.map((track) => (
            <p>{track}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetails;
