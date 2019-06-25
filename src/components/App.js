import React from "react";
// import './App.css';
import MessageList from "./MessageList";
import Title from "./Title";
import SendMessageForm from "./SendMessageForm";

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/9cb2544c-e898-43a4-9679-26295cd145ca/token"
const instanceLocator = "v1:us1:9cb2544c-e898-43a4-9679-26295cd145ca"
const roomId = 24140849
const username = 'NateTheDeveloper'


// const DUMMY_DATA = [
//   {
//     senderId: "perborgen",
//     text: "who'll win?"
//   },
//   {
//     senderId: "janedoe",
//     text: "who'll win?"
//   }
// ];

componentDidMount() {
  const chatManager = new Chatkit.ChatManager({
    instanceLocator: instanceLocator,
    userId: userId,
    tokenProvider: new Chatkit.TokenProvider({
      url: testToken
    })
    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onNewMessage: message => {
          this.setState({
            messages: [...this.state.messages, message]
          })
        }
      }
    })
}
}
}

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
