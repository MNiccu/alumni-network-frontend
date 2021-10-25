const apiURL = "https://alumni-dummy-data-api.herokuapp.com/post"

export const TimelineAPI = {
    getPost() {
        return fetch(apiURL + "?limit=20")
            .then(async (response) => {
                if (!response.ok) {
                    const { error= "Error occured while fetching posts"} = await response.json()
                    throw Error(error)
                }
                return response.json()
            })
    },
    getTopicPosts(id) {
        return fetch(apiURL + "?targetTopic=" + id)
            .then(async (response) => {
                if (!response.ok) {
                    const { error= "Error occured while fetching posts"} = await response.json()
                    throw Error(error)
                }
                return response.json()
            })
    },
    getGroupPosts(id) {
        return fetch(apiURL + "?targetgroup=" + id)
            .then(async (response) => {
                if (!response.ok) {
                    const { error= "Error occured while fetching posts"} = await response.json()
                    throw Error(error)
                }
                return response.json()
            })
    },

    getComments(id) {
        return fetch(`${apiURL}?postId=${id}`)
        .then(async (response) => {
            if (!response.ok) {
                const { error= `Error occured while fetching comment with id ${id}`} = await response.json()
                throw Error(error)
            }
            return await response.json()
        })
    },

    getTopicEvents(id) {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/event" + "?topic=" + id)
            .then(async (response) => {
                if (!response.ok) {
                    const { error= "Error occured while fetching posts"} = await response.json()
                    throw Error(error)
                }
                return response.json()
            })
    },
    //this should be all user related events...
    getAllEvents(id) {
        return fetch("https://alumni-dummy-data-api.herokuapp.com/event")
            .then(async (response) => {
                if (!response.ok) {
                    const { error= "Error occured while fetching posts"} = await response.json()
                    throw Error(error)
                }
                return response.json()
            })
    },

    
    patchEdit(id, content) {

        console.log(content, id)
        const apiURL = "https://alumni-dummy-data-api.herokuapp.com/post";
        const apiKey = "tFGpEKnUC9LrynUbesK4wcTmkScm0b93J33t6ouhSZCGo4V8YbfF8BovJruIZzut";

        //
        fetch(`${apiURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
                message: content
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not update translations history')
                }
                return response.json()
            })
            .then(updatedUser => {
                
            })
            .catch(error => {
            })
    }
}