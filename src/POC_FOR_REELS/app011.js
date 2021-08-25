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

          {/* <PrivateRoute2 path="/feed2" component={Feed2}></PrivateRoute2>
          <PrivateRoute  path="/feed1"  component={Feed}></PrivateRoute>
          <PV path="/pv" render={()=>{
            return <Login></Login>
          }}></PV> */}
          <PrivateRoute03 path="/" component={Feed}></PrivateRoute03>

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


 function PV(props) {
   console.log(props);
   return <Signup></Signup>
   
 }

 function PrivateRoute03(props) {
   console.log(props);
   let feed = props.component
   console.log(feed);
   return(
     <Route render={(props)=>{
       console.log(props);
       return isSignup?<feed {...props}></feed>:<Login></Login>
     }}></Route>
   )
   
 }



export default App;
