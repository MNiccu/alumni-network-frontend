import { InvalidTokenError } from "jwt-decode"

const url = "https://localhost:44344/api"

export const GroupListAPI = {
    
    async getPublicGroups(token) {
        
        return fetch(`${url}/group`, {
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
},

    getGroupToPatch(groupId, username) {
      
      console.log("getgroup id:", groupId)
      
            

       fetch(`${url}/group?id=${groupId}`)
          .then(response => response.json())
          .then(result => {
              console.log(result)
              this.patchGroupMember(result, groupId, username)
             
              
          })
          .catch(error => {
          })

    },

    //take token too
    patchGroupMember(result, groupId, username) {
      console.log(username, groupId)
      
      const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";
      const memberArray = []
      
      
      //push all into an array
      result[0].groupMembers.map(member => {
          memberArray.push(member)
      });
      //add new
      memberArray.push(username)

      //patch 
      fetch(`${url}/${groupId}`, {
          method: 'PATCH',
          headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              
              groupMembers: memberArray
          })
      })
          .then(response => {
            console.log(memberArray, result[0])
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