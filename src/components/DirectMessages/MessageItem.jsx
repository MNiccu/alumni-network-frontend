import { useCallback } from "react"
import { useHistory } from "react-router-dom"
import "./message.css"
import withKeycloak from "../../hoc/WithKeycloak"

//Redirects user to direct messages
const MessageItem = ({item}) => {

    const history = useHistory()
    const redirectFunction = useCallback(() => history.push(`directmessages/${item.senderId}`), [history])

    return(
        <a href="#" onClick={ redirectFunction } className="list-group-item list-group-item-action mb-0 py-1 w-50 mx-auto">

            <div className="d-flex">
                <div className="p-2">
                    <img src={item.picture} className="img-sm rounded-cirle profile-pic" alt="sender profile" />
                </div>
                <div className="p-2">
                    <h5 className="">{item.name}</h5>
                </div>
                <div className="ms-auto p-2">
                    <small>3 days ago</small>
                </div>
            </div>

           
        </a>
        
    )
}

export default withKeycloak(MessageItem)