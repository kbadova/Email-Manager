import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import './styles.css';

class Login extends React.Component {
  state = {email: null, password: null};

  saveEmailInLocalStorage = () => {
    localStorage.setItem('email', this.state.email);

    this.props.dispatch(push('/messages'));
  };

  saveEmail = event => this.setState({email: event.target.value});
  savePassword = event => this.setState({password: event.target.value});

  render() {
    return (
      <div className="login-page">
        <h3>Вход в системата</h3>
        <input
          placeholder="Въведете имейл"
          className="input-field"
          onChange={this.saveEmail}
        />
        <input
          placeholder="Въведете парола"
          type="password"
          className="input-field"
          onChange={this.savePassword}
        />
        <button
          type="submit"
          className="btn btn-blue"
          onClick={this.saveEmailInLocalStorage}>
          Влез
        </button>
      </div>
    );
  }
}

export default connect()(Login);
