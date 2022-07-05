import { useHistory, useParams } from 'react-router-dom';
import { useThemeContext } from 'context/theme/ThemeContext';
import useFetch from 'hooks/useFetch';
import AlbumSlider from 'components/AlbumSlider';
import { useState } from 'react';
import ConfirmationModal from 'components/ConfirmationModal';
import Footer from 'components/Footer/Footer';
import ToggleThemeButton from 'components/ToggleThemeButton';
import HomeButton from 'components/HomeButton';
import styles from './SelectAlbum.module.scss';

const SelectAlbum = () => {
  const { album } = useParams();
  const { theme } = useThemeContext();
  const [modalAlbum, setModalAlbum] = useState();

  const history = useHistory();
  const { data, isLoading, error } = useFetch(`search/${album}`);

  const handleAlbumClicked = (selectedAlbum) => {
    setModalAlbum(selectedAlbum);
  };

  const handelOnModalCancelClick = () => {
    setModalAlbum(null);
  };

  const handelOnModalConfirmClick = () => {
    history.push(`/album/${modalAlbum.id}`);
  };

  return (
    <div
      className={styles.page}
      style={{ backgroundColor: theme.backgroundColor }}>
      <HomeButton />
      <ToggleThemeButton />
      {modalAlbum && (
        <ConfirmationModal
          album={modalAlbum}
          onCancel={handelOnModalCancelClick}
          onConfirm={handelOnModalConfirmClick}
        />
      )}
      <div className={styles.colorBanner} />
      <p className={styles.albumTitle}>{album}</p>
      <div className={styles.albumSliderWrapper}>
        {data && (
          <>
            <AlbumSlider
              albumList={data.albums}
              onAlbumClicked={handleAlbumClicked}
            />
            {!data.albums.length && (
              <div
                className={styles.pageStates}
                style={{ color: theme.textColor }}>
                {!isLoading && <p>No albums found.</p>}
              </div>
            )}
          </>
        )}
      </div>
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

export default SelectAlbum;
