import React from 'react';
import './styles.css';

class Login extends React.Component {
  state = {email: null, password: null};

  saveEmailInLocalStorage = () => {
    localStorage.setItem('email', this.state.email);
  };

  saveEmail = event => this.setState({email: event.target.value});
  savePassword = event => this.setState({password: event.target.value});

  
  render() {
    console.log(this.state);
    return (
      <div className="login-page">
        <h3>Вход в системата</h3>
        <input placeholder="Въведете имейл" className="input-field" onChange={this.saveEmail} />
        <input placeholder="Въведете парола" className="input-field" onChange={this.savePassword} />
        <button type="submit" className="btn btn-blue" onClick={this.saveEmailInLocalStorage}>Влез</button>
      </div>
    );
  }
}

export default Login;
