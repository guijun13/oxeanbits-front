import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopLogin from '../components/topLogin';

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
        <div>
          <label>Title:</label>
          <Input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Director:</label>
          <Input type="text" value={director} onChange={handleDirectorChange} />
        </div>
        <Link to="/">
          <Button type="submit">Create movie</Button>
        </Link>
      </form>
    </div>
  );
}
