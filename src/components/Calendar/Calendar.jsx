import { useSelector } from "react-redux";
import { useEffect, useState} from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import { EventsAPI } from "../Events/EventsAPI";

const Calendar = () => {
	
	const { token } = useSelector(state => state.tokenReducer)
    const {id} = useParams()
	
	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})
	
	
	useEffect(() => {
			//Gets all events from database
			EventsAPI.getEvents(token)
			.then(allEvent => {
				if (allEvent != null) {
					setEvents({
						events: allEvent,
						fetching: false
					})

			
				}
			})
	}, [])

	return (
		<Container>
			<h2 className="mt-3">Calendar</h2>
			<div className="mt-5">
				<CalendarComponent events={events.events} />
			</div>
		</Container>

	)
   
}
export default withKeycloak(Calendar)