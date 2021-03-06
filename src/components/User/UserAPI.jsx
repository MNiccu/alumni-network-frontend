const url = "https://alumninetworkportalapi.azurewebsites.net/api/user/"

//Handles API calls for user to interact with database
export const UserAPI = {
    async getUser(token, id) {
        return fetch(`${url}${id}`, {
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
              const { error = "Error occured while fetching user in profile"} = await response.json()
              throw Error(error)
            }
            return await response.json()
          })
          .catch(async response => {
            return null
          })
      },
      async updateUser(token, id, user) {
        return fetch(`${url}${id}`, {
          method: "PUT",
          headers: {
            'Authorization': 'Bearer ' + token,
            "Access-Control-Allow-Credentials" : true,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
          .then(async response => {
            if(!response.ok) {
              const { error = "Error occured while updating users information in profile"} = await response.json()
              throw Error(error)
            }
            return await response.json()
          })
          .catch(error => {
            return null
          })
      }
}