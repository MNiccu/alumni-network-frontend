export const DirectMessagesAPI = {

  //gets posts from api
    async getPost(token) {
        return fetch(`https://alumninetworkportalapi.azurewebsites.net/api/post/user`, {
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
                const { error = "Error occured while fetching direct messages"} = await response.json()
                throw Error(error)
              }
              
              return await response.json()
              
            })
            .catch(async response => {
              return null
            })
        },

        //Gets conversations from api
        async getConversation(token, id) {
          return fetch(`https://alumninetworkportalapi.azurewebsites.net/api/post/user/${id}`, {
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
                  const { error = "Error occured while single conversation"} = await response.json()
                  throw Error(error)
                }
                
                return await response.json()
                
              })
              .catch(async response => {
                return null
              })
          },
          //Posts directmessages to api
            async postNewDirectMessage(token, post) {
                return fetch(`https://alumninetworkportalapi.azurewebsites.net/api/post`, {
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
                        const { error = "Error occured while posting posts"} = await response.json()
                        throw Error(error)
                      }
                      return await response.json()
                    })
                    .catch(error => {
                      return null
                    })
                },
                //Gets all users
            async getUsers(token) {
              return fetch(`https://alumninetworkportalapi.azurewebsites.net/api/user`, {
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
                  const { error = "Error occured while fetching users"} = await response.json()
                  throw Error(error)
                }
                
                return await response.json()
                
              })
              .catch(async response => {
                return null
              })
          },
    }