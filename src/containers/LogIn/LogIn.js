import React, { Component } from 'react';
import styles from './LogIn.module.css';
import firebase from './../../firebase/firebaseSetUp';
class LogIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/dashboard');
      });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.LogIn}>
        <h1 className={styles.MainTitle}>LOG IN</h1>
        <div className={styles.LogInBox}>
          <form className={styles.LogInForm} onSubmit={this.handleFormSubmit}>
            <div className={styles.FormField}>
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
              />
            </div>
            <div className={styles.FormField}>
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <input type="submit" className={styles.submitBtn} />
          </form>
        </div>
      </div>
    );
  }
}

export default LogIn;
