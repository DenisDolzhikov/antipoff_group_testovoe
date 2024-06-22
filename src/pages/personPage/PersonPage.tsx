import styles from './PersonPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import PersonHeader from '../../components/personHeader/PersonHeader';
import PhoneSVG from '../../assets/mobile.svg?react';
import EmailSVG from '../../assets/email.svg?react';

interface UserData {
  first_name: string;
  last_name: string;
  avatar: string;
}

interface User {
  data: UserData;
}

const PersonPage: React.FC = () => {
  const {id} = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);
  
  console.log(user);
  
  return (
    <div>
      {user && (
        <>
          <PersonHeader 
            userName={`${user.data.first_name} ${user.data.last_name}`}
            rang='Партнер'
            avatar={user.data.avatar} 
          />
          
          <div className={styles.personPage}>
            
            <div className={styles.personPageWrapper}>

              <Breadcrumbs className={styles.breadcrumbs} />

              <p className={styles.personDescription}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione earum 
                voluptate dolore quasi architecto sapiente minus, veniam reiciendis, magni facilis deserunt 
                eligendi quam culpa deleniti nemo illum. Officia accusamus fugit nostrum molestias magni cum 
                rem voluptates, soluta sapiente quaerat facilis, repellendus quam, delectus earum quia corporis 
                minima vero? Aut.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione earum 
                voluptate dolore quasi architecto sapiente minus, veniam reiciendis, magni facilis deserunt 
                eligendi quam culpa deleniti nemo illum. Officia accusamus fugit nostrum molestias magni cum 
                rem voluptates, soluta sapiente quaerat facilis, repellendus quam, delectus earum quia corporis 
                minima vero? Aut.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione earum 
                voluptate dolore quasi architecto sapiente minus, veniam reiciendis, magni facilis deserunt 
                eligendi quam culpa deleniti nemo illum. Officia accusamus fugit nostrum molestias magni cum 
                rem voluptates, soluta sapiente quaerat facilis, repellendus quam, delectus earum quia corporis 
                minima vero? Aut.
              </p>

              <div className={styles.personLinks}>
                <a href="tel:+79543334455" className={styles.personContactLink}>
                  <PhoneSVG className={styles.personContactIcon} />
                  +7(954) 333-44-55
                </a>
                <a href="mailto:sykfafkar@gmail.com" className={styles.personContactLink}>
                  <EmailSVG className={styles.personContactIcon} />
                  sykfafkar@gmail.com
                </a>
              </div>

            </div>
          </div>
        </>
      )}
    </div>
  )
};

export default PersonPage;