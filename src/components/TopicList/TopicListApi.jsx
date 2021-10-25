export const TopicListApi = {
    
    getTopics() {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com";
    
        //filter by user == topicmembers
      return fetch(`${apiURL}/topic`)
        .then(response => response.json())
    

    },

    getTopicToPatch(topicId, username) {
          
      console.log( topicId)
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/topic";
            

      fetch(`${apiURL}?topicId=${topicId}`)
          .then(response => response.json())
          .then(result => {
              console.log(result)
              this.patchTopicMember(result, topicId, username)
            
              
          })
          .catch(error => {
          })

    },

    //take token too
    patchTopicMember(result, topicId, username) {
      console.log(username, topicId)
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/topic";
      const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";
      const memberArray = []
      
      
      //push all into an array
      result[0].topicMembers.map(member => {
          memberArray.push(member)
      });
      //add new
      memberArray.push(username)

      //patch 
      fetch(`${apiURL}/${topicId}`, {
          method: 'PATCH',
          headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              
              topicMembers: memberArray
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