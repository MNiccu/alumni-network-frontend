const url = "https://alumninetworkportalapi.azurewebsites.net/api/post"

export const GroupDetailAPI = {
    async getPosts(token, id) {
        return fetch(`${url}/group/${id}`, {
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
                const { error = "Error occured while fetching single post of timeline"} = await response.json()
                throw Error(error)
              }
              return await response.json()
            })
            .catch(async response => {
              return null
            })
    }
}