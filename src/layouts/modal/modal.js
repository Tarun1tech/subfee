import React from "react";
import deleteImg from "../../assets/images/delete.png";
import Modal from "react-bootstrap/Modal";
const CustomModal = (props) => {

    return (
        <Modal className="custom-modal" show={props.show} size="lg" onHide={props.hide} backdrop="static"
            keyboard={false} centered>
            <Modal.Header closeButton>
                <h6 className="stats-page-title">{props.popupHeader}</h6>
            </Modal.Header>
            <div className="modal-body">
                <div className="modalcontent">
                    <div className="d-flex mt-2">
                        <h6>{props.popupText}</h6>
                    </div>

                    <div className="modal-button d-flex justify-content-center p-4">
                        <button
                            type="submit"
                            className="page-direc text-center "

                            onClick={props.bulkDelete}
                        >
                            {props.confirmbuttonText}
                        </button>
                        <button
                            type="submit"
                            className="export-subscribers-btn"
                            onClick={props.hide}
                        >
                            {props.cancelbuttonText}

                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}
export default CustomModal;