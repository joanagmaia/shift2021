import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import styles from './HomeButton.module.scss';

const HomeButton = () => {
  const history = useHistory();

  const pushToHome = () => {
    history.push('/');
  };

  return (
    <button className={styles.button} type="button" onClick={pushToHome}>
      <FontAwesomeIcon className={styles.icon} icon={faHome} size="lg" />
    </button>
  );
};

export default HomeButton;
