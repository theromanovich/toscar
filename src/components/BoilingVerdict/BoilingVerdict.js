import React from 'react';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>Вода закипить.</p>;
    }
    return <p>Вода не закипить.</p>;
}

export default BoilingVerdict;
