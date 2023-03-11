import { Route, Routes } from 'react-router';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/account' element={<Account />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  );
}

export default App;
