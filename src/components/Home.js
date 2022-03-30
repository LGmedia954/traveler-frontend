import React from 'react';
import Login from './Login.js'
import Signup from './Signup.js'
import { Link } from 'react-router-dom'


const Home = ({}) => (
  <div>
    <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
  </div>
);

export default Home;