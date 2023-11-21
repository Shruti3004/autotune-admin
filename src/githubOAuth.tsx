import supabase from "./supabase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard";

const GithubOAuthLogin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    // @ts-ignore
    setUser(user);
    console.log("user", user);
  }

  async function signInWithGithub() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });

      if (error) {
        throw error;
      }

      console.log("data", data);
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUser(null);
  }

  if (user) {
    return <Dashboard />;
  }
  return (
    <div className="App">
      <h1>Hello, please sign in!</h1>
      <button onClick={signInWithGithub}>Sign In</button>
    </div>
  );
};

export default GithubOAuthLogin;
