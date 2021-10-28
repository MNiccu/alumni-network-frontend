import { useSelector } from "react-redux";


const FeedItem = ({post}) => {

    const { name, username } = useSelector(state => state.userReducer)


    return (
        <div className="card my-3">
            <div className="card-header">
                <div className="row">
                    <div className="col-1 pe-0" id="post-img">
                        <img src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`} alt="Users profile" className="card-img align-middle rounded-circle" />
                    </div>
                    <div className="col-10">
                        <p className="card-title"></p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default FeedItem