import { Button } from '@progress/kendo-react-buttons';
import React, { useState } from 'react';
import FormInput from '../components/formInput';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      if (res.status === 200) {
        console.log('Login successful');
        login({ email, password });
      } else {
        console.error('Login failed');
      }
    });
    return true;
  };

  return (
    <div className="m-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          labelText="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <FormInput
          required
          type="password"
          labelText="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
