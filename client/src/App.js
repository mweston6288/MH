import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ArmorProvider} from "./utils/armorContext"
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {

  return (
	  <Router>
		  <div>
			  <ArmorProvider>
				  <Switch>
					  <Route exact path="/" component={Home} />
					  <Route exact path="/login" component={Login} />
					  <Route component={Home} />
				  </Switch>
			  </ArmorProvider>
		  </div>
	  </Router>
  );
}

export default App;
