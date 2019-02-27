import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const modalCmp = (props) => {

    const lat = props.lat
    const lon = props.lon    
    const location = props.timezone
    let finallocation = "Unknown"

    if (location != null){
        finallocation = location.split('/')[1]
    }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.handler} >
                <ModalHeader toggle={props.handler}>Weather forecast - {props.time}</ModalHeader>
                <ModalBody>
                    <p>Temperature : {props.temp}</p>
                    <p>Aprox Location: {finallocation}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={props.handler}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default modalCmp;