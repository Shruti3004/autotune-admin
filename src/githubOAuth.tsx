import supabase from "./supabase";
import { useState, useEffect } from "react";
import Dashboard from "./dashboard";

const GithubOAuthLogin = () => {
  const [user, setUser] = useState(null);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  useEffect(() => {
    // checkUser();
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
    try{
      const { error } = await supabase.auth.signOut();
      if(error) throw error;
      setUser(null);
    }catch(error){
      console.log(error)
    }
  }

  if (redirectToDashboard) {
    return <Dashboard />;
  }
  return (
    <div className="App" style={{ textAlign: "center" }}>
      {!user ? (
        <>
          <h1>Hello, please sign in!</h1>
          <button onClick={signInWithGithub}>Sign In</button>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', margin: '20px' }}>
            <img
            // @ts-ignore
            src={user?.identities?.[0]?.identity_data?.avatar_url}
            alt=""
            height="100px"
            width="100px"
            style={{borderRadius: '50%', marginRight: '15px'}}
            />
            {/* @ts-ignore */}
            <h1>Hi, {user?.identities?.[0]?.identity_data?.full_name}!</h1>
          </div>
          <div>
          <button onClick={() => setRedirectToDashboard(true)} style={{marginRight: '15px'}}>
            Go to dashboard
          </button>
          <button onClick={signOut}>
            Sign Out
          </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubOAuthLogin;
