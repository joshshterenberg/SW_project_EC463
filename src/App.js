import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import BasePage from './components/basepage.component';
import Single from './components/single.component';
import Multi from './components/multi.component';

function App() {
  return (
    <Router>
    <head><title>EmotiTweet</title></head>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              EmotiTweet
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Single Account Analysis
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Multi-Account Analysis
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<BasePage />} />
              <Route path="/SW_project_EC463" element={<BasePage />} />
              <Route path="/base-page" element={<BasePage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/single" element={<Single />} />
              <Route path="/multi" element={<Multi />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
