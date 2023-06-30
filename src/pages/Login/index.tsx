import { AUTH_TOKEN } from '@constants/app.const';
import localServ from '@services/localServ';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    localServ.setItem(AUTH_TOKEN, JSON.stringify({ email, password }));
    navigate('/', { replace: true });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <input placeholder='username' name='email' />
      <input placeholder='password' type='password' name='password' />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
