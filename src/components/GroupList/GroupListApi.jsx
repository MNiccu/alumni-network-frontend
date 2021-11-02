import { InvalidTokenError } from "jwt-decode"

const url = "https://alumninetworkportalapi.azurewebsites.net/api/group"
const urlPost = "https://alumninetworkportalapi.azurewebsites.net/api/post"
const urlEvent = "https://alumninetworkportalapi.azurewebsites.net/api/event"


export const GroupListAPI = {

    
  async getPublicGroups(token) {
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

  async patchGroupMember(groupId, token) {
    //patch 
    return fetch(`${url}/${groupId}/join`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Access-Control-Allow-Credentials" : true,
        'Content-Type': 'application/json',
      }
    })
      .then(async response => {
        if(!response.ok) {
          const { error = "Error occured while adding user to group in database"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
      .catch(error => {
        console.log(error)
        return null
      })

  },

  async postNewGroup(token, groupData) {
      return fetch(`${url}`, {
        method: "POST",
        headers: {
          'Authorization': 'Bearer ' + token,
          "Access-Control-Allow-Credentials" : true,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            'name': groupData.groupName,
            'description': groupData.groupDescription,
            'isPrivate' : Boolean(groupData.isPrivate)
          } 
        )

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
  },

  async getGroupEvents(token, id){
        
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

  async getGroupPosts(token, id) {
    return fetch(`${urlPost}/group/${id}`, {
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