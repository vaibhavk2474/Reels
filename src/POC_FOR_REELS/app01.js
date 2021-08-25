import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Feed from "./component/Feed";
import Feed2 from "./component/Feed2";

let isSignup = false;
function App() {
  return (
    <div>
      <BrowserRouter>
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

          <PrivateRoute2 path="/feed2" component={Feed2}></PrivateRoute2>
          <PrivateRoute  path="/feed1"  component={Feed}></PrivateRoute>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

function PrivateRoute(props) {
 console.log(props);
 return <Route component={Feed}></Route>
}


function PrivateRoute2(props) {
  console.log(props);
  return <Feed2></Feed2>
 }



export default App;
