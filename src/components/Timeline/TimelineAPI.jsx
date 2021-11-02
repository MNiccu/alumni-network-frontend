const url = "https://alumninetworkportalapi.azurewebsites.net/api/post/"

export const TimelineAPI = {
    async getPost(token) {
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
                const { error = "Error occured while fetching topic posts"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(async response => {
              return null
            })
    },
    async getTopicPosts(id, token) {
        return fetch(`${url}topic/${id}`, {
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
                const { error = "Error occured while fetching topic posts"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(async response => {
              return null
            })
    },

    //THIS IS THE ONLY ONE UP TO DATE
    async getGroupPosts(id, token) {
        return fetch(`${url}group/${id}`, {
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
                    const { error = "Error fetching group posts"} = await response.json()
                    throw Error(error)
                  }
                  return await response.json()
            }).catch(async response => {
                return null
              })
    },

    getComments(id, token) {
        return fetch(`${url}reply/${id}`, {
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
                    const { error = "Error fetching group posts"} = await response.json()
                    throw Error(error)
                  }
                  return await response.json()
            }).catch(async response => {
                return null
              })
    },
    //THIS SHOULD BE GROUP ONLY?
    async getGroupEvents(token, id){
        
        return fetch(`https://localhost:44344/api/event`, {
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
                const { error = "Error fetching group posts"} = await response.json()
                throw Error(error)
              }
               const json = await response.json();
              const filtered = json.filter((events) => {
                if (events.targetGroupId == id) {
                    return events
                }
                
            })
            return filtered
        }).catch(async response => {
            return null
          })
    },

    getTopicEvents(token, id) {
        
        return fetch(`https://localhost:44344/api/event`, {
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
                const { error = "Error fetching topic posts"} = await response.json()
                throw Error(error)
              }
               const json = await response.json();
              const filtered = json.filter((events) => {
                if (events.targetTopicId == id) {
                    return events
                }
                
            })
            return filtered
        }).catch(async response => {
            return null
          })
    },
    //this should be all user related events...
    getAllEvents(token) {
        return fetch(`https://localhost:44344/api/event`, {
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
                    const { error = "Error fetching group posts"} = await response.json()
                    throw Error(error)
                  }
                  return await response.json()
            }).catch(async response => {
                return null
              })

    },

    
    patchEdit(id, message, post, token) {

        //post.text = message

        return fetch(`https://localhost:44344/api/event/${id}`, {
            method: "PUT",
            headers: {
              'Authorization': 'Bearer ' + token,
              "Access-Control-Allow-Credentials" : true,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
          })
            .then(async response => {
              if(!response.ok) {
                const { error = "Error occured while posting user to database"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(error => {
              console.log(error)
              return null
            })
        
    }
}