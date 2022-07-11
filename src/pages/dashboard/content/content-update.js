import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { Upload } from 'antd';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });




const ContentUpdate = props => {

    const [showvideo, setShowvideo] = useState(false);
    const handleShowvideo = () => {
        setShowvideo(true);
    };

    const handleClosevideo = () => {
      console.log("check check")
      setShowvideo(false);
  };

    const [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const handlePreview = async (file) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }  
      setPreviewImage(file.url || file.preview);
      setPreviewVisible(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const [commentValue, setcommentValue] = useState(false);
    const handlecheckbox = (e) => {
      if ((e.target.checked)) {
        setcommentValue(!commentValue);
      }
    }

    return(
        <>
        <Modal className="content-upload-popup" show={props.show} size="xl" onHide={props.hide} backdrop="static"
                  keyboard={false}>
                  <Modal.Header closeButton>
                    <h6 className="stats-page-title">Nieuwe content uploaden</h6>
                  </Modal.Header>
                  <div className="modal-body">
                    <div className="video-submit-model">
                      <form>
                        <div className="row justify-content-between">
                          <div className="col-md-7">
                            <div className="mb-3">
                              <input type="text" name="title" placeholder="Titel van je video" />
                            </div>
                            <div className="mb-3">
                              <textarea rows="5" name="description" placeholder="Beschrijving van je video" />
                            </div>
                            <div className="d-flex justify-content-between align-item-start mt-4">
                              <div className="video-de pe-3">
                                <label>Thumbnail</label>
                                <p>Selecteer hier een afbeelding waarop goed te zien is waar jouw video over gaat.</p>
                                {/* antd image upload */}
                                <>
                                  <Upload
                                    action="https://subfee.techstriker.com/backend/api/creator/upload-file"
                                    accept="image/png, image/jpeg"
                                    name="fileupload"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={handlePreview}
                                    onChange={handleChange}
                                  >
                                  </Upload>
                                </>
                              </div>
                              <div className="video-de ps-3">
                                <label>Comments</label>
                                <p>Wil je toestaan dat subscribers onder deze video een comment kunnen plaatsen?</p>
                                <div className="custom-comment-switch">
                                  <label className="switch">
                                    <input type="checkbox" name="videoComments" onChange={handlecheckbox} />
                                    <span className="slider round"></span>
                                    <span className="ja">ja</span>
                                    <span className="nee">Nee</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 sbmit-right">
                            <video src="#" width="320" height="240" controls />
                            <label className="mt-4 mb-3"> Heb je alles gecheckt?</label>

                            <p className="mb-1">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg>
                            </p>

                            <p className="mb-1">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg>
                              Beschrijving</p>
                            <p className="mb-1">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                              </svg> Thumbnail
                            </p>
                            <p className="mb-1">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg>  Comments aan / uit
                            </p>
                            <input className="form-submit" type="submit" value="Video plaatsen" /* data-bs-dismiss="modal" */ />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Modal>
        </>
    )
}

export default ContentUpdate;