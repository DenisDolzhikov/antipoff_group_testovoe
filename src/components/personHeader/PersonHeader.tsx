import LogoutButton from '../logoutButton/LogoutButton';
import styles from './PersonHeader.module.scss';

interface Props {
  userName?: string;
  rang?: string;
  avatar?: string
}

const PersonHeader: React.FC<Props> = ({ userName, rang, avatar }) => {

  return (
    <div className={styles.personHeader}>
      <div className={styles.personHeaderWrapper}> 
        <img src={avatar} alt="avatar" className={styles.personHeaderAvatar} />
        <div className={styles.personDescription}>
          <h1 className={styles.personHeaderTitle}>{userName}</h1>
          <p className={styles.personHeaderRang}>{rang}</p>
        </div>
        <LogoutButton className={styles.logoutButton} />
      </div>
    </div>
  )
}

export default PersonHeader;