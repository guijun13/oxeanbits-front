import { Button } from '@progress/kendo-react-buttons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopLogin from '../components/topLogin';
import FormInput from '../components/formInput';
import { useAuth } from '../hooks/useAuth';

export default function NewMovie() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDirectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirector(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        director,
      }),
    }).then((res) => {
      if (res.status === 201) {
        console.log('Movie created');
        navigate('/movies');
      } else {
        console.error('Movie creation failed');
      }
    });
  };

  return (
    <div className="m-10">
      <TopLogin handleLogout={handleLogout} />
      <h2 className="font-bold text-2xl">New movie</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          labelText="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <FormInput
          required
          type="text"
          labelText="Director"
          value={director}
          onChange={handleDirectorChange}
        />
        <Button type="submit">Create movie</Button>
      </form>
    </div>
  );
}
