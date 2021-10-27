const apiURL = "https://alumni-dummy-data-api.herokuapp.com/"

export const TimelineAPI = {
    async getPost(token) {
        return fetch(`https://localhost:44344/api/post`, {
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
                const { error = "Error occured while fetching user in log in"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(async response => {
              return null
            })
    },
    async getTopicPosts(id, token) {
        return fetch(`https://localhost:44344/api/post/topic/${id}`, {
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
        return fetch(`$https://localhost:44344/api/post/group/${id}`, {
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
        return fetch(`$https://localhost:44344/api/post/reply/${id}`, {
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
                   return await response.json()
                  .filter((events) => {
                   
                    if (events.targetGroupId == id) {
                        return events
                    }
                    
                })
            }).catch(async response => {
                return null
              })
    },

    getTopicEvents(id) {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/event" + "?topic=" + id)
            .then(async (response) => {
                if (!response.ok) {
                    const { error= "Error occured while fetching posts"} = await response.json()
                    throw Error(error)
                }
                return response.json()
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

    
    patchEdit(id, content) {

        console.log(content, id)
        const apiURL = "https://alumni-dummy-data-api.herokuapp.com/post";
        const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";

        //
        fetch(`${apiURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                message: content
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not update translations history')
                }
                return response.json()
            })
            .then(updatedUser => {
                
            })
            .catch(error => {
            })
    }
}