import React, {Component} from "react";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState({
      [key]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              value={this.state.username}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              value={this.state.password}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}