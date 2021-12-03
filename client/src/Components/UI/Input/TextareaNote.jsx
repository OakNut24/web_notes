import React, {useState} from "react";

function NodeTextarea(props) {
    const {note, setNote} = props;

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {...prevNote, [name] : value};
        });
    }



    return <textarea name={props.name} placeholder={props.placeholder} rows={props.rows} onChange={handleChange} value={props.value} maxLength={props.maxLength} />;
    

}



export default NodeTextarea;