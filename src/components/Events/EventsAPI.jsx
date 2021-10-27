const url = "https://localhost:44344/api/event/"

export const EventsAPI = {
    async getEvents(token) {
        return fetch(`${url}`, {
            method: "GET",
            headers: {
              'Authorization': 'Bearer ' + token,
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : true,
              'Content-Type': 'application/json',
            }
          })
            .then(async response => {
              if(!response.ok) {
                const { error = "Error occured while fetching events"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(async response => {
              return null
            })
    },
    getEventById(id, token) {
        return fetch(`${url}${id}`, {
            method: "GET",
            headers: {
              'Authorization': 'Bearer ' + token,
              "Access-Control-Allow-Origin" : "*", 
              "Access-Control-Allow-Credentials" : true,
              'Content-Type': 'application/json',
            }
          })
            .then(async response => {
              if(!response.ok) {
                const { error = "Error occured while fetching event by id"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(async response => {
              return null
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