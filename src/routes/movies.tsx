import '@progress/kendo-theme-default/dist/all.css';
import {
  Grid,
  GridColumn as Column,
  GridItemChangeEvent,
  GridRowClickEvent,
} from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TopLogin from '../components/topLogin';
import { useAuth } from '../hooks/useAuth';

interface Movies {
  id: number;
  title: string;
  director: string;
  average_score: number;
  your_score?: number;
}

export default function Movies() {
  const [movies, setMovies] = useState<Array<Movies>>([]);
  const [editID, setEditID] = useState<number | null>(null);

  const rowClick = (event: GridRowClickEvent) => {
    setEditID(event.dataItem.id);
  };

  const itemChange = (event: GridItemChangeEvent) => {
    const inEditID = event.dataItem.id;
    const field = event.field || '';
    const newData = movies.map((item) =>
      item.id === inEditID ? { ...item, [field]: event.value } : item
    );
    setMovies(newData);
  };

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
      <TopLogin handleLogout={handleLogout} />
      <div>
        <h1 className="text-xl font-bold">Movies</h1>
        <div>
          <Link to="/movies/new">
            <Button>Add new</Button>
          </Link>
        </div>
        <Grid
          style={{
            height: '400px',
          }}
          data={movies.map((item) => ({
            ...item,
            inEdit: item.id === editID,
          }))}
          editField="inEdit"
          onRowClick={rowClick}
          onItemChange={itemChange}
        >
          <Column field="id" title="ID" width="40px" editable={false} />
          <Column field="title" title="Title" width="250px" editable={false} />
          <Column field="director" title="Director" width="250px" editable={false} />
          <Column field="average_score" title="Average score" width="250px" editable={false} />
          <Column field="your_score" title="Your score" width="250px" editor="numeric" />
        </Grid>
      </div>
    </div>
  );
}
