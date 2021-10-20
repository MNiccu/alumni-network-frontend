export const EventsAPI = {
    getEvents() {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/event")
            .then(async response => {
                if(!response.ok) {
                    const { error = "Error occured while fetching events"} = await response.json()
                    throw Error(error)
                }
                return await response.json()
            })
    },
    getEventById(id) {
        return fetch(`https://alumni-dummy-data-api.herokuapp.com/event?eventId=${id}`)
            .then(async response => {
                if(!response.ok) {
                    const { error = `Error occured while fetching event with id ${id}`} = await response.json()
                    throw Error(error)
                }
            return await response.json()
            })
    },
    getAllTopics() {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/topic")
            .then(async response => {
                if(!response.ok) {
                    const { error = "Error occured while fetching all topics in single event"} = await response.json()
                    throw Error(error)
                }
            return await response.json()
            })
    },
    async getEventPosts() {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/post")
        .then(async response => {
            if (!response.ok) {
                const { error = "Error occured while fetching single events posts" } = await response.json()
                throw Error(error)
            }
            return await response.json()
        })
    }
}