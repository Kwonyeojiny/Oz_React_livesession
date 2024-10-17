import { useLocation, useParams } from "react-router";

function User() {
    const {userId} = useParams();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name') 

    return (
        <div>
            user Id : {userId}
            <br/>
            user name : {name}
        </div>
    )
}

export default User;