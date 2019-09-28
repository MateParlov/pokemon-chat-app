import React, { Component } from 'react';
import styles from './ChatList.module.css';
import firebase from './../../../firebase/firebaseSetUp';
class ChatList extends Component {
  handleLogOut = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className={styles.ChatList}>
        <button onClick={this.handleLogOut}>Log Out</button>
        ChatList
      </div>
    );
  }
}

export default ChatList;
