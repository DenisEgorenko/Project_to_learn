import React from "react";
import loader_img from "../../Assets/Photos/Spinner-1.1s-181px.svg";

function Preloader(){
    return <div>
        <img src={loader_img}/>
    </div>
}

export default Preloader;