const url = "https://alumninetworkportalapi.azurewebsites.net/api/topic/"
const urlPost = "https://alumninetworkportalapi.azurewebsites.net/api/post"
const urlEvent = "https://alumninetworkportalapi.azurewebsites.net/api/event"

export const TopicListApi = {
    
  async getTopics(token) {
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
          const { error = "Error occured while fetching topics"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
      .catch(async response => {
        return null
      })
    },

  async getTopicToPatch(topicId, token) {
    return fetch(`${url}${topicId}/join`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        'Content-Type': 'application/json',
      }
    })
      .then(async response => {
        if(!response.ok) {
          const { error = "Error occured while creating topic membership record"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
      .catch(async response => {
        return null
      })
  },

  async postNewTopic(topicData, token) {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        "name" : topicData.name,
        "description" : topicData.description
      })
    })
      .then(async response => {
        if(!response.ok) {
          const { error = "Error occured while creating new topic"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
      .catch(async response => {
        return null
      })
  },

  async getTopicEvents(token, id){
        
    return fetch(`${urlEvent}`, {
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
            if (events.targetGroupId === id) {
                return events
            }
            
        })
        return filtered
    }).catch(async response => {
      console.log(response)
        return null
      })
  },

  async getTopicPosts(token, id) {
    return fetch(`${urlPost}/topic/${id}`, {
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
                const { error = "Error fetching groups"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
        .catch(error => {
          console.log(error)
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
        console.log(error)
        return null
      })
  }
}