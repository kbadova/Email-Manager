import React from 'react';
import './styles.css';

class Login extends React.Component {
  state = {email: null, name: null};

  saveEmailInLocalStorage = () => {
    localStorage.setItem('email', this.state.email);
  };

  saveEmail = event => this.setState({email: event.target.value});
  saveName = event => this.setState({name: event.target.value});

  render() {
    return (
      <div>
        <input onChange={this.saveEmail} />
        <input onChange={this.saveName} />
        <button onClick={this.saveEmailInLocalStorage} />
      </div>
    );
  }
}

export default Login;
