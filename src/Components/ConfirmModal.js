import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class ConfirmModal extends Component {
    render() {
        return (
            <Modal
                show={this.props.showConfirm}
                onHide={this.props.handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.message}</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Annuler
                    </Button>
                    <Button variant="info" onClick={this.props.handleConfirm}>
                        {this.props.confirmButton}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
