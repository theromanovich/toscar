import React from 'react';
import Image from '../Image/Image'
import './Item.css';


class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="item">
                <div className="item__image">
                    <Image image={this.props.image} alt={this.props.name}/>
                </div>
                <div className="item__description">
                    <h3>
                        {this.props.name}
                    </h3>
                    {this.props.children}
                </div>


            </div>

        );
    }
}

export default Item;
