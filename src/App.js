
// import './App.css';
// import Signup from './Components/Signup'
// import Login from './Components/Login'
// import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom'

// function App() {
//   return (
//     <BrowserRouter>

//           <Route path="/login" component={Login}/>
//           <Route path="/signup" component={Signup}/>
//           {/* <PrivateRoute path="/" exact component={Feed}></PrivateRoute> */}

//     </BrowserRouter>

//   );
// }
// import React, { useContext, useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
// import Feed from './components/Feed';
// import { AuthProvider, AuthContext } from '../dirs/contexts/AuthProvider';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
// import './App.css';
function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/login" component={Login}></Route>
          <Route path="/Signup" component={Signup}></Route>
          {/* <PrivateRoute path="/" exact component={Feed}></PrivateRoute> */}
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}


export default App;
