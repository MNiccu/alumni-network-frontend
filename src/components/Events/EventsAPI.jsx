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
    async getEventById(id, token) {
      console.log("TÄÄÄ ", id)
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
   async getAllTopics(token) {

      return fetch(`https://localhost:44344/api/topic`, {
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
            const { error = "Error occured while fetching topics"} = await response.json()
            throw Error(error)
          }
          return await response.json()
        })
        .catch(async response => {
          return null
        })
    },

    async getEventPosts(token, id) {
        return fetch(`https://localhost:44344/api/post/event/${id}`, {
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
    }
}