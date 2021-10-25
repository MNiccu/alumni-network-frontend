import KeycloakService from "../../services/KeycloakService"
import axios from "axios"

const url = "https://localhost:44344/api/User/"
//let bearer = 'Bearer ' + KeycloakService.getToken()
//axios.defaults.headers.common = {'Authorization': `${bearer}`}

export const LoginAPI = {
  userApiFetch(token, id) {
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    getUser(id)
  }
}
const getUser = async (id) => {
  try {
      const response = await axios.get(`${url}${id}`);
      console.log(response.data)
  }catch(error){
    console.log(error)
  }
}