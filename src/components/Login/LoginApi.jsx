import KeycloakService from "../../services/KeycloakService"

const url = "https://localhost:44344/api/User/"
let bearer = 'Bearer ' + KeycloakService.getToken()

export const LoginAPI = {

  // async getUser(id) {
  //   return fetch(`${url}${id}`, {
  //     method: "GET",
  //     headers: {
  //       'Authorization': bearer,
  //       "Access-Control-Allow-Origin" : "*", 
  //       "Access-Control-Allow-Credentials" : true,
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //     .then(async response => {
  //       if(!response.ok) {
  //         const { error = "Error occured while fetching user in log in"} = await response.json()
  //         throw Error(error)
  //       }
  //       return await response
  //     })
      
      
  // }

  getUser(id) {

    const axios = require('axios');
    const instance = axios.create({
      timeout: 1000,
      headers: {'Authorization': bearer}
    });
    instance.get(`${url}${id}`)
      .then(response => {
      return response.data;
        })
  }



}