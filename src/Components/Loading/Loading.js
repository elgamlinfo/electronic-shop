import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './loading.scss'
const Loading = (props) => {
    return (
        <div className="loading_overlay" style={props.loading?{display:'flex'}:{display:'none'}}>
            <div>
                <ClimbingBoxLoader color={"#FFC107"} size={15} />
            </div>
        </div>
    );
};

export default Loading;
