import { useLocation, useParams } from "react-router";

function ContentDetail() {
    const {id} = useParams()
    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const content = queryParams.get('content')

    return (
        <>
            컨텐츠 id : {id}
            <br/>
            컨텐츠 내용 : {content}
        </>
    )
  }

export default ContentDetail;