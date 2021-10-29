import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";



const SinglePostItem = () => {

    const { postid } = useParams()
    const { id, name, username } = useSelector(state => state.userReducer)
    const { token } = useSelector(state => state.tokenReducer)


    return (
        <div className="container">
            <div className="card scroll convo-container">
                <div className="header">
                    <div className="row">
                        <div className="col-2">
                            <img src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} alt="user profile" className="img-sm" />
                        </div>
                    </div>
                </div>
                <div className="card-body">

                </div>
            </div>
        </div>
    )
}

export default SinglePostItem