import React from 'react';
import Image from '../Image/Image'


class Doctor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="doctor">
                <h3>
                    {this.props.name}
                </h3>
                <Image/>

            </div>

        );
    }
}

export default Doctor;
