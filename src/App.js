import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import CreateEditPost from "./components/CreateEditPost/CreateEditPost"
import Events from "./components/Events/Events"
import Timeline from "./components/Timeline/Timeline"
import GroupDetail from "./components/GroupDetail/GroupDetail";
import GroupList from "./components/GroupList/GroupList"
import TopicList from "./components/TopicList/TopicList"
import Navigation from "./components/Navigation/Navigation"
import Calendar from "./components/Calendar/Calendar";
import User from "./components/User/User"
import SingleEvent from "./components/Events/SingleEvent";
import TopicDetail from "./components/TopicDetail/TopicDetail";
import MoreInfo from "./components/Login/MoreInfo";
import DirectMessages from "./components/DirectMessages/DirectMessages";
import Conversation from "./components/DirectMessages/Conversation";
import Scroll from "./components/Scroll/Scroll";
import Feed from "./components/Feed/Feed";
import store from "./store";
import { tokenInitAction} from "./store/actions/tokenAction"
import SinglePostItem from "./components/Feed/SinglePostItem";




const App = () => {
	
	store.dispatch(tokenInitAction())

	return (
		
		<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>

				<Route path="/login" component={Login} />
				<Route exact path="/moreinfo" component={MoreInfo} />
				<Route exact path="/timeline" component={Timeline} />
				<Route exact path="/calendar" component={Calendar} />
				<Route exact path="/user" component={User} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/events/:id" component={SingleEvent} />
				<Route exact path="/groups" component={ GroupList } />
				<Route exact path="/topics" component={ TopicList } />
				<Route exact path="/group/:groupid" component={GroupDetail} />
				<Route exact path="/topic/:id" component={TopicDetail} />
				<Route exact path="/directmessages" component={DirectMessages} />
				<Route exact path="/directmessages/:id" component={Conversation} />
				<Route exact path="/scroll" component={Scroll} />
				<Route exact path="/feed" component={Feed} />
				<Route exact path="/post/:postid" component={SinglePostItem} />
			</Switch>
		</BrowserRouter>
		
	)
}

export default App;


