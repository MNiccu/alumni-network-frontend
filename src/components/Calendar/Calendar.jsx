import { useEffect, useState} from "react"
import { TimelineAPI } from "../Timeline/TimelineAPI"
import { Container } from "react-bootstrap"
import TimelinePosts from "../Timeline/TimelinePosts"
import { useParams } from "react-router"
import withKeycloak from "../../hoc/WithKeycloak"
import CalendarComponent from "../Calendar/CalendarComponent"

const Calendar = () => {
	
    const {id} = useParams()
	

	const [events, setEvents] = useState({
		events: [],
		fetching: true
	})

	
	useEffect(() => {
			//should get GroupEvents! FIX THIS
			TimelineAPI.getAllEvents(id)
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