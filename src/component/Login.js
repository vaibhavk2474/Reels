import React, { useState, useContext } from "react";
import "./../style.css";
import { AuthContext } from "../context/AuthContext";
import Feed from "./Feed";

export default function Login(props) {

  let { loginWithEmailAndPassword,isSignup } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  console.log(state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log("line no 16 in Login");
      await loginWithEmailAndPassword(state.email, state.password);
      props.history.push("/");
    } catch (err) {
      console.log(err.message);
    }

    // console.log(state.email, state.password);
  };

  return (

    <>{!isSignup?
    
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
            id="email"
            type="text"
            className="fadeIn second"
            placeholder={"email"}
            onChange={debounce01(state, setState)}
          />
          <input
            id="password"
            type="password"
            className="fadeIn third"
            placeholder="password"
            onChange={debounce02(state, setState)}
          />

          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={handleSubmit}
          />
        </form>

        {/* <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
            </div> */}
      </div>
    </div>
    :<Feed></Feed>}
</>
 );
}

//use of debouncing
function debounce01(state, setState) {
  // console.log(state,setState);
  let timerID;
  return (e) => {
    if (timerID) {
      clearTimeout(timerID);
    }

    timerID = setTimeout(() => {
      // console.log(e.target.value);
      setState({
        ...state,
       email: e.target.value,
      });
    }, 1000);
  };
}
function debounce02(state, setState) {
    // console.log(state,setState);
    let timerID;
    return (e) => {
      if (timerID) {
        clearTimeout(timerID);
      }
  
      timerID = setTimeout(() => {
        // console.log(e.target.value);
        setState({
          ...state,
          password: e.target.value,
        });
      }, 1000);
    };
  }