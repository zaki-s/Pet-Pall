import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome",
      isSignUpPopupVisible: false,
      isSignInPopupVisible: false,
      signUpDetails: { name: "", email: "", password: "" },
      signInDetails: { email: "", password: "" },
    };
  }

  toggleSignUpPopup = () =>
    this.setState((prevState) => ({
      isSignUpPopupVisible: !prevState.isSignUpPopupVisible,
    }));

  toggleSignInPopup = () =>
    this.setState((prevState) => ({
      isSignInPopupVisible: !prevState.isSignInPopupVisible,
    }));

  handleSignUpChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      signUpDetails: { ...prevState.signUpDetails, [name]: value },
    }));
  };

  handleSignInChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      signInDetails: { ...prevState.signInDetails, [name]: value },
    }));
  };

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    const { signUpDetails } = this.state;
    alert("Sign-Up Successful!");
    console.log("Sign-Up Details:", signUpDetails);
    this.toggleSignUpPopup();
  };

  handleSignInSubmit = (event) => {
    event.preventDefault();
    const { signInDetails } = this.state;
    alert("Sign-In Successful!");
    console.log("Sign-In Details:", signInDetails);
    this.toggleSignInPopup();
  };

  render() {
    const { isSignUpPopupVisible, isSignInPopupVisible, signUpDetails, signInDetails } = this.state;

    return (
      <div>
        <nav className="navbar">
          <div className="container-logo">
            <img
              src="https://i.imgur.com/lncSbip.jpeg"
              alt="logo"
              className="logo"
            />
            <span className="title">Movflix</span>
          </div>

          {/* Navigation Links */}
          <div className="nav-links">
            <Link to="./flix.js">Home</Link>
            <Link to="./Pages/About.js">About</Link>
            <Link to="./Pages/Contact.js">Contact</Link>
          </div>

          <div className="container">
            <button className="btn" onClick={this.toggleSignUpPopup}>
              Sign Up
            </button>
            <button className="btn" onClick={this.toggleSignInPopup}>
              Sign In
            </button>
          </div>
        </nav>

        {/* Sign-Up Popup */}
        {isSignUpPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Sign Up</h3>
              <form onSubmit={this.handleSignUpSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signUpDetails.name}
                  onChange={this.handleSignUpChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signUpDetails.email}
                  onChange={this.handleSignUpChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signUpDetails.password}
                  onChange={this.handleSignUpChange}
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={this.toggleSignUpPopup}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Sign-In Popup */}
        {isSignInPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Sign In</h3>
              <form onSubmit={this.handleSignInSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signInDetails.email}
                  onChange={this.handleSignInChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signInDetails.password}
                  onChange={this.handleSignInChange}
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={this.toggleSignInPopup}>
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;

