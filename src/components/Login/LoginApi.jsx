const url = "https://localhost:44344/api/user/"
//const url = "https://alumninetworkbackend20211025174426.azurewebsites.net/api/topic"

export const LoginAPI = {

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
          const { error = "Error occured while fetching user in log in"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
  },
  
  async postUser(token, user) {
    return fetch(`${url}`, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(async response => {
        if(!response.ok) {
          const { error = "Error occured while posting user to database"} = await response.json()
          throw Error(error)
        }
        return await response.json()
      })
  }
}