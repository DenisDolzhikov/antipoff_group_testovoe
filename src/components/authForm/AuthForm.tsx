import styles from './AuthForm.module.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff, eye } from 'react-icons-kit/feather';

interface FormValues {
  first_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const AuthForm: React.FC = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));

    reset();
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
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
              type="password" 
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
            <span onClick={handleToggle}>
              <Icon icon={icon} size={25} />
            </span>
            <div>{errors?.password && <p>{errors.password.message}</p>}</div>
          </label>
        </div>

        <label>
          Подтвердите Пароль
          <input 
            type="password" 
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
        <div>{errors?.confirm_password && <p>{errors.confirm_password.message}</p>}</div>

        <input type="submit" disabled={!isValid} value="Зарегистрироваться" />
      </form>
    </div>
  )
}

export default AuthForm;