import React from "react";
// import './App.css';
import MessageList from "./MessageList";
import Title from "./Title";
import SendMessageForm from "./SendMessageForm";

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
];

componentDidMount() {
  const chatManager = new Chatkit.ChatManager({
    instanceLocator: instanceLocator,
    userId: userId,
    tokenProvider: new Chatkit.TokenProvider({
      url: testToken
    })
 })  

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: DUMMY_DATA
    };
  }
  render() {
    return (
      <div className="app">
        <Title />
        <MessageList messages={this.state.messages} />
        <SendMessageForm />
      </div>
    );
  }
}

export default App;
