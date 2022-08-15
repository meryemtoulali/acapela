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
                    <Modal.Title>Voulez-vous vraiment supprimer ?</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Annuler
                    </Button>
                    <Button variant="danger" onClick={this.props.handleConfirm}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
