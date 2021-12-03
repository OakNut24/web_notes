import React from "react";


function InputTitle(props) {

    return <input name="title" placeholder="Enter title..." onChange={props.onChange} value={props.value} onClick={props.onClick} maxLength={props.maxLength} />;

}



export default InputTitle;