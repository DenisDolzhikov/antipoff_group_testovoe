// import styles from './AuthForm.module.scss';
import { MouseEventHandler, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setCredentials } from '../../store/slices/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Navigate, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/api/authApi';
import type { LoginRequest } from '../../store/api/authApi';
import type { User } from '../../store/api/authApi';
import { useAppSelector } from '../../hooks/useAppSelector';
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
  const [formState, setFormState] = useState<LoginRequest>({
    username: '',
    password: '',
  })
  const [login, { isLoading }] = useLoginMutation();
  const auth = useAuth();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // alert(JSON.stringify(data));

    // // dispatch(setCredentials(data));

    // reset();

    // // navigate('/');
      const user = {
        user: {
          first_name: data.first_name,
          email: data.email
        }
      };
      console.log(user);

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
    <div>
      <h1>Регистрация</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Имя
          <input 
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
        <div>{errors?.first_name && <p>{errors.first_name.message}</p>}</div>

        <label>
          Электронная почта
          <input 
            type='email'
            placeholder='example@mail.ru'
            {...register('email', {
              required: 'Поле обязательно к заполнению',
              pattern: /^\S+@\S+$/i,
            })}
          />
        </label>
        <div>{errors?.email && <p>{errors.email.message}</p>}</div>

        <div>
          <label>
            Пароль
            <input 
              // type="password" 
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
            <button onClick={handleTogglePassword}>
              {isVisiblePassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
            <div>{errors?.password && <p>{errors.password.message}</p>}</div>
          </label>
        </div>

        <div>
          <label>
            Подтвердите Пароль
            <input 
              // type="password" 
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
          </label>
          <button onClick={handleToggleConfirmPassword}>
            {isVisibleConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <div>{errors?.confirm_password && <p>{errors.confirm_password.message}</p>}</div>
        </div>

        <input type="submit" disabled={!isValid} value="Зарегистрироваться" />
      </form>
    </div>
  )
}

export default AuthForm;