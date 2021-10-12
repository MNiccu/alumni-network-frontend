export const GroupListAPI = {
    
    getGroups() {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com";
    
        //filter by user == groupMembers
            //?topicMembers
      return fetch(`${apiURL}/group`)
        .then(response => response.json())
        
}
}