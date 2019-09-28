import React, { Component } from 'react';
import styles from './ChatBox.module.css';
class ChatBox extends Component {
  render() {
    return (
      <div className={styles.ChatBox}>
        <div>ChatWindow</div>
        <div>ChatInput</div>
      </div>
    );
  }
}

export default ChatBox;
