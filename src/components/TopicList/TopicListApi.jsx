export const TopicListApi = {
    
    getTopics() {
  
      const apiURL = "https://alumni-dummy-data-api.herokuapp.com";
    
        //filter by user == topicmembers
      return fetch(`${apiURL}/topic`)
        .then(response => response.json())
    

}
}