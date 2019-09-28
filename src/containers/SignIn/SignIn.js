import React from 'react';
import styles from './SignIn.module.css';
import firebase from './../../firebase/firebaseSetUp';
class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    pokemon: ''
  };

  handleFormChange = e => {
    const { name, value } = e.target;

    this.setState(() => {
      return { [name]: value };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        authRes => {
          const newUser = {
            email,
            pokemon: 'charmander'
          };

          firebase
            .firestore()
            .collection('users')
            .doc(email)
            .set(newUser)
            .then(
              () => {
                this.props.history.push('/');
              },
              err => {
                console.log(err);
              }
            );
        },
        err => {
          console.log(err);
        }
      );
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div className={styles.SignIn}>
        <div className={styles.FormBox}>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.FormField}>
              <label>Email: </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleFormChange}
              />
            </div>
            <div className={styles.FormField}>
              <label>Password: </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleFormChange}
              />
            </div>
            <div className={styles.FormField}>
              <label>Email: </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleFormChange}
              />
            </div>
            <input className={styles.submitFormBtn} type="submit" />
          </form>
        </div>

        <div className={styles.ChoosePokemonBox}>
          <div className={styles.ProfOak}></div>
        </div>
      </div>
    );
  }
}

export default SignIn;
