const apiURL = "https://alumni-dummy-data-api.herokuapp.com/post"

export const UserAPI = {
    getPosts(id) {
        return fetch(`${apiURL}?senderId=${id}`)
            .then(async response => {
                if(!response.ok) {
                    const { error = `Error occured while fetching users ${id} posts for user`} = await response.json()
                    throw Error(error)
                }
                return await response.json()
            })
    }
}