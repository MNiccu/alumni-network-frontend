export const DirectMessagesAPI = {

    async getPost(token) {
        return fetch(`https://localhost:44344/api/post/user`, {
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

        async getConversation(token, id) {
          return fetch(`https://localhost:44344/api/post/user/${id}`, {
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
          }
    }