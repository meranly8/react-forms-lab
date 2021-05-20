import React, {Component} from "react";

export default class TwitterMessage extends Component {
  state = {
    message: ""
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    const charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={this.handleChange} 
          value={this.state.message}/> {charsLeft}/{this.props.maxChars}
      </div>
    );
  }
}