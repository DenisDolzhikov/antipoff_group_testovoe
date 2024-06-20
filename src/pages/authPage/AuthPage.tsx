import styles from './AuthPage.module.scss';
import AuthForm from '../../components/authForm/AuthForm';

const AuthPage: React.FC = () => {
  return (
    <div>
      <h1>AuthPage</h1>

      <AuthForm />
    </div>
  )
}

export default AuthPage;