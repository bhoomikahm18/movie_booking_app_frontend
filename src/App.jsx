import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Movies from './components/Movies/Movies.jsx';
import Admin from './components/Auth/Admin.jsx';
import Auth from './components/Auth/Auth.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from './store/index.js';
import Booking from './components/Bookings/Booking.jsx';
import UserProfile from './profile/UserProfile.jsx';
import AddMovie from './components/Movies/AddMovie.jsx';
import AdminProfile from './profile/AdminProfile.jsx';

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn)
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      dispatch(userActions.login())
    } else if (localStorage.getItem("AdminID")) {
      dispatch(userActions.login())
    }
  }, [dispatch])

  return (
    <div >
      <Header />
      <section>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<Movies />} />
          {!isUserLoggedIn && !isAdminLoggedIn && <>
            {" "}
            <Route path='/admin' element={<Admin />} />
            <Route path='/auth' element={<Auth />} />
          </>}
          {isUserLoggedIn && !isAdminLoggedIn && <>
            {" "}
            <Route path='/user' element={<UserProfile />} />
            <Route path='/booking/:id' element={<Booking />} />
          </>}
          {isAdminLoggedIn && !isUserLoggedIn && <>
            {" "}
            <Route path='/user-admin' element={<AdminProfile />} />
            <Route path='/add' element={<AddMovie />} />
          </>}
        </Routes>
      </section>
    </div>
  );
}

export default App;
