import styles from './AuthForm.module.scss';
import { Resolver, useForm } from 'react-hook-form';

interface FormValues {
  first_name: string;
  email: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const {
    register,
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

        <input type="submit" disabled={!isValid} value="Зарегистрироваться" />
      </form>
    </div>
  )
}

export default AuthForm;