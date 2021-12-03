import React from "react";


//gets the index of the lable==notebook  and color
function Lable(props){
    return <div className="lable"><button type="button">{props.name}</button></div>
}

export default Lable;