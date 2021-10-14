import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import CreateEditPost from "./components/CreateEditPost/CreateEditPost"
import CreateEvent from "./components/CreateEvent/CreateEvent"
import Timeline from "./components/Timeline/Timeline"
import GroupDetail from "./components/GroupDetail/GroupDetail";
import GroupList from "./components/GroupList/GroupList"
import TopicList from "./components/TopicList/TopicList"
import Navigation from "./components/Navigation/Navigation"
import CalendarComponent from "./components/Calendar/CalendarComponent";
import TopicDetail from "./components/TopicDetail/TopicDetail";

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
				<Route exact path="/groups" component={ GroupList } />
				<Route exact path="/topics" component={ TopicList } />
				<Route exact path="/group/:id" component={GroupDetail} />
				<Route exact path="/topic/:id" component={TopicDetail} />
				
				
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


