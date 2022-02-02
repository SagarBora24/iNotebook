import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navabar from "./components/Navabar";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";
import {useState} from "react"

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
       setAlert({
         msg:message,
         type:type
       })
       setTimeout(()=>{
         setAlert(null)
       },1500)
  }
  return (
    <>
      <NoteState>
        <Router>
          <Navabar />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert}  />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}  />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;