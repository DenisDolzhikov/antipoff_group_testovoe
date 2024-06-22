import Header from '../../components/header/Header';
import LogoutButton from '../../components/logoutButton/LogoutButton';
import UsersList from '../../components/usersList/UsersList';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {

  
  return (
    <div>
      <Header />
      <UsersList />
    </div>
  )
};

export default HomePage;