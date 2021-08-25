import React ,{ useState,useContext } from "react";
import "./../style.css";
import { AuthContext } from "../context/AuthContext";

export default function Login(props) {
    
    let {loginWithEmailAndPassword} = useContext(AuthContext);
    const [state, setState] = useState({
        email: "",
        password: "",
    });
    
    console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword(state.email,state.password)

    // console.log(state.email, state.password);
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <form>
          <input
          id="email"
            type="text"
            className="fadeIn second"
            // value={state.email}
            onChange={(e)=>{
                console.log(e.target.value);
                setState({
                    ...state,
                    [e.target.id]:e.target.value
                })
    
            }}
          />
          <input
          id="password"
            type="password"
            className="fadeIn third"
            // value={state.password}
            onChange={(e)=>{
                console.log(e.target.value);
                setState({
                    ...state,
                    [e.target.id]:e.target.value
                })
    
            }}
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
  );
}

