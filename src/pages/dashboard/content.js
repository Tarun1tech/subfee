import React, { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from "react-bootstrap/Modal";
import { Upload } from 'antd';
import Moment from 'react-moment';


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });



const ContentPage = () => {

  /* antd upload image */
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
  ]);
  const handleCancel = () => setPreviewVisible(false);
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

  const handleClosevideo = () => setShowvideo(false);
  const handleCloseimage = () => setShowimage(false);

  const [videourl, setVideourl] = useState("");
  const [mainvideourl, setMainvideourl] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [mainimageurl, setMainimageurl] = useState("");

  const token = localStorage.getItem("access_token")

  const handleChangefile = (e) => {
    let k = e.target.files[0];
    var formdata = new FormData();
    formdata.append("fileupload", k, k.name);
    formdata.append("type", k.type)
    axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINT}api/creator/upload-file`,
        formdata,
        {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.data.success === true) {
          toast.success(response.data.message);
          if (k.type === "video/mp4") {
            setShowvideo(true);
            setVideourl(`https://subfee.techstriker.com/backend/public/${response.data.data.fileupload}`);
            setMainvideourl(response.data.data.fileupload);
          } else if (k.type === "image/jpeg") {
            setShowimage(true);
            setImageurl(`https://subfee.techstriker.com/backend/public/${response.data.data.fileupload}`);
            setMainimageurl(response.data.data.fileupload);
          }
        }
        else {
          toast.error(response.data.message);
        }
      })
      .catch((err) => console.log(err.response));
  }

  /* video popup form api */

  const contentDetail = {
    contentTitle: "",
    contentDescription: "",
  }

  const [commentvalue, setCommentvalue] = useState(0);

  const handlecheckbox = (e) => {
    if ((e.target.checked)) {
      setCommentvalue(1);
    }
  }

  const [contentinputs, setContentinputs] = useState(contentDetail);
  const handleContentinputs = (e) => {
    const { name, value } = e.target;
    setContentinputs({
      ...contentinputs,
      [name]: value,
    });
  }
    

  const contentdetailSubmit = (e) => {
    e.preventDefault();
    let image=[];
    for(let i=0; i<fileList.length;i++){
      image.push(fileList[i].response.data.fileupload)
    };
    var formdata = new FormData();
    formdata.append("title",contentinputs.contentTitle);
    formdata.append("desc",contentinputs.contentDescription);
    formdata.append("video",mainvideourl);   
    if (image[0]) {
      formdata.append("thumbnail",image[0]);
    } else {
      formdata.append("thumbnail",mainimageurl);
    }    
    formdata.append("comments",commentvalue);
    formdata.append("length","");
    axios
    .post(`${process.env.REACT_APP_API_ENDPOINT}api/creator/create-content`,
    formdata,
    {
      headers: {
        Authorization: ` Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.data.success === true) {
        toast.success(response.data.message);
        handleClosevideo();
        handleCloseimage();
      }
      else {
        toast.error(response.data.message)
      }
    })
  }
  /* here the whole thing could be great */

  const [contentlist, setContentlist] = React.useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_ENDPOINT}api/creator/getcontentlist`,
    {
      headers:{
        Authorization: `Bearer ${token}`,
      },
    }
    )
    .then((response) => {
      setContentlist(response.data.data.data);
    });
  }, []);
  
  
  console.log(contentlist, "i want dtata");
  
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
                  <button className="content-upload-btn" data-bs-toggle="modal" id="videoup" data-bs-target="#video-submit">Selecteer een bestand</button>
                  <input type="file" onChange={handleChangefile} name="video" placeholder="file" accept="video/mp4" />
                </div>
                <div className="content-upload-btns-back">
                  <p><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.75 9.6875H28.4375L27.1719 6.14063C27.0844 5.89792 26.9242 5.68813 26.7131 5.53991C26.5019 5.39169 26.2502 5.31227 25.9922 5.3125H14.0078C13.4805 5.3125 13.0078 5.64453 12.832 6.14063L11.5625 9.6875H6.25C4.52344 9.6875 3.125 11.0859 3.125 12.8125V30.625C3.125 32.3516 4.52344 33.75 6.25 33.75H33.75C35.4766 33.75 36.875 32.3516 36.875 30.625V12.8125C36.875 11.0859 35.4766 9.6875 33.75 9.6875ZM34.0625 30.625C34.0625 30.7969 33.9219 30.9375 33.75 30.9375H6.25C6.07812 30.9375 5.9375 30.7969 5.9375 30.625V12.8125C5.9375 12.6406 6.07812 12.5 6.25 12.5H13.543L14.2109 10.6328L15.1055 8.125H24.8906L25.7852 10.6328L26.4531 12.5H33.75C33.9219 12.5 34.0625 12.6406 34.0625 12.8125V30.625ZM20 15C16.5469 15 13.75 17.7969 13.75 21.25C13.75 24.7031 16.5469 27.5 20 27.5C23.4531 27.5 26.25 24.7031 26.25 21.25C26.25 17.7969 23.4531 15 20 15ZM20 25C17.9297 25 16.25 23.3203 16.25 21.25C16.25 19.1797 17.9297 17.5 20 17.5C22.0703 17.5 23.75 19.1797 23.75 21.25C23.75 23.3203 22.0703 25 20 25Z" fill="#000" />
                  </svg>
                    Upload nieuwe foto</p>
                  <button className="content-upload-btn" data-bs-toggle="modal" id="imageup" data-bs-target="#photo-submit">Selecteer een bestand</button>
                  <input type="file" onChange={handleChangefile} name="image" accept="image/jpeg" />
                </div>
                <div className="content-upload-btns-back">
                  <p><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3333 3.33334H6.66668C4.82834 3.33334 3.33334 4.82834 3.33334 6.66668V26.6667C3.33334 28.505 4.82834 30 6.66668 30H11.6667V36.2783L22.1283 30H33.3333C35.1717 30 36.6667 28.505 36.6667 26.6667V6.66668C36.6667 4.82834 35.1717 3.33334 33.3333 3.33334ZM33.3333 26.6667H21.205L15 30.3883V26.6667H6.66668V6.66668H33.3333V26.6667Z" fill="#000" />
                  </svg>
                    Upload nieuw bericht</p>
                  <button className="content-upload-btn" data-bs-toggle="modal" data-bs-target="#message-submit">Maak een bericht</button>
                </div>
              </div>
              <div className="mdls">
                <Modal show={showvideo} onHide={handleClosevideo} size="xl" >
                  <div className="modal-xl">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="video-submit-model">
                          <form onSubmit={contentdetailSubmit}>
                            <div className="row justify-content-between">
                              <div className="col-md-7">
                                <h6 className="stats-page-title">Nieuwe content uploaden</h6>
                                <h5>Details</h5>
                                <input type="text" onChange={handleContentinputs} name="contentTitle" placeholder="Titel van je video" />
                                <textarea rows="5" onChange={handleContentinputs} name="contentDescription" placeholder="Beschrijving van je video" />
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
                                <p className="mb-1"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                </svg> Titel
                                </p>
                                <p className="mb-1">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                  </svg> Beschrijving</p>
                                <p className="mb-1">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                  </svg> Thumbnail
                                </p>
                                <p className="mb-1">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.409 9.8895L1.22701 6.7075L2.642 5.2925L4.409 7.0645L9.358 2.1105L10.773 3.5255L4.409 9.8895Z" fill="#65006B" />
                                  </svg> Comments aan / uit
                                </p>
                                <input className="form-submit" type="submit" value="Video plaatsen" /* data-bs-dismiss="modal" */ />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
                <Modal show={showimage} onHide={handleCloseimage} size="lg" >
                  <div className="modal-lg">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="video-submit-model">
                          <div className="row justify-content-between">
                            <div className="col-md-12">
                              <h6 className="stats-page-title">Nieuwe foto uploaden</h6>
                              <h5>Details</h5>
                              <form onSubmit={contentdetailSubmit}>
                                <input type="text" onChange={handleContentinputs} name="contentTitle" placeholder="Titel van je foto" />
                                <textarea rows="5" onChange={handleContentinputs} name="contentDescription" placeholder="Beschrijving van je foto" />
                                <div className="d-flex justify-content-between align-item-start mt-4">
                                  <div className="video-de pe-3">
                                    <label>Foto uploaden</label>
                                    <p>Selecteer hier een afbeelding die je op de feed van je subscribers wilt laten zien.</p>
                                    <img src={imageurl} width="200" />
                                    {/* <Dragger {...props}>
                                      <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                                      <p className="ant-upload-text text-center">
                                        <svg className="mb-2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19.7917 13.5417C19.5154 13.5417 19.2505 13.6514 19.0551 13.8468C18.8598 14.0421 18.75 14.3071 18.75 14.5833V14.9792L17.2083 13.4375C16.664 12.8974 15.9283 12.5944 15.1615 12.5944C14.3947 12.5944 13.6589 12.8974 13.1146 13.4375L12.3854 14.1667L9.80209 11.5833C9.25013 11.0579 8.51727 10.7649 7.75522 10.7649C6.99317 10.7649 6.2603 11.0579 5.70834 11.5833L4.16668 13.125V7.29167C4.16668 7.0154 4.27642 6.75045 4.47177 6.5551C4.66712 6.35975 4.93208 6.25 5.20834 6.25H12.5C12.7763 6.25 13.0412 6.14025 13.2366 5.9449C13.4319 5.74955 13.5417 5.4846 13.5417 5.20833C13.5417 4.93207 13.4319 4.66711 13.2366 4.47176C13.0412 4.27641 12.7763 4.16667 12.5 4.16667H5.20834C4.37954 4.16667 3.58469 4.49591 2.99863 5.08196C2.41258 5.66801 2.08334 6.46286 2.08334 7.29167V19.7917C2.08334 20.6205 2.41258 21.4153 2.99863 22.0014C3.58469 22.5874 4.37954 22.9167 5.20834 22.9167H17.7083C18.5371 22.9167 19.332 22.5874 19.9181 22.0014C20.5041 21.4153 20.8333 20.6205 20.8333 19.7917V14.5833C20.8333 14.3071 20.7236 14.0421 20.5282 13.8468C20.3329 13.6514 20.0679 13.5417 19.7917 13.5417ZM5.20834 20.8333C4.93208 20.8333 4.66712 20.7236 4.47177 20.5282C4.27642 20.3329 4.16668 20.0679 4.16668 19.7917V16.0729L7.18751 13.0521C7.34054 12.9062 7.54383 12.8249 7.75522 12.8249C7.96661 12.8249 8.16989 12.9062 8.32293 13.0521L11.625 16.3542L16.1042 20.8333H5.20834ZM18.75 19.7917C18.7485 19.9911 18.6828 20.1847 18.5625 20.3438L13.8646 15.625L14.5938 14.8958C14.6684 14.8196 14.7576 14.7591 14.856 14.7177C14.9543 14.6764 15.06 14.6551 15.1667 14.6551C15.2734 14.6551 15.379 14.6764 15.4774 14.7177C15.5758 14.7591 15.6649 14.8196 15.7396 14.8958L18.75 17.9271V19.7917ZM23.6563 4.46875L20.5313 1.34375C20.4322 1.24891 20.3154 1.17458 20.1875 1.125C19.9339 1.02081 19.6495 1.02081 19.3958 1.125C19.268 1.17458 19.1512 1.24891 19.0521 1.34375L15.9271 4.46875C15.7309 4.6649 15.6207 4.93093 15.6207 5.20833C15.6207 5.48573 15.7309 5.75177 15.9271 5.94792C16.1232 6.14407 16.3893 6.25426 16.6667 6.25426C16.9441 6.25426 17.2101 6.14407 17.4063 5.94792L18.75 4.59375V10.4167C18.75 10.6929 18.8598 10.9579 19.0551 11.1532C19.2505 11.3486 19.5154 11.4583 19.7917 11.4583C20.0679 11.4583 20.3329 11.3486 20.5282 11.1532C20.7236 10.9579 20.8333 10.6929 20.8333 10.4167V4.59375L22.1771 5.94792C22.2739 6.04555 22.3891 6.12304 22.5161 6.17593C22.643 6.22881 22.7792 6.25604 22.9167 6.25604C23.0542 6.25604 23.1903 6.22881 23.3173 6.17593C23.4442 6.12304 23.5594 6.04555 23.6563 5.94792C23.7539 5.85108 23.8314 5.73587 23.8843 5.60893C23.9372 5.482 23.9644 5.34584 23.9644 5.20833C23.9644 5.07082 23.9372 4.93467 23.8843 4.80773C23.8314 4.68079 23.7539 4.56559 23.6563 4.46875Z"
                                            fill="#65006B"
                                          />
                                        </svg>
                                        <br />
                                        Upload hier je foto
                                      </p>
                                    </Dragger> */}
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
                    </div>
                  </div>
                </Modal>
                <div className="modal fade" id="message-submit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="video-submit-model">
                          <div className="row justify-content-between">
                            <div className="col-md-12">

                              <h6 className="stats-page-title">Nieuwe bericht plaatsen</h6>
                              <h5>Details</h5>
                              <form onSubmit={contentdetailSubmit}>
                                <input type="text" onChange={handleContentinputs} name="contentTitle" placeholder="Titel van je bericht" />
                                <textarea rows="5" onChange={handleContentinputs} name="contentDescription" placeholder="Beschrijving van je bericht" />
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <div className="setting-tab">
                <div className="setting-tab-content">
                  <h6 className="stats-page-title">Recent geüploade content</h6>

                  <table className="table">
                    <thead>                      
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Views</th>
                        <th>Likes</th>
                        <th>Gemiddelde kijktijd</th>
                        <th>
                          <svg
                            width="15"
                            height="19"
                            viewBox="0 0 15 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 6.33333H12.5V16.625C12.5 16.835 12.4342 17.0363 12.3169 17.1848C12.1997 17.3333 12.0408 17.4167 11.875 17.4167H3.125C2.95924 17.4167 2.80027 17.3333 2.68306 17.1848C2.56585 17.0363 2.5 16.835 2.5 16.625V6.33333ZM3.75 7.91666V15.8333H11.25V7.91666H3.75ZM5.625 9.49999H6.875V14.25H5.625V9.49999ZM8.125 9.49999H9.375V14.25H8.125V9.49999ZM4.375 3.95833V2.37499C4.375 2.16503 4.44085 1.96367 4.55806 1.8152C4.67527 1.66674 4.83424 1.58333 5 1.58333H10C10.1658 1.58333 10.3247 1.66674 10.4419 1.8152C10.5592 1.96367 10.625 2.16503 10.625 2.37499V3.95833H13.75V5.54166H1.25V3.95833H4.375ZM5.625 3.16666V3.95833H9.375V3.16666H5.625Z"
                              fill="#C4C4C4"
                            />
                          </svg>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contentlist?.map((item, index) => {
                          return(
                            <tr key={index}>
                              <td>
                                <input type="checkbox" name="subscriber" />
                              </td>
                              <td>
                                <div className="subs-table-row d-flex justify-content-start align-items-center">
                                  <div className="video-thumb-sec">
                                    {
                                      (item.thumbnail != null ? <img src={`https://subfee.techstriker.com/backend/public/${item?.thumbnail}`} /> : <img src="" className="d-none" />)
                                    }                                    
                                    </div>
                                  <div>
                                    <p>{item.title}</p>
                                    <span><Moment format="DD/MM/YYYY">{item.updated_at}</Moment></span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.1713 7.308C14.4873 7.72134 14.4873 8.27934 14.1713 8.692C13.176 9.99134 10.788 12.6667 8 12.6667C5.212 12.6667 2.824 9.99134 1.82867 8.692C1.67492 8.49409 1.59146 8.25061 1.59146 8C1.59146 7.74939 1.67492 7.50591 1.82867 7.308C2.824 6.00867 5.212 3.33334 8 3.33334C10.788 3.33334 13.176 6.00867 14.1713 7.308V7.308Z"
                                    stroke="#65006B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                    stroke="#65006B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                12.584
                              </td>
                              <td>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.66666 2C2.826 2 1.33333 3.47733 1.33333 5.3C1.33333 6.77133 1.91666 10.2633 7.65866 13.7933C7.76152 13.8559 7.8796 13.889 8 13.889C8.12039 13.889 8.23847 13.8559 8.34133 13.7933C14.0833 10.2633 14.6667 6.77133 14.6667 5.3C14.6667 3.47733 13.174 2 11.3333 2C9.49266 2 8 4 8 4C8 4 6.50733 2 4.66666 2Z"
                                    stroke="#D90000" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                126 likes
                              </td>
                              <td>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.9375 10.7266L14.936 10.725L14.9344 10.7234C14.2453 9.26562 13.1781 8.51562 11.7578 8.51562C10.3375 8.51562 9.27032 9.26719 8.5797 10.7234V10.725C8.49532 10.9047 8.49532 11.1141 8.5797 11.2937C9.27032 12.75 10.3375 13.5 11.7578 13.5C13.1781 13.5 14.2453 12.7484 14.936 11.2922C15.0203 11.1125 15.0203 10.9047 14.9375 10.7266ZM11.7578 12.5C10.7875 12.5 10.0797 12.0312 9.55314 11.0078C10.0781 9.98438 10.7875 9.51562 11.7578 9.51562C12.7281 9.51562 13.4359 9.98438 13.9625 11.0078C13.4375 12.0312 12.7281 12.5 11.7578 12.5Z"
                                    fill="#65006B"
                                  />
                                  <path d="M10.8906 11.0156C10.8906 11.2477 10.9828 11.4702 11.1469 11.6343C11.311 11.7984 11.5336 11.8906 11.7656 11.8906C11.9977 11.8906 12.2202 11.7984 12.3843 11.6343C12.5484 11.4702 12.6406 11.2477 12.6406 11.0156C12.6406 10.7836 12.5484 10.561 12.3843 10.3969C12.2202 10.2328 11.9977 10.1406 11.7656 10.1406C11.5336 10.1406 11.311 10.2328 11.1469 10.3969C10.9828 10.561 10.8906 10.7836 10.8906 11.0156ZM2.125 3.625H13.125V7.57812H14.25V3C14.25 2.72344 14.0266 2.5 13.75 2.5H1.5C1.22344 2.5 1 2.72344 1 3V11.125C1 11.4016 1.22344 11.625 1.5 11.625H7V10.5H2.125V3.625Z"
                                    fill="#65006B"
                                  />
                                  <path d="M11.3266 5.28281L10.7516 4.70781C10.7031 4.65938 10.6234 4.65938 10.575 4.70781L7.70312 7.58281L6.35781 6.23594C6.30937 6.1875 6.22968 6.1875 6.18124 6.23594L3.92656 8.49063C3.87812 8.53906 3.87812 8.61875 3.92656 8.66719L4.50156 9.24219C4.54999 9.29063 4.62968 9.29063 4.67812 9.24219L6.26874 7.65156L7.61406 8.99844C7.66249 9.04688 7.74218 9.04688 7.79062 8.99844L11.3266 5.45938C11.3766 5.41094 11.3766 5.33125 11.3266 5.28281Z"
                                    fill="#65006B"
                                  />
                                </svg>
                                1m 46s
                              </td>
                              <td>
                                <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.5 2.45175C10.5 1.926 10.074 1.5 9.54825 1.5H8.4525C7.926 1.5 7.5 1.926 7.5 2.45175C7.5 2.88525 7.203 3.25725 6.79875 3.41625C6.735 3.44175 6.67125 3.46875 6.609 3.49575C6.21075 3.66825 5.7375 3.61575 5.43 3.309C5.25153 3.13066 5.00955 3.03048 4.75725 3.03048C4.50495 3.03048 4.26297 3.13066 4.0845 3.309L3.309 4.0845C3.13066 4.26297 3.03048 4.50495 3.03048 4.75725C3.03048 5.00955 3.13066 5.25153 3.309 5.43C3.6165 5.7375 3.669 6.21 3.495 6.609C3.46766 6.67179 3.44141 6.73505 3.41625 6.79875C3.25725 7.203 2.88525 7.5 2.45175 7.5C1.926 7.5 1.5 7.926 1.5 8.45175V9.54825C1.5 10.074 1.926 10.5 2.45175 10.5C2.88525 10.5 3.25725 10.797 3.41625 11.2013C3.44175 11.265 3.46875 11.3288 3.495 11.391C3.66825 11.7893 3.61575 12.2625 3.309 12.57C3.13066 12.7485 3.03048 12.9904 3.03048 13.2428C3.03048 13.4951 3.13066 13.737 3.309 13.9155L4.0845 14.691C4.26297 14.8693 4.50495 14.9695 4.75725 14.9695C5.00955 14.9695 5.25153 14.8693 5.43 14.691C5.7375 14.3835 6.21 14.331 6.609 14.5043C6.67125 14.532 6.735 14.5583 6.79875 14.5838C7.203 14.7428 7.5 15.1148 7.5 15.5483C7.5 16.074 7.926 16.5 8.45175 16.5H9.54825C10.074 16.5 10.5 16.074 10.5 15.5483C10.5 15.1148 10.797 14.7428 11.2013 14.583C11.265 14.5583 11.3288 14.532 11.391 14.505C11.7893 14.331 12.2625 14.3843 12.5693 14.691C12.6576 14.7794 12.7626 14.8496 12.8781 14.8974C12.9936 14.9453 13.1174 14.9699 13.2424 14.9699C13.3674 14.9699 13.4912 14.9453 13.6067 14.8974C13.7222 14.8496 13.8271 14.7794 13.9155 14.691L14.691 13.9155C14.8693 13.737 14.9695 13.4951 14.9695 13.2428C14.9695 12.9904 14.8693 12.7485 14.691 12.57C14.3835 12.2625 14.331 11.79 14.5043 11.391C14.532 11.3288 14.5583 11.265 14.5838 11.2013C14.7428 10.797 15.1148 10.5 15.5483 10.5C16.074 10.5 16.5 10.074 16.5 9.54825V8.4525C16.5 7.92675 16.074 7.50075 15.5483 7.50075C15.1148 7.50075 14.7428 7.20375 14.583 6.7995C14.5579 6.73579 14.5316 6.67253 14.5043 6.60975C14.3318 6.2115 14.3843 5.73825 14.691 5.43075C14.8693 5.25228 14.9695 5.0103 14.9695 4.758C14.9695 4.5057 14.8693 4.26372 14.691 4.08525L13.9155 3.30975C13.737 3.13141 13.4951 3.03123 13.2428 3.03123C12.9904 3.03123 12.7485 3.13141 12.57 3.30975C12.2625 3.61725 11.79 3.66975 11.391 3.4965C11.3282 3.46891 11.265 3.4424 11.2013 3.417C10.797 3.25725 10.5 2.88525 10.5 2.4525V2.45175Z" stroke="#C4C4C4" stroke-width="1.33333" />
                                  <path d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9V9Z" stroke="#C4C4C4" stroke-width="1.33333" />
                                </svg>
                                </span>
                              </td>
                            </tr>
                          );
                      })}
                      
                    </tbody>
                  </table>
                  <div className="text-center mt-4 pt-4">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link content-next-table" href="#">
                            Volgende
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
