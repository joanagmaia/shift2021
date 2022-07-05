import Button from 'components/Button';
import { useThemeContext } from 'context/theme/ThemeContext';
import { faCloudUploadAlt, faICursor } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from 'components/Footer';
import ToggleThemeButton from 'components/ToggleThemeButton';
import HomeButton from 'components/HomeButton';
import styles from './Main.module.scss';

const Main = () => {
  const { theme } = useThemeContext();
  const history = useHistory();

  const [helperTextUpload, setHelperTextUpload] = useState(false);
  const [helperTextSearch, setHelperTextSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleOnSearchClick = () => {
    setIsSearching(true);
  };

  const handleOnSearchChange = ({ value }) => {
    setSearchTerm(value);
  };

  const handleOnSearchKeyPress = (event) => {
    if (event.code === 'Enter') {
      history.push(`/${searchTerm}`);
    }
  };

  return (
    <div
      className={styles.page}
      style={{ backgroundColor: theme.backgroundColor }}>
      <HomeButton />
      <ToggleThemeButton />
      <div className={styles.helperWrapper}>
        <p
          className={helperTextUpload ? styles.fadesIn : styles.fadesOut}
          style={{ color: theme.textColor }}>
          Use this box to upload an image and find new albums with the same
          color pallet. 🚧
        </p>
        <p
          className={helperTextSearch ? styles.fadesIn : styles.fadesOut}
          style={{ color: theme.textColor }}>
          Use this box to search for an album and find new albums with the same
          color pallet.
        </p>
      </div>
      <div className={styles.buttons}>
        <Button
          secondary
          icon={faICursor}
          isTransformer={isSearching}
          searchTerm={searchTerm}
          onChange={handleOnSearchChange}
          onClick={handleOnSearchClick}
          onHover={() => setHelperTextSearch(!helperTextSearch)}
          onKeyPress={handleOnSearchKeyPress}
        />
        <Button
          icon={faCloudUploadAlt}
          onHover={() => setHelperTextUpload(!helperTextUpload)}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
