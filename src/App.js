import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

import KeycloakService from "./services/KeycloakService";

const App = () => {

	return (
		
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


