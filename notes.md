1 create componentsn sign login feed pages and apply routing on them in app.js

2. implies privateRounting on   Feed page

# day 1  
  ## 01 set the routes for login,signup and feed page in App.js
  ##  02 creates feed page as a private route
  ##  03 now creates a context folder and create a file AuthContext.js and exports two things
    ###   AuthProvider()
    ### AuthContext
  ## 04 use this AuthContext in login page to set truth value of isSignup

  ## 05 now add firebase
    ### - add config and module.export and require in auth.js
    ###- export auth,auth = firebase.auth();

  ## 06  use fuction of firebase in authContext like signin and autostatechange

  ## 07 some features are applied like first loading then show the childern of <authProvider>


  note:-> in route <Route><Route>
               there are both present first component and then render then component will take place

