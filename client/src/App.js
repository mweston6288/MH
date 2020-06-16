import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ArmorProvider} from "./utils/armorContext";
import {UserProvider} from "./utils/userContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Builds from "./pages/builds"
import { SearchProvider } from './utils/searchContext';
import { useAlertContext } from './utils/alertContext';
import Alert from 'react-bootstrap/Alert';
function App() {

	const [alert, alertDispatch] = useAlertContext();
	useEffect(()=>{
		if (alert.show){
			setTimeout(()=>{
				alertDispatch({show:false,message:"",variant:""});
			}, 2000);
		}
	}, [alert]);
  return (
	  <div>
		{alert.show &&
		<Alert className="build-err-alert" variant={alert.variant}>{alert.message}</Alert>
		}
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
	  </div>
  );
}

export default App;
