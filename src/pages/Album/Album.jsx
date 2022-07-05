import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import AlbumCover from 'components/AlbumCover';
import AlbumDetails from 'components/AlbumDetails/AlbumDetails';
import { useThemeContext } from 'context/theme/ThemeContext';
import ToggleThemeButton from 'components/ToggleThemeButton';
import HomeButton from 'components/HomeButton';
import useFetch from 'hooks/useFetch';
import Footer from 'components/Footer/Footer';
import styles from './Album.module.scss';

const Album = () => {
  const { id } = useParams();
  const { theme } = useThemeContext();

  const [selectedAlbum, setSelectedAlbum] = useState();

  const { data, isLoading, error } = useFetch(`album/${id}`);

  const boxShadow = theme.name === 'light' ? theme.secondaryShadow : '';

  const handleOnAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleCloseClick = () => {
    setSelectedAlbum(null);
  };

  return (
    <div
      className={styles.page}
      style={{ backgroundColor: theme.backgroundColor }}>
      <HomeButton />
      <ToggleThemeButton />
      {data && (
        <div className={styles.content}>
          <div
            className={styles.results}
            style={{
              padding: !selectedAlbum ? '10rem' : '10rem 40rem 10rem 10rem',
            }}>
            <div
              className={styles.colorBanner}
              style={{
                boxShadow,
                backgroundColor: `rgb(${data.color.r}, ${data.color.g}, ${data.color.b})`,
              }}
            />
            <div
              className={styles.selectedAlbum}
              style={{ color: theme.textColor }}>
              <AlbumCover
                color={`rgb(${data.color.r}, ${data.color.g}, ${data.color.b})`}
                iconOverlay={faAlignLeft}
                id={data.id}
                img_url={data.img_url}
                onClick={() => handleOnAlbumClick(data)}
              />
              <div>
                <p>{data.album_name}</p>
                <p>{data.artists.join(', ')}</p>
                <p className={styles.boldText}>RGB</p>
                <p>{`${data.color.r}, ${data.color.g}, ${data.color.b}`}</p>
              </div>
            </div>
            <div className={styles.albumsList}>
              {data.albums_sorted.map((album) => (
                <AlbumCover
                  key={album.id}
                  backgroundColor={`rgb(${album.color.r}, ${album.color.g}, ${album.color.b})`}
                  hasShadow={false}
                  iconOverlay={faAlignLeft}
                  id={album.id}
                  img_url={album.img_url}
                  onClick={() => handleOnAlbumClick(album)}
                />
              ))}
            </div>
          </div>
          {selectedAlbum && (
            <AlbumDetails
              album={selectedAlbum}
              onCloseClick={handleCloseClick}
            />
          )}
        </div>
      )}
      {(isLoading || error) && (
        <div className={styles.pageStates} style={{ color: theme.textColor }}>
          {isLoading && <p>Wait just a second...</p>}
          {error && <p>Ups. Something went wrong...</p>}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Album;
