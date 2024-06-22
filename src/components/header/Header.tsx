import styles from './Header.module.scss';
import LogoutButton from '../logoutButton/LogoutButton';
import { useMediaQuery } from 'usehooks-ts';

const Header: React.FC = () => {
  const matches = useMediaQuery('(max-width: 1000px)');

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>Наша команда</h1>
        <p className={styles.headerParagraph}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся {!matches && <br></br>} на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
        <LogoutButton className={styles.button} />
      </div>
    </header>
  );
};

export default Header;