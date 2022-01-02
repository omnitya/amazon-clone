
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51KDASdSIwOXRb8jEUREPXpumFAHEu5pqd1IzSlQHegSsMLXjD6WsrggTl1tu5OWjRO7MrV6n5GVOmZoVjewYVgKr00paqQM8r1');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      //console.log('The User Is - ', authUser);

      if(authUser){
        //user logs in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM
    <Router>
    <div className="App">
      <Routes>

      <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/orders" element={<><Header/><Orders/></>}/>
      <Route exact path="/payment" element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
      { /* Default Route should always at bottom*/ }
      <Route exact path="/" element={<><Header/><Home/></>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
