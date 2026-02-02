import { useState, useEffect } from 'react';
import './app.css'
import {useDispatch} from 'react-redux'
import authService  from './services/authServices.js'
import dummyUsers from './data/dummyUser.js'
import {login ,logout} from './store/authSlice.js'
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  const userKey = "users";
  if (!localStorage.getItem(userKey)) {
  localStorage.setItem(userKey, JSON.stringify(dummyUsers));
}
console.log(JSON.parse(localStorage.getItem("users")));

const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
  const user = authService.getCurrentUser();

  try {
    if (user) {
      dispatch(login({ userData: user }));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    console.error("Auth error:", error);
  } finally {
    setLoading(false);
  }
}, [dispatch]);
  

  return !loading ? (
    <div className=''>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
  ) : null
}

export default App

