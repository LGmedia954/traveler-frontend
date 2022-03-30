import React from 'react';
import Login from './Login.js'
import Signup from './Signup.js'
import { Link } from 'react-router-dom'


const Home = ({}) => (
  <div>
    <h4>Welcome! Please <Link to="/signup">Sign Up</Link> or 
    <Link to="/login">Log In</Link></h4>
  </div>
);

export default Home;