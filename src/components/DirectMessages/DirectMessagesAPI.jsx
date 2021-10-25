export const DirectMessagesAPI = {
    async getPost() {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/post")
            .then(async response => {
                if(!response.ok){
                    const { error = "Error occured while fetching post in direct messages"} = await response.json()
                    throw Error(error)
                }
                return await response.json()
            })
    }
}