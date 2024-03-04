import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { useEffect, useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }, []);

  return (
    <div className="m-10">
      <div className="flex my-4">
        <Button className="mr-10">Create user</Button>
        <Button>Logout</Button>
      </div>
      <div>
        <h1 className="text-xl font-bold">Movies</h1>
        <div>
          <Button>Add new</Button>
        </div>
        <Grid
          style={{
            height: '400px',
          }}
          data={movies}
        >
          <Column field="id" title="ID" width="40px" />
          <Column field="title" title="Title" width="250px" />
          <Column field="director" title="Director" width="250px" />
          <Column field="average_score" title="Rate" width="250px" />
        </Grid>
      </div>
    </div>
  );
}
