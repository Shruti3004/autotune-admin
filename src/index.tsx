import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import GithubOAuthLogin from "./githubOAuth";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<GithubOAuthLogin />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
