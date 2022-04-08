import React, { useState } from "react";
import "./styles/index.css";
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow.svg";
import error from "./images/icon-error.svg";
import validator from "validator";

function App() {
  const [email, setEmail] = useState("");

  const [err, setErr] = useState(false);

  const handleSubmit = () => {
    validator.isEmail(email) ? setErr(false) : setErr(true);
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <div className="content__left">
            <img className="logo" src={logo} alt="logo" />
            <div className="mobile__image"></div>
            <h1>
              <span>We're</span>
              <span>Coming</span>
              <span>Soon</span>
            </h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="content__input">
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="content__input__arrow">
                {err ? <img className="error" src={error} alt="error" /> : ""}
                <button onClick={handleSubmit}>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>

            {err ? (
              <div className="error__bottom">
                <span>Please provide a valid email</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="content__right"></div>
        </div>
      </div>

      <footer>
        <p className="attribution">
          Challenge by
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
