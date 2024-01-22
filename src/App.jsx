import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Movies from './components/Movies/Movies.jsx';
import Admin from './components/Admin/Admin.jsx';
import Auth from './components/Auth/Auth.jsx';

function App() {
  return (
    <div >
      <Header />
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
