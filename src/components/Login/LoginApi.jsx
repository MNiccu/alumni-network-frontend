export const LoginApi = {
    
    getUser(username) {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/user";
    
        
      return fetch(`${apiURL}?username=${username}`)
        .then(response => response.json())
      //what if nothing comes out?

    },
    postUser(username, token) {
      
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/user";
      const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";

    
          fetch(`${apiURL}`, {
            method: 'POST',
            headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              token: token
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

    },
    patchUser(username, bio, funFact, status) {

      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/user";
      const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";
      

      const user = this.getUser(username)
      .then(
      
      //patch translations
      fetch(`${apiURL}/${user.id}`, {
          method: 'PATCH',
          headers: {
              'X-API-Key': apiKey,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              
              bio: bio,
              funFact: funFact,
              status: status
          })
      })
          .then(response => {
              if (!response.ok) {
                  throw new Error('Could not update translations history')
              }
              return response.json()
          })
          .then(updatedUser => {
              // updatedUser is the user with the Patched data
          })
          .catch(error => {
          })
          )
    }
      

}