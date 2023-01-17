import React from 'react';

function Image(props) {
    return (
        <img src={props.image} alt={props.alt}/>
    );
}

export default Image;
