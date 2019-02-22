import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const modalCmp = (props) => {

    const lat = props.lat
    const lon = props.lon    

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.handler} >
                <ModalHeader toggle={props.handler}>({`${lat}`}, {`${lon}`}) - Ciudad</ModalHeader>
                <ModalBody>
                    Temperatura : null,
                    Estacion    : null
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handler}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default modalCmp;