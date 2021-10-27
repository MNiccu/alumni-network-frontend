import { Calendar, dateFnsLocalizer } from "react-big-calendar"
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import withKeycloak from "../../hoc/WithKeycloak"

//change to fi?
const locales = {
    "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
    format, parse, startOfWeek, getDay, locales
})


//dummy data

/* const events = [
{
    title: "Test event",
    start: new Date('October 10, 2021'),
    end: new Date('October 10, 2021')
},
{
    title: "Test2",
    start: new Date('October 24, 2021'),
    end: new Date('October 25, 2021')
}
] */


const CalendarComponent = ({events}) => {
  
    console.log(events)
    
    //formats event data to be suitable for big-calendar
    const fixevents = events
    .map(event => {
        let eventObject = {
            title: "",
            start: "",
            end: ""
        }
        eventObject.title = event.name
        eventObject.start = event.startTime
        eventObject.end = event.endTime
        return eventObject
    })


	return (
		<div>
            <Calendar localizer={localizer} events={fixevents}
             startAccessor="start" endAccessor="end" 
             style={{height:"500px", margin:"10px"}} />
        </div>
	)
}
export default withKeycloak(CalendarComponent)