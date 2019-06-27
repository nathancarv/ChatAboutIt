import React, { Component } from 'react'

 class SendMessageForm extends Component {
    render() {
        return (
            <form
            className="send-message-form">
            <input
              onChange={this.handleChange}
              value={this.state.message}
              placeholder="Type your message and hit ENTER"
              type="text" />
          </form>
        )
    }
}
export default SendMessageForm;