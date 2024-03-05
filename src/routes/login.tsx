import { Button } from '@progress/kendo-react-buttons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/formInput';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="m-10">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput type="email" labelText="Email" value={email} onChange={handleEmailChange} />
        <FormInput
          type="password"
          labelText="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Link to="/movies">
          <Button type="submit">Login</Button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
