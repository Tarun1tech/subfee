import React, { useState } from "react";
// antd upload
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import Profile from "./profile";
import SocialAccount from "./socialAccount";
import Policy from "./policy";
import Thema from "./thema";
import VideoDescription from "./videoDescription";
import ContactUs from "./contactus";
import FAQ from "./faq";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const ProfileUpdate = () => {
  // antd upload
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
  ]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const antdhandleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div className="myantd-btn">
      <div>
        Afbeelding toevoegen
      </div>
    </div>
  );
  return (
    <>
      <div className="dash-content-side profile-update-tab">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="setting-tab">
                <div class="profile_update_tabs align-items-start">
                  <div class="nav verti flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <span className="sidenav-title">PROFIEL</span>
                    <button class="nav-link active" id="account-details" data-bs-toggle="pill" data-bs-target="#account-details-tab" type="button" role="tab" aria-controls="account-details-tab" aria-selected="true">Accountgegevens</button>
                    <button class="nav-link" id="social-accounts" data-bs-toggle="pill" data-bs-target="#social-accounts-tab" type="button" role="tab" aria-controls="social-accounts-tab" aria-selected="false">Social Media accounts</button>
                    <button class="nav-link" id="legal-info" data-bs-toggle="pill" data-bs-target="#legal-info-tab" type="button" role="tab" aria-controls="legal-info-tab" aria-selected="false">Wettelijke gegevens</button>
                    <span className="sidenav-title">PLATFORM</span>
                    <button class="nav-link" id="platform-appearance" data-bs-toggle="pill" data-bs-target="#platform-appearance-tab" type="button" role="tab" aria-controls="platform-appearance-tab" aria-selected="false">Uiterlijk van je platform </button>
                    <button class="nav-link" id="video-desc" data-bs-toggle="pill" data-bs-target="#video-desc-tab" type="button" role="tab" aria-controls="video-desc-tab" aria-selected="false">Videobeschrijvingen</button>
                    <span className="sidenav-title">ONDERSTEUNING</span>
                    <button class="nav-link" id="contact-support" data-bs-toggle="pill" data-bs-target="#contact-support-tab" type="button" role="tab" aria-controls="contact-support-tab" aria-selected="false">Contact support</button>
                    <button class="nav-link" id="faq" data-bs-toggle="pill" data-bs-target="#faq-tab" type="button" role="tab" aria-controls="faq-tab" aria-selected="false">Veelgestelde vragen</button>
                  </div>
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="account-details-tab" role="tabpanel" aria-labelledby="account-details">
                      <Profile />
                    </div>
                    <div class="tab-pane fade" id="social-accounts-tab" role="tabpanel" aria-labelledby="social-accounts">
                      <SocialAccount />
                    </div>
                    <div class="tab-pane fade" id="legal-info-tab" role="tabpanel" aria-labelledby="legal-info">
                      <Policy />
                    </div>
                    <div class="tab-pane fade" id="platform-appearance-tab" role="tabpanel" aria-labelledby="platform-appearance">
                      <Thema />
                    </div>
                    <div class="tab-pane fade" id="video-desc-tab" role="tabpanel" aria-labelledby="video-desc">
                      <VideoDescription />
                    </div>
                    <div class="tab-pane fade" id="contact-support-tab" role="tabpanel" aria-labelledby="contact-support">
                      <ContactUs />
                    </div>
                    <div class="tab-pane fade" id="faq-tab" role="tabpanel" aria-labelledby="faq">
                      <FAQ />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default ProfileUpdate;