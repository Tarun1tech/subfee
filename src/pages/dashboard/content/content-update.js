import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { upload_edit_file, get_content_by_id_data, update_content, get_content_data } from "../../../redux/content/actions";
import { Upload } from 'antd';
import { connect } from "react-redux";
import { extension } from "../../../constants/index";
import { toast } from 'react-toastify';
import Loader from "../../../layouts/loading/loader";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ContentUpdate = props => {
  const contentDetail = {
    title: "",
    description: "",
  }
  const { uploadFiles, updateContent } = props;
  const [fileList, setFileList] = useState([]);
  const [commentValue, setcommentValue] = useState(false);
  const [contentInputs, setcontentInputs] = useState(contentDetail);
  const token = localStorage.getItem("access_token");
  const [videourl, setVideourl] = useState("");
  const [mainvideourl, setMainvideourl] = useState("");
  const [mainimageurl, setMainimageurl] = useState("");
  const [videoupdate, setVideoupdate] = useState(false);
  const [extensionFile, setExtensionFile] = useState("")
  const [videoLoader, setVideoLoader] = useState(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    // setPreviewImage(file.url || file.preview);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  useEffect(() => {
    if (props.data !== undefined) {
      if (props.data?.thumbnail) {
        let images = [];
        images.push({
          url: `https://subfee.techstriker.com/backend/public${props.data?.thumbnail}`,
          response: { data: [props.data?.thumbnail] },
        });
        setFileList(images);
      }
      if (props.data?.comments !== undefined && props.data?.comments === 1) {
        setcommentValue(true);
      } else {
        setcommentValue(false)
      }
      if (props.data?.video) {
        setVideoupdate(true)
      }
    }
  }, [props])
  const handleChangefile = (e) => {
    e.preventDefault();
    let k = e.target.files[0];
    var formdata = new FormData();
    formdata.append("fileupload", k, k.name);
    formdata.append("type", k.type)
    props.upload_edit_file(formdata);
    if (k.type === "video/mp4" || k.type === "video/mov" || k.type === "video/wmv" || k.type === "video/avi" || k.type === "video/webm") {
      setVideoLoader(true);
    }
  }
  useEffect(() => {
    if (uploadFiles?.success) {
      setVideoLoader(false)
      setExtensionFile(extension(uploadFiles.data.fileupload))
    } else {
      toast.error(uploadFiles?.message)
    }
    if (extensionFile === "mp4" || extensionFile === "mov" || extensionFile === "wmv" || extensionFile === "avi" || extensionFile === "webm") {
      setVideoupdate(false);
      setVideourl(`https://subfee.techstriker.com/backend/public/${uploadFiles.data.fileupload}`);
      setMainvideourl(uploadFiles.data.fileupload);
    } else if (extensionFile === "jpeg" || extensionFile === "jpg" || extensionFile === "png" || extensionFile === "webp" || extensionFile === "svg") {
      setMainimageurl(uploadFiles?.data.fileupload);
    }
    if (updateContent?.success) {
      props.hide();
      props.get_content_data({
        page: 1
      })
    }
  }, [extensionFile, uploadFiles, updateContent])

  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setcontentInputs({
      ...contentInputs,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let image = [];
    for (let i = 0; i < fileList.length; i++) {
      image.push(fileList[i].response.data.fileupload)
    };
    const payload = {
      id: props.data.id,
      title: contentInputs.title || props.data?.title,
      desc: contentInputs.description || props.data?.desc,
      video: mainvideourl || props.data?.video,
      comments: commentValue
    }
    if (image[0]) {
      payload.thumbnail = image[0] || props.data?.thumbnail
    } else {
      payload.thumbnail = mainimageurl || props.data?.thumbnail
    }

    props.update_content(payload);

  }
  const uploadButton = (
    <div>
      <span>
        <svg className="mb-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.7917 13.5417C19.5154 13.5417 19.2505 13.6514 19.0551 13.8468C18.8598 14.0421 18.75 14.3071 18.75 14.5833V14.9792L17.2083 13.4375C16.664 12.8974 15.9283 12.5944 15.1615 12.5944C14.3947 12.5944 13.6589 12.8974 13.1146 13.4375L12.3854 14.1667L9.80209 11.5833C9.25013 11.0579 8.51727 10.7649 7.75522 10.7649C6.99317 10.7649 6.2603 11.0579 5.70834 11.5833L4.16668 13.125V7.29167C4.16668 7.0154 4.27642 6.75045 4.47177 6.5551C4.66712 6.35975 4.93208 6.25 5.20834 6.25H12.5C12.7763 6.25 13.0412 6.14025 13.2366 5.9449C13.4319 5.74955 13.5417 5.4846 13.5417 5.20833C13.5417 4.93207 13.4319 4.66711 13.2366 4.47176C13.0412 4.27641 12.7763 4.16667 12.5 4.16667H5.20834C4.37954 4.16667 3.58469 4.49591 2.99863 5.08196C2.41258 5.66801 2.08334 6.46286 2.08334 7.29167V19.7917C2.08334 20.6205 2.41258 21.4153 2.99863 22.0014C3.58469 22.5874 4.37954 22.9167 5.20834 22.9167H17.7083C18.5371 22.9167 19.332 22.5874 19.9181 22.0014C20.5041 21.4153 20.8333 20.6205 20.8333 19.7917V14.5833C20.8333 14.3071 20.7236 14.0421 20.5282 13.8468C20.3329 13.6514 20.0679 13.5417 19.7917 13.5417ZM5.20834 20.8333C4.93208 20.8333 4.66712 20.7236 4.47177 20.5282C4.27642 20.3329 4.16668 20.0679 4.16668 19.7917V16.0729L7.18751 13.0521C7.34054 12.9062 7.54383 12.8249 7.75522 12.8249C7.96661 12.8249 8.16989 12.9062 8.32293 13.0521L11.625 16.3542L16.1042 20.8333H5.20834ZM18.75 19.7917C18.7485 19.9911 18.6828 20.1847 18.5625 20.3438L13.8646 15.625L14.5938 14.8958C14.6684 14.8196 14.7576 14.7591 14.856 14.7177C14.9543 14.6764 15.06 14.6551 15.1667 14.6551C15.2734 14.6551 15.379 14.6764 15.4774 14.7177C15.5758 14.7591 15.6649 14.8196 15.7396 14.8958L18.75 17.9271V19.7917ZM23.6563 4.46875L20.5313 1.34375C20.4322 1.24891 20.3154 1.17458 20.1875 1.125C19.9339 1.02081 19.6495 1.02081 19.3958 1.125C19.268 1.17458 19.1512 1.24891 19.0521 1.34375L15.9271 4.46875C15.7309 4.6649 15.6207 4.93093 15.6207 5.20833C15.6207 5.48573 15.7309 5.75177 15.9271 5.94792C16.1232 6.14407 16.3893 6.25426 16.6667 6.25426C16.9441 6.25426 17.2101 6.14407 17.4063 5.94792L18.75 4.59375V10.4167C18.75 10.6929 18.8598 10.9579 19.0551 11.1532C19.2505 11.3486 19.5154 11.4583 19.7917 11.4583C20.0679 11.4583 20.3329 11.3486 20.5282 11.1532C20.7236 10.9579 20.8333 10.6929 20.8333 10.4167V4.59375L22.1771 5.94792C22.2739 6.04555 22.3891 6.12304 22.5161 6.17593C22.643 6.22881 22.7792 6.25604 22.9167 6.25604C23.0542 6.25604 23.1903 6.22881 23.3173 6.17593C23.4442 6.12304 23.5594 6.04555 23.6563 5.94792C23.7539 5.85108 23.8314 5.73587 23.8843 5.60893C23.9372 5.482 23.9644 5.34584 23.9644 5.20833C23.9644 5.07082 23.9372 4.93467 23.8843 4.80773C23.8314 4.68079 23.7539 4.56559 23.6563 4.46875Z"
            fill="#65006B"
          />
        </svg>
      </span>
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload hier je foto
      </div>
    </div>
  );

  const handlecheckbox = (e) => {
    if ((e.target.checked)) {
      setcommentValue(!commentValue);
    }
  }

  return (
    <>
      <Modal className="content-upload-popup" show={props.show} size="xl" onHide={props.hide} backdrop="static"
        keyboard={false}>

        {props.data?.video !== null && props.data?.thumbnail !== null ?
          <>
            <Modal.Header closeButton>
              <h6 className="stats-page-title">Je video aanpassen</h6>
            </Modal.Header>
            <div className="modal-body">
              <div className="video-submit-model">
                <form onSubmit={handleSubmit}>
                  <div className="row justify-content-between">
                    <div className="col-md-7">
                      <h5>Details</h5>
                      <div className="mb-3">
                        <input type="text" name="title" placeholder="Titel van je video" defaultValue={props.data?.title} onChange={handleContentChange} />
                      </div>
                      <div className="mb-3">
                        <textarea rows="5" name="description" placeholder="Beschrijving van je video" defaultValue={props.data?.desc} onChange={handleContentChange} />
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
                              headers={{
                                Authorization: ` Bearer ${token}`
                              }}
                            >
                              {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                          </>
                        </div>
                        <div className="video-de ps-3">
                          <label>Comments</label>
                          <p>Wil je toestaan dat subscribers onder deze video een comment kunnen plaatsen?</p>
                          <div className="custom-comment-switch">
                            <label className="switch">
                              <input type="checkbox" name="videoComments" onChange={handlecheckbox} checked={commentValue} />
                              <span className="slider round"></span>
                              <span className="ja">ja</span>
                              <span className="nee">Nee</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 sbmit-right">

                      <video src={!videoupdate ? `${videourl}` : `https://subfee.techstriker.com/backend/public${props.data?.video}`} width="320" height="240" controls />

                      <label className="mt-4 mb-3"> Change Video</label>
                      <div className="content-upload">
                        <input type="file" onChange={handleChangefile} name="video" placeholder="file" accept="video/mp4" />
                        {videoLoader && <Loader />}
                      </div>
                      <input className="form-submit" type="submit" value="Opslaan" /* data-bs-dismiss="modal" */ />
                    </div>
                  </div>
                </form>
              </div>
            </div></> :
          props.data?.thumbnail !== null && props.data?.video === null ?
            <>
              <Modal.Header closeButton>
                <h6 className="stats-page-title">Je foto aanpassen</h6>
              </Modal.Header>
              <div className="modal-body">
                <div className="video-submit-model">
                  {/* Image popup */}
                  <div className="row justify-content-between">
                    <div className="col-md-12">

                      <h5>Details</h5>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input type="text" name="title" placeholder="Titel van je foto" defaultValue={props.data?.title} onChange={handleContentChange} />

                        </div>
                        <div className="mb-3">
                          <textarea rows="5" name="description" placeholder="Beschrijving van je foto" onChange={handleContentChange} defaultValue={props.data?.desc} />

                        </div>
                        <div className="d-flex justify-content-between align-item-start mt-4">
                          <div className="video-de pe-3">
                            <label>Foto uploaden</label>
                            <p>Selecteer hier een afbeelding die je op de feed van je subscribers wilt laten zien.</p>
                            <Upload
                              action="https://subfee.techstriker.com/backend/api/creator/upload-file"
                              accept="image/png, image/jpeg"
                              name="fileupload"
                              listType="picture-card"
                              fileList={fileList}
                              onPreview={handlePreview}
                              onChange={handleChange}
                              headers={{
                                Authorization: ` Bearer ${token}`
                              }}
                            >
                              {fileList.length >= 1 ? null : uploadButton}
                            </Upload>

                          </div>
                          <div className="video-de ps-3">
                            <label>Comments</label>
                            <p>Wil je toestaan dat subscribers onder deze video een comment kunnen plaatsen?</p>
                            <div className="custom-comment-switch">
                              <label className="switch">
                                <input type="checkbox" name="videoComments" onChange={handlecheckbox} checked={commentValue} />
                                <span className="slider round"></span>
                                <span className="ja">ja</span>
                                <span className="nee">Nee</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <input className="content-sub-btns" type="submit" value="Opslaan" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </> :
            <>
              <Modal.Header closeButton>
                <h6 className="stats-page-title">Je bericht aanpassen</h6>
              </Modal.Header>
              <div className="modal-body">
                <div className="video-submit-model">
                  {/* message pop up */}
                  <div className="row justify-content-between">
                    <div className="col-md-12">

                      <h5>Details</h5>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input type="text" name="title" onChange={handleContentChange} placeholder="Titel van je bericht" defaultValue={props.data?.title} />

                        </div>
                        <div className="mb-3">
                          <textarea rows="5" name="description" onChange={handleContentChange} placeholder="Beschrijving van je bericht" defaultValue={props.data?.desc} />

                        </div>
                        <div className="d-flex justify-content-between align-item-start mt-4">
                          <div className="pe-3">
                            <label>Comments</label>
                            <p>Wil je toestaan dat subscribers onder deze video een comment kunnen plaatsen?</p>
                          </div>
                          <div className="video-de ps-3">
                            <div className="custom-comment-switch">
                              <label className="switch">
                                <input type="checkbox" name="videoComments" onChange={handlecheckbox} checked={commentValue} />
                                <span className="slider round"></span>
                                <span className="ja">ja</span>
                                <span className="nee">Nee</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <input className="content-sub-btns" type="submit" value="Opslaan" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </>}

      </Modal>
    </>
  )
}
const mapStateToProps = state => ({
  ...state,
  uploadFiles: state.content.upload_files?.data?.data,
  updateContent: state.content.update_content
});

export default connect(mapStateToProps, { get_content_by_id_data, upload_edit_file, update_content, get_content_data })(ContentUpdate);
