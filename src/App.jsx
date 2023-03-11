import { Route, Routes } from 'react-router';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path='/account'
        element={
          <PrivateRoute>
            <Account />
          </PrivateRoute>
        }
      />
      <Route path='/Login' element={<Login />} />
    </Routes>
  );
}

export default App;
