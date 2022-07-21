import React, { useState } from "react";
// antd upload
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

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
    return(
        <>
        <div className="dash-content-side profile-update-tab">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="setting-tab">
              <div class="d-flex align-items-start">
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
                    <div className="setting-tab-content">                      
                      <form>
                        <h6>Accountgegevens</h6>
                        <p className="sml-heading">Profiel</p>
                        <p>Deze informatie wordt getoond wanneer mensen je profiel opzoeken.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="pe-3 w-100">
                            <label>Voornaam</label>
                            <input type="text" name="first_name"/>
                          </div>
                          <div className="ps-3 w-100">
                            <label>Achternaam</label>
                            <input type="text" name="last_name"/>
                          </div>
                        </div>
                        <label>Gebruikersnaam</label>
                        <input type="text" name="username"/>
                        <p className="sml-heading">Persoonlijke gegevens</p>
                        <p>Verander je persoonlijke contactgegevens.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="pe-3 w-100">
                            <label>E-mailadres</label>
                            <input type="text" name="emaill"/>
                          </div>
                          <div className="ps-3 w-100">
                            <label>Telefoonnummer</label>
                            <input type="text" name="telphone_number"/>
                          </div>
                        </div>
                        <p className="sml-heading">Wachtwoord wijzigen</p>
                        <p>Hier kan je je bestaande wachtwoord wijzigen naar een ander wachtwoord.</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="pe-3 w-100">
                            <label>Oude wachtwoord</label>
                            <input type="passowrd" name="old_password"/>
                          </div>
                          <div className="ps-3 w-100">
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="pe-3 w-100">
                            <label>Nieuwe wachtwoord</label>
                            <input type="passowrd" name="new_password"/>
                          </div>
                          <div className="ps-3 w-100">
                            <label>Herhaal nieuwe wachtwoord</label>
                            <input type="passowrd" name="reenter_new_password"/>
                          </div>
                        </div>
                        <div class="mb-4"><input class="form-submit" type="submit" value="Wijzigen"/></div>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="social-accounts-tab" role="tabpanel" aria-labelledby="social-accounts">
                  <div className="setting-tab-content">                      
                      <form>
                        <h6>Social Media accounts</h6>
                        <p className="sml-heading">Accounts verbinden</p>
                        <p>Deze social media accounts worden op je platform getoond.</p>
                        <label>Instagram</label>
                        <input type="text" name="instagram"/>
                        <label>Facebook</label>
                        <input type="text" name="facebook"/>
                        <label>Youtube</label>
                        <input type="text" name="youtube"/>
                        <label>Twitter</label>
                        <input type="text" name="Twitter"/>                     
                        
                        <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan"/></div>
                      </form>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="legal-info-tab" role="tabpanel" aria-labelledby="legal-info">
                  <div className="setting-tab-content">
                  <form>
                    <h6>Wettelijke gegevens</h6>
                    <p className="sml-heading">Algemene voorwaarden</p>
                    <p>Deze worden getoond op de algemene voorwaarden pagina op jouw platform.</p>
                    <textarea name="termscondition" />
                    <p className="sml-heading">Privacy statement</p>
                    <p>Deze worden getoond op de privacy statement pagina op jouw platform.</p>
                    <textarea name="termscondition" />
                    <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan"/></div>
                  </form>
                  </div>
                  </div>
                  <div class="tab-pane fade" id="platform-appearance-tab" role="tabpanel" aria-labelledby="platform-appearance">
                  <div className="setting-tab-content">
                  <form>
                    <h6>Uiterlijk van je platform</h6>
                    <p className="sml-heading">Afbeeldingen toevoegen</p>
                    <p>Voeg afbeeldingen toe om je platform nóg persoonlijker te maken!</p>
                    <div className="row">
                    <div className="col-md-9">
                      <label>Logo</label>
                      <p>Dit logo wordt getoond op het inlogscherm en op jouw eigen platform.</p>
                    </div>
                    <div className="col-md-3">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={antdhandleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                      <img
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-9">
                      <label>Achtergrond voor log-in scherm</label>
                      <p>De afbeelding die getoond wordt achter de log-in module.</p>
                    </div>
                    <div className="col-md-3">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={antdhandleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                      <img
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-9">
                      <label>Bannerafbeelding </label>
                      <p>Deze banner wordt bovenaan jouw eigen platform getoond.</p>
                    </div>
                    <div className="col-md-3">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={antdhandleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                      <img
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-9">
                      <label>Favicon</label>
                      <p>De afbeelding die wordt gebruikt in het browsertabblad.</p>
                    </div>
                    <div className="col-md-3">
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={antdhandleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                      <img
                        alt="example"
                        style={{
                          width: '100%',
                        }}
                        src={previewImage}
                      />
                    </Modal>
                    </div>
                    </div>
                    <p className="small-g">De afbeelding die wordt gebruikt in het browsertabblad.</p>
                    <p>Pas de kleuren aan zodat jouw platform perfect aansluit op jouw huisstijl!</p>
                    <input type="color" name="primary_color" value="#c60000"/>
                    <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan"/></div>
                  </form>
                  </div>
                  </div>
                  <div class="tab-pane fade" id="video-desc-tab" role="tabpanel" aria-labelledby="video-desc">
                  <div className="setting-tab-content">
                  <form>
                    <h6>Videobeschrijvingen</h6>
                    <p className="sml-heading">Standaard beschrijving toevoegen</p>
                    <p>Maak het jezelf makkelijk en voeg een standaard beschrijving toe aan je video’s.</p>
                    <textarea name="video-desc" />
                    <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan"/></div>
                  </form>
                  </div>
                  </div>
                  <div class="tab-pane fade" id="contact-support-tab" role="tabpanel" aria-labelledby="contact-support">
                    <div className="row">
                      <div className="col-md-8">
                      <div className="setting-tab-content me-0">                      
                        <form>
                          <h6>Support ticket indienen</h6>
                          <p className="sml-heading">Neem contact met ons op</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="pe-3 w-100">
                              <label>Volledige naam</label>
                              <input type="text" name="full-name"/>
                            </div>
                            <div className="ps-3 w-100">
                              <label>Telefoonnummer</label>
                              <input type="text" name="tele-phone"/>
                            </div>
                          </div>
                          <label>E-mailadres</label>
                          <input type="email" name="emailll"/>
                          <label>Vraag of opmerking</label>
                          <input type="text" name="question-remark"/>                          
                          <div class="mb-4"><input class="form-submit" type="submit" value="Wijzigen"/></div>
                        </form>
                      </div>
                      </div>
                      <div className="col-md-4">
                      <div className="setting-tab-content ms-0">              
                        <form>
                          <h6>Telefonisch support</h6>
                          <p className="sml-heading">Alleen gebruiken bij spoed!</p>
                          <div className="tele-btn">
                            <button><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6875 20.8438H18.5653C4.44189 20.0316 2.43657 8.11469 2.15626 4.47781C2.13367 4.19504 2.1671 3.91059 2.25464 3.64076C2.34217 3.37094 2.48209 3.12103 2.66637 2.90537C2.85065 2.68971 3.07567 2.51253 3.32855 2.38398C3.58142 2.25543 3.85718 2.17804 4.14001 2.15625H8.10032C8.38822 2.15597 8.66957 2.24215 8.90793 2.40362C9.14629 2.56509 9.33067 2.79441 9.4372 3.06188L10.5297 5.75C10.6349 6.0113 10.661 6.29774 10.6048 6.57375C10.5485 6.84976 10.4125 7.10317 10.2134 7.3025L8.68251 8.84781C8.92165 10.2068 9.57245 11.4595 10.5469 12.4365C11.5213 13.4135 12.7723 14.0676 14.1306 14.3103L15.6903 12.765C15.8926 12.5682 16.1484 12.4353 16.4258 12.3829C16.7032 12.3305 16.9898 12.3609 17.25 12.4703L19.9597 13.5556C20.2231 13.6655 20.4479 13.8513 20.6053 14.0894C20.7628 14.3275 20.8458 14.6071 20.8438 14.8925V18.6875C20.8438 19.2594 20.6166 19.8078 20.2122 20.2122C19.8078 20.6166 19.2594 20.8438 18.6875 20.8438ZM4.31251 3.59375C4.12189 3.59375 3.93907 3.66948 3.80428 3.80427C3.66949 3.93906 3.59376 4.12188 3.59376 4.3125V4.37C3.92439 8.625 6.0447 18.6875 18.6444 19.4062C18.7388 19.4121 18.8335 19.3992 18.9229 19.3684C19.0123 19.3376 19.0948 19.2894 19.1656 19.2266C19.2364 19.1639 19.2941 19.0877 19.3354 19.0026C19.3767 18.9175 19.4008 18.8251 19.4063 18.7306V14.8925L16.6966 13.8072L14.6338 15.8556L14.2888 15.8125C8.03563 15.0291 7.18751 8.77594 7.18751 8.71125L7.14438 8.36625L9.18564 6.30344L8.10751 3.59375H4.31251Z" fill="#E60000"/>
                            </svg>
                            Telefonisch support</button>
                          </div>
                        </form>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="faq-tab" role="tabpanel" aria-labelledby="faq">
                    <div className="setting-tab-content">
                      <form>
                        <h6>Veelgestelde vragen</h6>
                        <p className="small-heading">Heb je vragen? Wij zijn er om te helpen.</p>
                        <div className="faq-subfee">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              Veelgestelde vraag 1
                              </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                              Veelgestelde vraag 2
                              </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                              Veelgestelde vraag 3
                              </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                          </div>
                        </div>
                        </div>
                      </form>
                    </div>
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