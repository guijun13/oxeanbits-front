import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn as Column, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { useEffect, useState } from 'react';
import TopLogin from '../components/topLogin';
import { useAuth } from '../hooks/useAuth';
import { CompositeFilterDescriptor, filterBy } from '@progress/kendo-data-query';

interface Movie {
  title: string;
  release_date: string;
  original_language: string;
  vote_average: number;
}

const initialFilter: CompositeFilterDescriptor = {
  logic: 'and',
  filters: [{ field: 'Title', operator: 'contains', value: '' }],
};

export default function TopMovies() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [filter, setFilter] = useState(initialFilter);

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_APP_MOVIE_API}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(
          data.results.map((movie: Movie) => ({
            title: movie.title,
            release_date: movie.release_date.split('-').reverse().join('/'),
            original_language: movie.original_language.toUpperCase(),
            average_score: movie.vote_average,
          }))
        );
      });
  }, []);

  return (
    <div className="m-10">
      <TopLogin handleLogout={handleLogout} />
      <div>
        <h1 className="text-2xl font-bold">Top Movies</h1>
        <Grid
          style={{
            height: '400px',
          }}
          data={filterBy(movies, filter)}
          filterable={true}
          filter={filter}
          onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
        >
          <Column field="title" title="Title" filter="text" />
          <Column field="release_date" title="Release Date" filter="date" />
          <Column field="original_language" title="Language" filter="text" />
          <Column field="average_score" title="AS" filter="numeric" />
        </Grid>
      </div>
    </div>
  );
}
