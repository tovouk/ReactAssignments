import React from 'react';

const validation = (props) => {
    let lengthMessage = '';
    
    if(props.inputLength < 5){
        lengthMessage = 'Text too short!'
    }else{
        lengthMessage = 'Text long enough.'
    }

    return (
        <div>
            <p>{props.inputLength}</p>
            <p>{lengthMessage}</p>
        </div>
    );
}

export default validation;