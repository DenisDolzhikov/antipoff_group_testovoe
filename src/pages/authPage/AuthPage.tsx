import styles from './AuthPage.module.scss';
import AuthForm from '../../components/authForm/AuthForm';

const AuthPage: React.FC = () => {
  return (
    <div className={styles.authPage}>
      <AuthForm />
    </div>
  )
}

export default AuthPage;