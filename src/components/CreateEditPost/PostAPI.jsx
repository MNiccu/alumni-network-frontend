
export const PostAPI = {

postPost(userId, message, postContext) {
      
    const apiURL = "https://alumni-dummy-data-api.herokuapp.com/post";
    const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";

    let group = ""
    let topic = ""

    if(postContext.context === "topic") {
        group = ""
        topic = postContext.id
    } else if (postContext.context === "group") {
        group = postContext.id
        topic = ""
    } 

  
        fetch(`${apiURL}`, {
          method: 'POST',
          headers: {
            'X-API-Key': apiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({

            //TODO date time is not right. need to fetch current. other possibly wrong too
            lastUpdated: "2021-10-01T14:48:00.000Z",
            postTarget: [],
            senderId: userId,
            isParent: true,
            reply_parent_id: "",
            message: message,
            targetUser: "" ,
            targetgroup: group,
            targetTopic: topic,
            targetEvent: ""

          })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Could not create new user')
            }
            return response.json()
          })
          .then(newUser => {
            
          })
          .catch(error => {
          })

  }

}