import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import './req-loading.scss'
const ReqLoading = (props) => {
    return (
        <div className="req_loading_overlay" style={props.loading?{display:'flex'}:{display:'none'}}>
            <div>
                <HashLoader color={"#E1E8EB"} size={80} />
            </div>
        </div>
    )
}

export default ReqLoading
