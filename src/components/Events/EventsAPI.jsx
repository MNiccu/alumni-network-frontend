export const EventsAPI = {
    getEvents() {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/event")
            .then(async response => {
                if(!response.ok) {
                    const { error = "Error occured while fetching events"} = response.json()
                    throw Error(error)
                }
                return response.json()
            })
    }
}