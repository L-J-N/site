import React from 'react';
import { Database, Auth, uiConfig, AuthUI } from '../../../config/firebaseConfig.js';
import cn from 'classnames';

let currentUid;

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSignedInUser = this.handleSignedInUser.bind(this);
    this.handleSignedOutUser = this.handleSignedOutUser.bind(this);

    uiConfig.callbacks = {
      signInSuccess: this.handleSignedInUser
    };
  }
  componentWillMount() {
    Auth().onAuthStateChanged((user) => {
      if (user && user.uid === currentUid) {
        return;
      }
      user ? this.handleSignedInUser(user) : this.handleSignedOutUser();
    });
  }
  handleSignedInUser(user, credential, redirectUrl) {
    currentUid = user.uid;
    Database.ref(`/role/${currentUid}`).once('value').then(snapshot => {
      this.setState({
        auth: (user) ? true : false,
        show: false,
        displayName: user.displayName,
        admin: snapshot.val()
      });
    });
    return false;
  }
  handleSignedOutUser() {
    this.setState({
      auth: false,
      show: false,
      admin : false,
    });
  }
  handleLogin() {
    if (this.state.auth) {
      return;
    }
    AuthUI.start('#firebaseui-auth-container', uiConfig);
    this.setState({
      show: true
    });
  }
  handleLogout() {
    Auth().signOut().then(() => this.handleSignedOutUser());
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <div className="nav-right">
        <span className="nav-item" onClick={this.handleLogin}  >
          <a className="button is-primary" href="#">
            <span className="icon">
              <i className="fa fa-user"></i>
            </span>
            {this.state.auth ? <span>{this.state.displayName}</span> : <span>Connexion</span>}
            {this.state.admin ? <span> (admin)</span> : ''}
          </a>
        </span>
        {this.state.auth ?
          <span className="nav-item" onClick={this.handleLogout}  >
            <a className="button is-primary" href="#">
              <span className="icon">
                <i className="fa fa-sign-out"></i>
              </span>
              <span>Déconnexion</span>
            </a>
          </span>
          : ''}
        <div className={cn('modal', this.state.show ? 'is-active' : '')} >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div id="firebaseui-auth-container"></div>
          </div>
          <button className="modal-close" onClick={this.handleClose} ></button>
        </div>
      </div>
    );
  }
}
