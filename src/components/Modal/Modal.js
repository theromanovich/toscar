import React from 'react';
import PropTypes from "prop-types";
import './Modal.css';
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        this.state = { name: 'Modal'}
    }
    state = {
        show: false
    };

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    };
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show){
            return null;
        }
        return (
            <div>
                {this.props.children}
                {/*<button onClick={e => {*/}
                {/*    this.showModal();*/}
                {/*}}*/}
                {/*> show Modal*/}
                {/*</button>*/}

                {/*this is {this.state.name}*/}
                <div>
                    <button
                        onClose={e => {
                            this.onClose(e);
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
}
// <Modal onClose={this.showModal} show={this.state.show}>
//     Consulting with Ivan
// </Modal>
export default Modal;
