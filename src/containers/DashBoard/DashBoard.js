import React, { Component } from 'react';
import styles from './DashBoard.module.css';
import ChatList from './ChatList/ChatList';
import ChatBox from './ChatBox/ChatBox';
import firebase from './../../firebase/firebaseSetUp';
class DashBoard extends Component {
  state = {
    email: null,
    chats: [],
    chatIndex: null,
    chatSelected: false
  };

  componentWillMount = () => {
    firebase.auth().onAuthStateChanged(async user => {
      if (!user) {
        this.props.history.push('/');
      } else {
        await firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', user.email)
          .get()
          .then(data => {
            const newChats = [];
            data.docs.map(_data => {
              console.log(_data.data());
            });
          });
      }
    });
  };

  render() {
    return (
      <div className={styles.DashBoard}>
        <ChatBox />
        <ChatList />
      </div>
    );
  }
}

export default DashBoard;
