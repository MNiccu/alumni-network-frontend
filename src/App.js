import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import CreateEditPost from "./components/CreateEditPost/CreateEditPost"
import CreateEvent from "./components/CreateEvent/CreateEvent"
import Timeline from "./components/Timeline/Timeline"
import GroupDetail from "./components/GroupDetail/GroupDetail"
import GroupList from "./components/GroupList/GroupList"
import Navigation from "./components/Navigation/Navigation"
import CalendarComponent from "./components/Calendar/CalendarComponent";

const App = () => {

	return (
		
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>

				<Route path="/login" component={Login} />
				<Route exact path="/timeline" component={Timeline} />
				<Route exact path="/calendar" component={CalendarComponent} />
				
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


