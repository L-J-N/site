import React from 'react';

import { Database, Auth, uiConfig, AuthUI } from '../../config/firebaseConfig.js';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Modal from '../../components/Modal';

let currentUid;

export default class Menu extends React.Component {
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
      admin: false,
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

    const nav = "nav";
    const navLeft = "nav-left";
    const navCenter = "nav-center";
    const navRight = "nav-right";
    const navItem = "nav-item";

    return (
      <nav className={nav}>
        <div className={navLeft}>
          <span className={navItem}>
            <Link to="/decouvrir" >
              Découvrir
            </Link>
          </span>
          <span className={navItem}>
            <Link to="/demarrer" >
              Démarrer
            </Link>
          </span>
          {this.state.admin ?
            <span className={navItem}>
              <Link  to="/admin" >
                Admin
            </Link>
            </span>
            : ''}
        </div>
        <div className={navCenter}>
          <span className={navItem}>
            <Link index={true} to="/" >
              Home
            </Link>
          </span>
        </div>
        <div className={navRight} >
          <span className={navItem}   >
            <Button icon="fa-user" onClick={this.handleLogin} >
              {this.state.auth ? <span>{this.state.displayName}</span> : <span>Connexion</span>}
              {this.state.admin ? <span> (admin)</span> : ''}
            </Button>
          </span>
          {this.state.auth ?
            <span className={navItem}   >
              <Button icon="fa-sign-out" onClick={this.handleLogout} >
                <span>Déconnexion</span>
              </Button>
            </span>
            : ''}
          <Modal active={this.state.show} onClose={this.handleClose} >
            <div id="firebaseui-auth-container"></div>
          </Modal>
        </div>
      </nav>
    );
  }
}
