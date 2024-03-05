import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';
import MoviesList from './routes/moviesList';
import Signup from './routes/signup';
import { ProtectedRoute } from './components/protectedRoute';
import Login from './routes/login';
import NewMovie from './routes/newMovie';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <MoviesList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies/new"
          element={
            <ProtectedRoute>
              <NewMovie />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute>
              <Signup />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
