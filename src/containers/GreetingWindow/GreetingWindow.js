import React from 'react';
import styles from './GretingWindow.module.css';
import { Link } from 'react-router-dom';
const GreetingWindow = props => {
  return (
    <div className={styles.GreetingWindow}>
      <nav>
        <Link to="/signin">Sign In</Link>
        <Link to="/login">Log In</Link>
      </nav>
      <div className={styles.Poke1}></div>
      <div className={styles.Poke2}></div>
      <h1>Wellcome!!</h1>
    </div>
  );
};

export default GreetingWindow;
