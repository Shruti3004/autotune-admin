import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GithubOAuthLogin from "./githubOAuth";

import ReactDOM from "react-dom/client";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element!);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<GithubOAuthLogin />} />
    </Routes>
  </Router>
);
