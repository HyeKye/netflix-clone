import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });
    
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
