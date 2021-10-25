export const GroupListAPI = {
    
    getPublicGroups() {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com";
    
        //filter by user == groupMembers
            //?topicMembers
      return fetch(`${apiURL}/group?isPrivate=false`)
        .then(response => response.json())
        
},

    getGroupToPatch(groupId, username) {
      
      console.log("getgroup id:", groupId)
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/group";
            

       fetch(`${apiURL}?groupId=${groupId}`)
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
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/group";
      const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";
      const memberArray = []
      
      
      //push all into an array
      result[0].groupMembers.map(member => {
          memberArray.push(member)
      });
      //add new
      memberArray.push(username)

      //patch 
      fetch(`${apiURL}/${groupId}`, {
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