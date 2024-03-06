import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import TopLogin from '../components/topLogin';
import FormInput from '../components/formInput';
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { login, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          confirmPassword,
        },
      }),
    }).then((res) => {
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
      }
      if (res.status === 201) {
        console.log('Signup successful');
        login({ email, password });
      } else {
        alert('Signup failed');
      }
    });
    return true;
  };

  return (
    <div className="m-10">
      <TopLogin handleLogout={handleLogout} />
      <div>
        <h1 className="text-xl font-bold">Register</h1>
        <form onSubmit={handleSubmit} className="row example-wrapper" style={{ minHeight: 450 }}>
          <div className="col-12 col-md-6 example-col">
            <FormInput
              required
              type="text"
              labelText="Name"
              value={username}
              onChange={handleUsername}
            />
            <FormInput
              required
              type="email"
              labelText="Email"
              value={email}
              onChange={handleEmail}
            />
            <FormInput
              required
              type="password"
              labelText="Password"
              value={password}
              onChange={handlePassword}
            />
            <FormInput
              required
              type="password"
              labelText="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
}
