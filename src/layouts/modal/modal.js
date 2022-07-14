import React from "react";
import deleteImg from "../../assets/images/delete.png";
import Modal from "react-bootstrap/Modal";
const CustomModal = (props) => {

    return (
        <Modal className="content-upload-popup" show={props.show} size="xl" onHide={props.hide} backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                {/* <h6 className="stats-page-title">Nieuwe content uploaden</h6> */}
            </Modal.Header>
            <div className="modal-body">
                <div className="modalcontent">
                    <div className="d-flex mt-2">
                        <img
                            width="200"
                            height="200"
                            src={deleteImg}
                            alt=""
                            className="icon_wrap m-auto"
                        />
                    </div>
                    <h2 className="text-center m-3">Are you sure.You want to delete! </h2>
                    <div className="modal-button d-flex justify-content-center p-4">
                        <button
                            type="submit"
                            className="btn btn-light "
                            onClick={props.hide}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="'page-item page-link content-next-table "
                            onClick={props.bulkDelete}
                        >
                            Delete
                        </button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}
export default CustomModal;