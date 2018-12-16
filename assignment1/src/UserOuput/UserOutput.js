import React from 'react';

const UserOutput = (props) =>{

    const styles = {
        fontSize : '2em'
    }

    return (
        <div>
            <p style={styles}>Hello  {props.username}</p>
            <p style={styles}>Another one</p>
        </div>
    );
}

export default UserOutput;