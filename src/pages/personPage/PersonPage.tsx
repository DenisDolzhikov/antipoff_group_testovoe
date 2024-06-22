import styles from './PersonPage.module.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

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
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);
  
  console.log(user);
  
  return (
    <div>PersonPage
      <Breadcrumbs />
      {user && (
        <>
          <h1>{user.data.first_name}</h1>
          <h1>{user.data.last_name}</h1>

          <img src={user.data.avatar} alt="" />
        </>
      )}
    </div>
  )
};

export default PersonPage;