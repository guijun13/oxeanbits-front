import { Button } from '@progress/kendo-react-buttons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopLogin from '../components/topLogin';
import FormInput from '../components/formInput';

export default function Movies() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDirectorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirector(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="m-10">
      <TopLogin />
      <h2>New movie</h2>
      <form onSubmit={handleSubmit}>
        <FormInput type="text" labelText="Title" value={title} onChange={handleTitleChange} />
        <FormInput
          type="text"
          labelText="Director"
          value={director}
          onChange={handleDirectorChange}
        />
        <Link to="/">
          <Button type="submit">Create movie</Button>
        </Link>
      </form>
    </div>
  );
}
