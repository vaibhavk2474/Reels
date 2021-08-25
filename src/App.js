import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Feed from "./component/Feed";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import { useContext } from "react";
// import Feed2 from "./component/Feed2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>

            {/* privateRoute */}
            {/* <Route
            path="/"
            render={(props) => {
              console.log(props);
              return isSignup ? <Feed></Feed> : <Login></Login>;
            }}
          ></Route> */}

            <PrivateRouter path="/" component={Feed}></PrivateRouter>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

function PrivateRouter(params) {
  let { isSignup } = useContext(AuthContext);
  // console.log(params);
  console.log("line no 38 in App.js in privateRoute");
  return (
    <Route
      render={(props) => {
        console.log(props);
        return isSignup ? <Feed {...props}></Feed> : <Login {...props}></Login>;
      }}
    ></Route>
  );
}

// since we are not using <Route> here we can props the history to the Login page
// function PrivateRouter(params) {
//   let {isSignup} = useContext(AuthContext)
//   console.log(params);
//   return (

//       isSignup ? <Feed></Feed> : <Login {...params}></Login>

//   );
// }
export default App;
