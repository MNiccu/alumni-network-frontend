const url = "https://alumninetworkportalapi.azurewebsites.net/api/event/"
const urlPost = "https://alumninetworkportalapi.azurewebsites.net/api/post"

//API calls for event component
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

      return fetch(`https://alumninetworkportalapi.azurewebsites.net/api/topic`, {
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
      return fetch(`${urlPost}/event/${id}`, {
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
                const { error = "Error fetching posts of the event"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
        .catch(error => {
          return null
        })
    },

    async getEventAttendees(token, id) {
      return fetch(`${url}attendees/${id}`, {
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
              const { error = "Error occured while fetching event attendees"} = await response.json()
              throw Error(error)
            }
            return await response.json()
          })
          .catch(async response => {
            return null
          })
  },

  async sendPost(token, post) {
    return fetch(`${urlPost}`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Access-Control-Allow-Credentials" : true,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post)
    })
      .then(async response => {
        if(!response.ok) {
          const { error = "Error occured while posting new post"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
      .catch(error => {
        return null
      })
  }
}