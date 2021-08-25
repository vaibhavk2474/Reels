import React, { useState, useEffect } from "react";

import auth from "../fireBase/auth";
export const AuthContext = React.createContext();
export function AuthProvider({ children }) {
  const [isSignup, setSignup] = useState(null);
  const [isLoading, setLoading] = useState(true);

  async function loginWithEmailAndPassword(email, password) {
    let userCredentials = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    setSignup(userCredentials.user);

    // if (email === "vkg@gmail.com" && password === "123456") {
    //   setSignup(true);
    //   console.log(email, password, "are recieved");
    //   console.log(children)

    // }

    // setSignup(true)
    // console.log(email,password,"are recieved");
  }

  useEffect(() => {
    console.log("useEffect");
    try {
      auth.onAuthStateChanged((user) => {
        console.log("line no 30 user ", user);
        setSignup(user);
        setLoading(false);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  function logoutWith() {
    setSignup(false);
    console.log("you are log out");
  }

  const value = {
    isSignup,
    setSignup,
    logoutWith,
    loginWithEmailAndPassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
      {console.log("line no 53, loading ang childern")}
    </AuthContext.Provider>
  );
}
