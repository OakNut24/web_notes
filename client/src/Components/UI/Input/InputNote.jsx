import React, {useState} from "react";

function InputNote(props) {
    const {note, setNote} = props;

    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {...prevNote, [name] : value};
        });
    }



    return <input name={props.name} placeholder={props.placeholder} onChange={handleChange} value={props.value} maxLength={props.maxLength} />;

}



export default InputNote;