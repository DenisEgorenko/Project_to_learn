import React, {useEffect, useState} from "react";


function ProfileStatus(props) {

    let [editMode, seteditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    function activateEditMode() {
        seteditMode(true);
    }

    function deactivateEditMode() {
        seteditMode(false);
        props.updateStatus(status)
    }

    function deactivateEditModeButton(event) {

        if (event.charCode === 13) {
            seteditMode(false);
            props.updateStatus(status)
        }
    }

    function onStatusChange(e) {
        setStatus(e.currentTarget.value);
    }

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status])

    return (
        <div>
            {!editMode &&
            <div onDoubleClick={activateEditMode}>
                {props.status || "No status"}
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange}
                       autoFocus={true}
                       onKeyPress={deactivateEditModeButton}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus;