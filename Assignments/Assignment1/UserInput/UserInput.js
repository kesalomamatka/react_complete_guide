import React from 'react';

const userInput = (props) => {
    const style = {
        border: '1px solid red'
    };

    return <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentValue}
        />;

};

export default userInput;