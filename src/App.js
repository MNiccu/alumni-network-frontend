import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import CreateEditPost from "./components/CreateEditPost/CreateEditPost"
import Events from "./components/Events/Events"
import Timeline from "./components/Timeline/Timeline"
import GroupDetail from "./components/GroupDetail/GroupDetail"
import GroupList from "./components/GroupList/GroupList"
import Navigation from "./components/Navigation/Navigation"
import CalendarComponent from "./components/Calendar/CalendarComponent";
import User from "./components/User/User"
import SingleEvent from "./components/Events/SingleEvent";

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
				<Route exact path="/user" component={User} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/events/:id" component={SingleEvent} />
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


