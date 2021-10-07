import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import Calendar from "./components/Calendar/Calendar"
import CreateEditPost from "./components/CreateEditPost/CreateEditPost"
import CreateEvent from "./components/CreateEvent/CreateEvent"
import Timeline from "./components/Timeline/Timeline"
import GroupDetail from "./components/GroupDetail/GroupDetail"
import GroupList from "./components/GroupList/GroupList"

const App = () => {

	return (
		
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login" component={Login} />

				<Route path="/" component={Calendar} />
				<Route path="/" component={CreateEditPost} />
				<Route path="/" component={CreateEvent} />
				<Route path="/" component={GroupDetail} />
				<Route path="/" component={GroupList} />
				
				<Route exact path="/timeline" component={Timeline} />

				
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


