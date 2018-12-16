import React from 'react'
import './UserInput.css'

const UserInput = (props) => {

    return (
            <div className="Userinput">
                <input value={props.username} onChange={props.changed}/>
            </div>
    );

}

export default UserInput;