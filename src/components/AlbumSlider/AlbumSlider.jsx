import { useState } from 'react';
import { useThemeContext } from 'context/theme/ThemeContext';
import AlbumCover from 'components/AlbumCover';
import styles from './AlbumSlider.module.scss';

const AlbumSlider = ({ albumList, onAlbumClicked }) => {
  const [hoveredAlbumId, setHoveredAlbumId] = useState();
  const { theme } = useThemeContext();

  const getSelectedAlbum = () =>
    hoveredAlbumId && albumList.find((item) => item.id === hoveredAlbumId).name;

  return (
    <>
      <div className={styles.albumTitle}>
        <span
          style={{
            color: theme.secondaryTextColor,
          }}>
          FOUND ALBUMS
        </span>
        <h3
          style={{
            color: theme.textColor,
          }}>
          {hoveredAlbumId && getSelectedAlbum()}
        </h3>
      </div>
      <div className={styles.sliderWrapper}>
        {albumList.map((album) => (
          <button
            key={album.id}
            className={styles.albumOption}
            type="button"
            onClick={() => onAlbumClicked(album)}
            onMouseEnter={() => setHoveredAlbumId(album.id)}
            onMouseLeave={() => setHoveredAlbumId(undefined)}>
            <AlbumCover id={album.id} img_url={album.img_url} size="large" />
          </button>
        ))}
      </div>
    </>
  );
};

export default AlbumSlider;
