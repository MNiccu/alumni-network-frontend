import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

import Timeline from "./components/Timeline/Timeline";


const App = () => {

	return (
		
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login" component={Login} />
				<Route path="/timeline" component={Timeline} />

				
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


