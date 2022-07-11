import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContentList from "./list";
import Modal from "react-bootstrap/Modal";
import { Upload } from 'antd';
import Moment from 'react-moment';
import { connect } from "react-redux";
import { upload_file, reset_app, create_content, get_content_data } from "../../../redux/content/actions";
import { extension } from "../../../constants/index";
import { useHistory } from "react-router-dom";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });



const ContentPage = (props) => {
  const { uploadFile, createContent } = props;
  /* antd upload image */
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
  ]);
  const [videourl, setVideourl] = useState("");
  const [mainvideourl, setMainvideourl] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [mainimageurl, setMainimageurl] = useState("");
  const [extensionFile, setExtensionFile] = useState("")
  const token = localStorage.getItem("access_token")
  const [loading, setLoading] = useState(false);
  const handleCancel = () => setPreviewVisible(false);
  const history = useHistory();
  console.log(fileList);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

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

  /* antd upload image ends here */

  const [showvideo, setShowvideo] = useState(false);
  const [showimage, setShowimage] = useState(false);
  const [showcontent, setShowContent] = useState(false);
  const handleClosevideo = () => {
    props.reset_app();
    setExtensionFile("");
    setShowvideo(false);
  };

  const handleCloseimage = () => {
    props.reset_app();
    setExtensionFile("");
    setShowimage(false);
    console.log(props, "props")
  }
  const handleClosecontent = () => {
    setShowContent(false)
  }
  const handleContent = () => {
    setShowContent(true);
  }

  const handleChangefile = (e) => {
    e.preventDefault();
    let k = e.target.files[0];
    console.log(k, "k")
    var formdata = new FormData();
    formdata.append("fileupload", k, k.name);
    formdata.append("type", k.type)
    console.log(formdata, "formdata")

    props.upload_file(formdata);
    setLoading(true)
    console.log(props.uploadFile)
  }

  /* video popup form api */

  const contentDetail = {
    title: "",
    description: "",
  }

  const [commentValue, setcommentValue] = useState(false);

  const handlecheckbox = (e) => {
    if ((e.target.checked)) {
      setcommentValue(!commentValue);
    }
  }
  const [formErrors, setFormErrors] = useState({});
  const [contentInputs, setcontentInputs] = useState(contentDetail);
  const validate = (values) => {
    let errors = {};

    if (!values.title) {
      errors.title = `Title is required`;
    }
    if (!values.description) {
      errors.description = `Description is required`;
    }

    return errors;
  };
  const handleContentChange = (e) => {
    const { name, value } = e.target;
    setcontentInputs({
      ...contentInputs,
      [name]: value,
    });
  }


  const handleSubmit = (e) => {
    setFormErrors(validate(contentInputs));
    e.preventDefault();
    let image = [];
    for (let i = 0; i < fileList.length; i++) {
      image.push(fileList[i].response.data.fileupload)
    };
    const payload = {
      title: contentInputs.title,
      desc: contentInputs.description,
      video: contentInputs.mainvideourl,
      comments: commentValue
    }
    if (image[0]) {
      payload.thumbnail = image[0]
    } else {
      payload.thumbnail = mainimageurl
    }
    console.log(payload, "paull")
    if (Object.keys(validate(contentInputs)).length === 0) {
      props.create_content(payload);
    }
  }

  const handleGet = () => {
    props.get_content_data({
      page: 1
    });
  }
  useEffect(() => {
    if (uploadFile?.success) {
      setLoading(false);
      setExtensionFile(extension(uploadFile.data.fileupload))
    } else {
      toast.error(uploadFile?.message)
    }

    if (extensionFile === "mp4" || extensionFile === "mov" || extensionFile === "wmv" || extensionFile === "avi" || extensionFile === "webm") {
      setShowvideo(true);
      setVideourl(`https://subfee.techstriker.com/backend/public/${props.uploadFile.data.fileupload}`);
      setMainvideourl(props.uploadFile.data.fileupload);
    } else if (extensionFile === "jpeg" || extensionFile === "jpg" || extensionFile === "png" || extensionFile === "webp" || extensionFile === "svg") {
      setShowimage(true);
      setImageurl(`https://subfee.techstriker.com/backend/public/${props.uploadFile?.data.fileupload}`);
      setMainimageurl(props.uploadFile?.data.fileupload);
    }
    console.log(props, "prop")
    if (createContent?.success) {
      handleClosevideo();
      handleClosecontent();
      handleCloseimage();
      props.get_content_data({
        page: 1
      })
    }
  }, [extensionFile, token, uploadFile, createContent]);


  return (
    <div>
      <ToastContainer />
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 content-first-row-gap">
              <div className="d-flex justify-content-between align-items-enter">
                <div className="content-upload-btns-back">
                  <p> <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 11.6667C30 9.82834 28.505 8.33334 26.6667 8.33334H6.66668C4.82834 8.33334 3.33334 9.82834 3.33334 11.6667V28.3333C3.33334 30.1717 4.82834 31.6667 6.66668 31.6667H26.6667C28.505 31.6667 30 30.1717 30 28.3333V22.7783L36.6667 28.3333V11.6667L30 17.2217V11.6667ZM26.67 28.3333H6.66668V11.6667H26.6667L26.6683 19.9983L26.6667 20L26.6683 20.0017L26.67 28.3333Z" fill="#000" />
                  </svg>
                    Upload nieuwe video
                  </p>
                  <button className="content-upload-btn" data-bs-toggle="modal" id="videoup" data-bs-target="#video-submit">           {loading ? "Loading...." : "Selecteer een bestand"}</button>
                  <input type="file" onChange={handleChangefile} name="video" placeholder="file" accept="video/mp4" />
                </div>
                <div className="content-upload-btns-back">
                  <p><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.75 9.6875H28.4375L27.1719 6.14063C27.0844 5.89792 26.9242 5.68813 26.7131 5.53991C26.5019 5.39169 26.2502 5.31227 25.9922 5.3125H14.0078C13.4805 5.3125 13.0078 5.64453 12.832 6.14063L11.5625 9.6875H6.25C4.52344 9.6875 3.125 11.0859 3.125 12.8125V30.625C3.125 32.3516 4.52344 33.75 6.25 33.75H33.75C35.4766 33.75 36.875 32.3516 36.875 30.625V12.8125C36.875 11.0859 35.4766 9.6875 33.75 9.6875ZM34.0625 30.625C34.0625 30.7969 33.9219 30.9375 33.75 30.9375H6.25C6.07812 30.9375 5.9375 30.7969 5.9375 30.625V12.8125C5.9375 12.6406 6.07812 12.5 6.25 12.5H13.543L14.2109 10.6328L15.1055 8.125H24.8906L25.7852 10.6328L26.4531 12.5H33.75C33.9219 12.5 34.0625 12.6406 34.0625 12.8125V30.625ZM20 15C16.5469 15 13.75 17.7969 13.75 21.25C13.75 24.7031 16.5469 27.5 20 27.5C23.4531 27.5 26.25 24.7031 26.25 21.25C26.25 17.7969 23.4531 15 20 15ZM20 25C17.9297 25 16.25 23.3203 16.25 21.25C16.25 19.1797 17.9297 17.5 20 17.5C22.0703 17.5 23.75 19.1797 23.75 21.25C23.75 23.3203 22.0703 25 20 25Z" fill="#000" />
                  </svg>
                    Upload nieuwe foto</p>
                  <button className="content-upload-btn" data-bs-toggle="modal" id="imageup" data-bs-target="#photo-submit">   {loading ? "Loading...." : "Selecteer een bestand"}</button>
                  <input type="file" onChange={handleChangefile} name="image" />
                </div>
                <div className="content-upload-btns-back">
                  <p><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3333 3.33334H6.66668C4.82834 3.33334 3.33334 4.82834 3.33334 6.66668V26.6667C3.33334 28.505 4.82834 30 6.66668 30H11.6667V36.2783L22.1283 30H33.3333C35.1717 30 36.6667 28.505 36.6667 26.6667V6.66668C36.6667 4.82834 35.1717 3.33334 33.3333 3.33334ZM33.3333 26.6667H21.205L15 30.3883V26.6667H6.66668V6.66668H33.3333V26.6667Z" fill="#000" />
                  </svg>
                    Upload nieuw bericht</p>
                  <button className="content-upload-btn" data-bs-toggle="modal" onClick={handleContent}> {loading ? "Loading...." : "Maak een bericht"}</button>
                </div>
              </div>
              <div className="mdls">
                <Modal className="content-upload-popup" show={showvideo} size="xl" onHide={handleClosevideo} backdrop="static"
                  keyboard={false}>
                  <Modal.Header closeButton>
                    <h6 className="stats-page-title">Nieuwe content uploaden</h6>
                  </Modal.Header>
                  <div className="modal-body">
                    <div className="video-submit-model">
                      <form onSubmit={handleSubmit}>
                        <div className="row justify-content-between">
                          <div className="col-md-7">
                            <h5>Details</h5>
                            <div className="mb-3">
                              <input type="text" onChange={handleContentChange} name="title" placeholder="Titel van je video" />
                              {formErrors.title && (
                                <span className="error">{formErrors.title}</span>
                              )}
                            </div>
                            <div className="mb-3">
                              <textarea rows="5" onChange={handleContentChange} name="description" placeholder="Beschrijving van je video" />
                              {formErrors.description && (
                                <span className="error">{formErrors.description}</span>
                              )}
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
                            <video src={videourl} width="320" height="240" controls />
                            <label className="mt-4 mb-3"> Heb je alles gecheckt?</label>

                            <p className="mb-1">
                              {contentInputs.title ?
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg> : <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                  <path class="cls-1" d="M6,6H6a20.53,20.53,0,0,1,29,0l26.5,26.49L87.93,6a20.54,20.54,0,0,1,29,0h0a20.53,20.53,0,0,1,0,29L90.41,61.44,116.9,87.93a20.54,20.54,0,0,1,0,29h0a20.54,20.54,0,0,1-29,0L61.44,90.41,35,116.9a20.54,20.54,0,0,1-29,0H6a20.54,20.54,0,0,1,0-29L32.47,61.44,6,34.94A20.53,20.53,0,0,1,6,6Z" fill="#65006B" /></svg>}
                              Titel
                            </p>

                            <p className="mb-1">
                              {contentInputs.description ?
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg> : <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                  <path class="cls-1" d="M6,6H6a20.53,20.53,0,0,1,29,0l26.5,26.49L87.93,6a20.54,20.54,0,0,1,29,0h0a20.53,20.53,0,0,1,0,29L90.41,61.44,116.9,87.93a20.54,20.54,0,0,1,0,29h0a20.54,20.54,0,0,1-29,0L61.44,90.41,35,116.9a20.54,20.54,0,0,1-29,0H6a20.54,20.54,0,0,1,0-29L32.47,61.44,6,34.94A20.53,20.53,0,0,1,6,6Z" fill="#65006B" /></svg>}

                              Beschrijving</p>
                            <p className="mb-1">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                              </svg> Thumbnail
                            </p>
                            <p className="mb-1">
                              {commentValue === 1 ?
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg> :
                                <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88">
                                  <path class="cls-1" d="M6,6H6a20.53,20.53,0,0,1,29,0l26.5,26.49L87.93,6a20.54,20.54,0,0,1,29,0h0a20.53,20.53,0,0,1,0,29L90.41,61.44,116.9,87.93a20.54,20.54,0,0,1,0,29h0a20.54,20.54,0,0,1-29,0L61.44,90.41,35,116.9a20.54,20.54,0,0,1-29,0H6a20.54,20.54,0,0,1,0-29L32.47,61.44,6,34.94A20.53,20.53,0,0,1,6,6Z" fill="#65006B" /></svg>
                              } Comments aan / uit
                            </p>
                            <input className="form-submit" type="submit" value="Video plaatsen" /* data-bs-dismiss="modal" */ />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Modal>
                <Modal className="content-upload-popup" show={showimage} onHide={() => handleCloseimage()} size="lg" backdrop="static"
                  keyboard={false}>
                  <Modal.Header closeButton>
                    <h6 className="stats-page-title">Nieuwe foto uploaden</h6>
                  </Modal.Header>

                  <div className="modal-body">
                    <div className="video-submit-model">
                      <div className="row justify-content-between">
                        <div className="col-md-12">

                          <h5>Details</h5>
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <input type="text" onChange={handleContentChange} name="title" placeholder="Titel van je foto" />
                              {formErrors.title && (
                                <span className="error">{formErrors.title}</span>
                              )}
                            </div>
                            <div className="mb-3">
                              <textarea rows="5" onChange={handleContentChange} name="description" placeholder="Beschrijving van je foto" />
                              {formErrors.description && (
                                <span className="error">{formErrors.description}</span>
                              )}
                            </div>
                            <div className="d-flex justify-content-between align-item-start mt-4">
                              <div className="video-de pe-3">
                                <label>Foto uploaden</label>
                                <p>Selecteer hier een afbeelding die je op de feed van je subscribers wilt laten zien.</p>
                                <img src={imageurl} width="200" />

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
                            <input className="content-sub-btns" type="submit" value="Foto plaatsen" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </Modal>

                <Modal className="content-upload-popup" show={showcontent} onHide={() => handleClosecontent()} size="lg" backdrop="static"
                  keyboard={false}>
                  <Modal.Header closeButton>
                    <h6 className="stats-page-title">Nieuwe bericht plaatsen</h6>
                  </Modal.Header>

                  <div className="modal-body">
                    <div className="video-submit-model">
                      <div className="row justify-content-between">
                        <div className="col-md-12">

                          <h5>Details</h5>
                          <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                              <input type="text" onChange={handleContentChange} name="title" placeholder="Titel van je bericht" />
                              {formErrors.description && (
                                <span className="error">{formErrors.description}</span>
                              )}
                            </div>
                            <div className="mb-3">
                              <textarea rows="5" onChange={handleContentChange} name="description" placeholder="Beschrijving van je bericht" />
                              {formErrors.description && (
                                <span className="error">{formErrors.description}</span>
                              )}
                            </div>
                            <div className="d-flex justify-content-between align-item-start mt-4">
                              <div className="pe-3">
                                <label>Comments</label>
                                <p>Wil je toestaan dat subscribers onder deze video een comment kunnen plaatsen?</p>
                              </div>
                              <div className="video-de ps-3">
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
                            <input className="content-sub-btns" type="submit" value="Bericht plaatsen" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>

              </div>
            </div>
            <ContentList />
          </div>
        </div >
      </div >
    </div >
  );
};

const mapStateToProps = state => ({
  ...state,
  contentlist: state.content.content_list?.data,
  uploadFile: state.content.upload_file?.data?.data,
  createContent: state.content.create_content
});

export default connect(mapStateToProps, { upload_file, reset_app, create_content, get_content_data })(ContentPage);
