import { useEffect, useState} from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import { useParams } from "react-router"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"
import { useSelector } from "react-redux";

const Calendar = () => {
	
	const { token } = useSelector(state => state.userReducer)
    const {id} = useParams()
	
	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})

	
	useEffect(() => {
			//should get GroupEvents! FIX THIS
			TimelineAPI.getAllEvents(token)
			.then(allEvent => {
				if (allEvent.length) {
					setEvents({
						events: allEvent,
						fetching: false
					})

			
				}
			})
	}, [])

	return (
		<Container>
				<CalendarComponent events={events.events} />
		</Container>

	)
   
}
export default withKeycloak(Calendar)