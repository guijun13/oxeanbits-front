import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';
import Signup from './routes/signup';
import { ProtectedRoute } from './components/protectedRoute';
import Login from './routes/login';
import NewMovie from './routes/newMovie';
import Movies from './routes/movies';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
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
