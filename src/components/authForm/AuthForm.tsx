import styles from './AuthForm.module.scss';
import { MouseEventHandler, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCredentials } from '../../store/slices/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


interface FormValues {
  first_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const AuthForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isVisiblePassword, setisVisiblePassword] = useState(false);
  const [isVisibleConfirmPassword, setisVisibleConfirmPassword] = useState(false);
  const auth = useAuth();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
      const user = {
        user: {
          first_name: data.first_name,
          email: data.email
        }
      };

      dispatch(setCredentials(user));
      navigate('/');
  };

  const handleTogglePassword: MouseEventHandler = (e) => {
    e.preventDefault();
    setisVisiblePassword(!isVisiblePassword);
  };

  const handleToggleConfirmPassword: MouseEventHandler = (e) => {
    e.preventDefault();
    setisVisibleConfirmPassword(!isVisibleConfirmPassword);
  }

  return auth.user ? (
    <Navigate to='/' replace={true} />
  ) :  (
    <div className={styles.authFormContainer}>
      <h1 className={styles.authFormTitle}>Регистрация</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p>Имя</p>
          <label>
            <input 
              className={errors?.first_name ? styles['error'] : ''}
              {...register('first_name', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 5,
                  message: 'Имя должно содержать не менее 5 символов'
                }
              })}
              placeholder='Ваше имя'
            />
          </label>
          <div className={styles.errorMessage}>{errors?.first_name && <p>{errors.first_name.message}</p>}</div>
        </div>
        <div>
          <p>Электронная почта</p>
          <label>
            <input 
              className={errors?.email ? styles['error'] : ''}
              type='email'
              placeholder='example@mail.ru'
              {...register('email', {
                required: 'Поле обязательно к заполнению',
                pattern: /^\S+@\S+$/i,
              })}
            />
          </label>
          <div className={styles.errorMessage}>{errors?.email && <p>{errors.email.message}</p>}</div>
        </div>

        <div>
          <p>Пароль</p>
          <label className={styles.passwordLabel}>
            <input 
              className={errors?.password ? styles['error'] : ''}
              type={!isVisiblePassword ? 'password' : 'text'}
              placeholder='******'
              {...register('password', {
                required: 'Поле обязательно к заполнению',
                minLength: {
                  value: 6,
                  message: 'Длинна пароля не менее 6 символов'
                },
                maxLength: {
                  value: 20,
                  message: 'Длинна пароля не более 20 символов'
                },
                // pattern: {
                //   value: /^[a-zA-Z0-9]+$/i,  // Да, регулярка не совсем работает как было задуманно :(
                //   message: 'Пароль должен содержать буквы и цифры'
                // }
              })} 
            />
            
            <button onClick={handleTogglePassword} className={styles.toggleShowPassword}>
              {isVisiblePassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </label>
          <div className={styles.errorMessage}>{errors?.password && <p>{errors.password.message}</p>}</div>
        </div>

        <div>
          <p>Подтвердите Пароль</p>
          <label className={styles.passwordLabel}>
            <input
              // type="password" 
              className={errors?.confirm_password ? styles['error'] : ''}
              type={!isVisibleConfirmPassword ? 'password' : 'text'}
              placeholder='******'
              {...register('confirm_password', {
                required: 'Подтвердите пароль',
                validate: (val: string) => {
                  if (watch('password') != val) {
                    return 'Ваши пароли не совпадают'
                  }
                }
              })}
            />
            <button onClick={handleToggleConfirmPassword} className={styles.toggleShowPassword}>
              {isVisibleConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </label>
          
          <div className={styles.errorMessage}>{errors?.confirm_password && <p>{errors.confirm_password.message}</p>}</div>
        </div>

        <input type="submit" disabled={!isValid} value="Зарегистрироваться" className={styles.submitButton} />
      </form>
    </div>
  )
}

export default AuthForm;