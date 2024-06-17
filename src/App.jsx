import React , {useEffect, useState} from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Cart from "./Cart";
import Login from "./Login";
import Signup from "./Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {

  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  //   // will only run once when the app component loads...

  //   auth.onAuthStateChanged((authUser) => {
  //     console.log("THE USER IS >>> ", authUser);

  //     if (authUser) {
  //       // the user just logged in / the user was logged in

  //       dispatch({
  //         type: "SET_USER",
  //         user: authUser,
  //       });
  //     } else {
  //       // the user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);


//to keep a check who is signed in/making a listner
const [{ }, dispatch] = useStateValue();
//This State will keep Track of what is entered in the searchField
const [searchField, setSearchField] = useState('');

//updating the State from Header Component which further updating itself from HeaderSearchBar.js
let inputHandler = (event) => {
  setSearchField(event.target.value);
};
useEffect(() => {
  //will run only once when the app component loads
  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      //the user logged in/the user was logged in
      {
        /*when someone will logg in it will shoot
        the user ibto the data layer and vice versa if we 
        logged out*/
      }
      dispatch({
        type: 'SET_USER',
        user: authUser,
      });
    } else {
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }
  });
}, []);




return (
  <Router>
  <div className="app">
  <Routes>
  <Route exact path='/' element={<HeaderWithHome />} />
  <Route path='/Cart' element={<HeaderWithCart />} />
  {/* <Route path='/payment' element={<HeaderWithPayment />} /> */}
  
  
  <Route path='/login' element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  {/*<Route path='/orders' element={<Orders />} /> */}
  </Routes>
  </div>
  </Router>
  );
}
function HeaderWithHome() {
  return (
  <>
  <Header />
  <Home />
  </>
  );
  }
  
  function HeaderWithCart() {
  return (
  <>
  <Header />
  <Cart />
  </>
  );
  }
  // function HeaderWithPayment() {
  // return (
  // <>
  // <Header />
  // <Elements stripe={promise}>
  // <Payment />
  // </Elements>
  // </>
  // );
  // }

export default App;