import { createContext, useState } from "react";
import "./App.css";
import AddUsers from "./components/AddUsers/AddUsers";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllUsers from "./components/AllUsers/AllUsers";
import Admin from "./components/Admin/Admin";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    password: "",
    loggedIn: false,
    success: false,
    showError: false,
    error: "",
  });

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login></Login>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/addUser">
              <AddUsers></AddUsers>
            </Route>
            <Route path="/allUsers">
              <AllUsers></AllUsers>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
