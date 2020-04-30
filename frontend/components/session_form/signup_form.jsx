import React from 'react';
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
            phone_number:'',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user)
          .then(()=> this.props.history.push('/'))
    }

    showErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div className="session-form-container">
            <div className="session-form-box">
              <div className="session-form-card">
                <span className="header">Sign Up</span>
                <div className="session-form-header">
                  <p className="session-form-context">
                    Already have an account? &nbsp;
                  </p>
                  <Link id="session-form-link" to="/login">
                    Sign In
                  </Link>
                </div>
                <br />
                <form onSubmit={this.handleSubmit}>
                  <div className='user-name'>
                    <label className='fname'>
                      <span>First Name</span>
                      <br />
                      <input
                        className="login-input"
                        type="text"
                        value={this.state.fname}
                        onChange={this.update("fname")}
                      />
                    </label>
                    <br />
                    <br />
                    <label>
                      <span>Last Name</span>
                      <br />
                      <input
                        className="login-input"
                        type="text"
                        value={this.state.lname}
                        onChange={this.update("lname")}
                      />
                    </label>
                  </div>
                  <br />
                  <label>
                    <span>Email</span>
                    <br />
                    <input
                      className="login-input"
                      id="pw-input"
                      type="password"
                      value={this.state.email}
                      onChange={this.update("email")}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    <span>Mobile Number</span>
                    <br />
                    <input
                      className="login-input"
                      id="pw-input"
                      type="text"
                      value={this.state.phone_number}
                      onChange={this.update("phone_number")}
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    <span>Password</span>
                    <br />
                    <input
                      className="login-input"
                      id="pw-input"
                      type="password"
                      value={this.state.password}
                      onChange={this.update("password")}
                    />
                  </label>
                  <br />
                  <br />
                  <input
                    className="session-submit"
                    type="submit"
                    value="Sign In"
                  />
                </form>
                {/* <form onSubmit={this.handleSubmit}>
                    <div className="user-name">
                      <label className='fname'>
                        First Name:
                        <input
                          type="text"
                          value={this.state.fname}
                          onChange={this.update("fname")}
                          className="login-input"
                        />
                      </label>
                      <br />
                      <label className='lname'>
                        Last Name:
                        <input
                          type="text"
                          value={this.state.lname}
                          onChange={this.update("lname")}
                          className="login-input"
                        />
                      </label>
                    </div>
                    <br />
                    <label>
                      Email:
                      <input
                        type="email"
                        value={this.state.email}
                        onChange={this.update("email")}
                        className="login-input"
                      />
                    </label>
                    <br />
                    <label>
                      Mobile Number:
                      <input
                        type="text"
                        value={this.state.phone_number}
                        onChange={this.update("phone_number")}
                        className="login-input"
                      />
                    </label>
                    <br />
                    <label>
                      Password:
                      <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input"
                      />
                    </label>
                    <br />
                    <br/>
                    <input
                      className="session-submit"
                      type="submit"
                      value="Sign Up"
                    />
                </form> */}
              </div>
            </div>
          </div>
        );
    }

}
export default SignupForm;

