import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ArmorProvider} from "./utils/armorContext";
import {UserProvider} from "./utils/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Builds from "./pages/builds"
import { SearchProvider } from './utils/searchContext';
function App() {
  return (
	  <Router>
		  <div>
			<UserProvider>
				<SearchProvider>
					<ArmorProvider>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/signup" component={Signup} />
							<Route exact path="/builds" component={Builds}/>
							<Route component={Home} />
						</Switch>
					</ArmorProvider>
				</SearchProvider>
			</UserProvider>
		  </div>
	  </Router>
  );
}

export default App;
