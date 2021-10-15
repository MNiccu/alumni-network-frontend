export const LoginApi = {
    
    getUser(username) {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com/user";
    
        //filter by user == topicmembers
      return fetch(`${apiURL}?username=${username}`)
        .then(response => response.json())
    

}
}