import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ArmorProvider} from "./utils/armorContext";
import {UserProvider} from "./utils/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";

function App() {
  return (
	  <Router>
		  <div>
			  <UserProvider>
				<ArmorProvider>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route component={Home} />
					</Switch>
				</ArmorProvider>
			  </UserProvider>
		  </div>
	  </Router>
  );
}

export default App;
