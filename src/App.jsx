import { Route, Routes } from 'react-router';
import Account from './pages/Account';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/account' element={<Account />} />
    </Routes>
  );
}

export default App;
