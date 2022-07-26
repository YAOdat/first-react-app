import React from "react";
import Modal from 'react-bootstrap/Modal';

class ModalDisplay extends React.Component {


    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.beast.image_url} alt={this.props.beast.title} style={{ width: '100%', height: '300px' }} />
                        <h4>{this.props.beast.title}</h4>
                        <p>Description : {this.props.beast.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={this.props.handleClose}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

//merge problem

export default ModalDisplay;
