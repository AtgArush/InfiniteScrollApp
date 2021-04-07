import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

export class Chat extends Component {
  state = {
    messages: [],
  };

  onSend = message => {
    console.log(message);
    this.setState({messages: [...this.state.messages, ...message]}, () => {
      GiftedChat.append(this.state.messages, message);
    });
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default Chat;
