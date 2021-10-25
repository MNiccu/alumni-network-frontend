export const GroupListAPI = {
    
    getPublicGroups() {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com";
    
        //filter by user == groupMembers
            //?topicMembers
      return fetch(`${apiURL}/group?isPrivate=false`)
        .then(response => response.json())
        
}
}