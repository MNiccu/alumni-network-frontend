import { useParams } from "react-router"


const SingleEvent = () => {

    const { id } = useParams()

    return (
        <h1>Hello from event {id}</h1>
    )
}

export default SingleEvent