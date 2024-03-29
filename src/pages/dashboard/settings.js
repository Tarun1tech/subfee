import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_profile, get_profile_data } from "../../redux/settings/actions";
import Thema from "./thema";

const DashContentSide = (props) => {
  const { createSetting } = props;
  const profileFields = {
    website_name: "",
    first_name: "",
    last_name: "",
    email: "",
    current_password: "",
    old_password: "",
    video_desc: "",
    instagram_url: "",
    twitter_url: "",
    facebook_url: "",
    youtube_url: "",
    terms_condition: "",
    privacy_statement: ""
  }
  const [inputs, setInputs] = useState(profileFields);
  const token = localStorage.getItem("access_token")
  useEffect(() => {
    props.get_profile_data();
  }, [token]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }


  const handleSubmit = (e) => {
    // setFormErrors(validate(inputs));
    e.preventDefault();
    const payload = {
      name: inputs.website_name || props.profileData?.name,
      first_name: inputs.first_name || props.profileData?.first_name,
      last_name: inputs.last_name || props.profileData?.last_name,
      email: inputs.email || props.profileData?.email,
      newpassword: inputs.current_password,
      oldpassword: inputs.old_password,
      default_video_descriptions: inputs.video_desc || props.profileData?.default_video_descriptions,
      instagram_url: inputs.instagram_url || props.profileData?.instagram_url,
      twitter_url: inputs.twitter_url || props.profileData?.twitter_url,
      facebook_url: inputs.facebook_url || props.profileData?.facebook_url,
      youtube_url: inputs.youtube_url || props.profileData?.youtube_url,
      legal_information: inputs.terms_condition || props.profileData?.terms_condition,
      privacy_statement: inputs.privacy_statement || props.profileData?.privacy_statement
    }
    props.create_profile(payload);
    document.getElementById("profileForm").reset();

  }

  useEffect(() => {
    if (createSetting?.data.success) {
      props.get_profile_data();
    }
  }, [createSetting])


  return (
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="setting-tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Algemeen
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Thema
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Kanaal
                    </button>
                    <button
                      style={{ color: "#959595" }}
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      disabled
                    >
                      Layout{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 7.25H11.9375V3.75C11.9375 2.64531 11.0422 1.75 9.9375 1.75H6.0625C4.95781 1.75 4.0625 2.64531 4.0625 3.75V7.25H3C2.72344 7.25 2.5 7.47344 2.5 7.75V13.75C2.5 14.0266 2.72344 14.25 3 14.25H13C13.2766 14.25 13.5 14.0266 13.5 13.75V7.75C13.5 7.47344 13.2766 7.25 13 7.25ZM5.1875 3.75C5.1875 3.26719 5.57969 2.875 6.0625 2.875H9.9375C10.4203 2.875 10.8125 3.26719 10.8125 3.75V7.25H5.1875V3.75ZM12.375 13.125H3.625V8.375H12.375V13.125ZM7.5625 10.9531V11.7812C7.5625 11.85 7.61875 11.9062 7.6875 11.9062H8.3125C8.38125 11.9062 8.4375 11.85 8.4375 11.7812V10.9531C8.56648 10.8605 8.66275 10.7294 8.71245 10.5786C8.76216 10.4278 8.76273 10.2651 8.71409 10.114C8.66545 9.96281 8.57011 9.831 8.44179 9.73749C8.31346 9.64398 8.15878 9.5936 8 9.5936C7.84122 9.5936 7.68654 9.64398 7.55821 9.73749C7.42989 9.831 7.33455 9.96281 7.28591 10.114C7.23727 10.2651 7.23784 10.4278 7.28755 10.5786C7.33725 10.7294 7.43352 10.8605 7.5625 10.9531Z"
                          fill="#959595"
                        />
                      </svg>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="col-md-12">
                      <div className="setting-tab-content">
                        <div className="container-fluid">
                          <form id="profileForm" onSubmit={handleSubmit}>
                            <div className="row justify-content-between">
                              <div className="col-md-7">
                                <h6>Websitegegevens</h6>
                                <label>Websitenaam</label>
                                <input type="text" name="website_name" onChange={handleChange} defaultValue={props.profileData?.name} />
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="pe-3">
                                    <label>Voornaam</label>
                                    <input type="text" name="first_name" onChange={handleChange} defaultValue={props.profileData?.first_name} />
                                  </div>
                                  <div className="ps-3">
                                    <label>Achternaam</label>
                                    <input type="text" name="last_name" onChange={handleChange} defaultValue={props.profileData?.last_name} />
                                  </div>
                                </div>
                                <label>E-mailadres</label>
                                <input type="email" name="email" onChange={handleChange} defaultValue={props.profileData?.email} />
                                <div>
                                  <label>Wachtwoord wijzigen</label>
                                  <input type="text" name="old_password" placeholder="Oude wachtwoord" onChange={handleChange} />
                                  <input type="text" name="current_password" placeholder="Nieuwe wachtwoord" className="mt-4" onChange={handleChange} />
                                </div>
                                <div className="mb-4">
                                  <input
                                    className="form-submit"
                                    type="submit"
                                    value="Wijzigen"
                                    onClick={handleSubmit}
                                  />
                                </div>
                              </div>

                              <div className="col-md-4">
                                <h6>Videobeschrijvingen</h6>
                                <span>
                                  Standaard beschrijving onder video’s
                                </span>
                                <p>
                                  Plaats hier de standaard beschrijving die je
                                  onder elke video wilt plaatsen. Denk aan een
                                  bedankje aan je fans, social media etc.
                                </p>
                                <textarea name="video_desc" onChange={handleChange} defaultValue={props.profileData?.default_video_descriptions} />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-12">
                                <h6>Social media</h6>
                                <label>Instagram URL</label>
                                <input type="text" name="instagram_url" onChange={handleChange} defaultValue={props.profileData?.instagram_url} />
                                <label>Twitter URL</label>
                                <input type="text" name="twitter_url" onChange={handleChange} defaultValue={props.profileData?.twitter_url} />
                                <label>Facebook URL</label>
                                <input type="text" name="facebook_url" onChange={handleChange} defaultValue={props.profileData?.facebook_url} />
                                <label>Youtube URL</label>
                                <input type="text" name="youtube_url" onChange={handleChange} defaultValue={props.profileData?.youtube_url} />
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-md-12 mt-5">
                                <h6>Wettelijke gegevens</h6>
                                <label>Algemene voorwaarden</label>
                                <textarea name="terms_condition" onChange={handleChange} defaultValue={props.profileData?.legal_information} />
                                <label>Privacy statement</label>
                                <textarea name="privacy_statement" onChange={handleChange} defaultValue={props.profileData?.privacy_statement} />
                              </div>
                            </div>
                            <div className="text-end">
                              <input className="form-submit" type="submit" value="Opslaan" />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <Thema />
                    {/* <div className="col-md-9">
                      <div className="setting-tab-content">
                        <div className="container-fluid">
                      
                          <form onSubmit={handleThemeSubmit}>
                            <div className="row justify-content-between">
                              <div className="col-md-12">
                                <h6>Grafische vormgeving</h6>
                                <label>Logo</label>
                                <p>
                                  Het logo voor op je website (moet een
                                  transparante .png zijn)
                                </p>
                                <input type="file" name="logo" onChange={handleThemeChange}/>
                                <label>Log-in scherm achtergrond</label>
                                <p>
                                  De afbeelding die getoond wordt achter de log-in module
                                </p>
                                <input type="file" name="login_background_image" onChange={handleThemeChange}/>
                                <label>Headerafbeelding</label>
                                <p>
                                  De headerafbeelding voor bovenaan de dashboard
                                  pagina (max. 3000x750px)
                                </p>
                                <input type="file" name="header_image" onChange={handleThemeChange}/>
                                <label>Profielfoto</label>
                                <p>
                                  De profielfoto die wordt getoond wanneer je
                                  een nieuwe video upload (max. 1500x1500px)
                                </p>
                                <input type="file" name="profile_image" onChange={handleThemeChange} />
                                <label>Favicon</label>
                                <p>
                                  De afbeelding die wordt gebruikt in het
                                  browsertabblad
                                </p>
                                <input type="file" name="favicon" onChange={handleThemeChange} />
                                <h6 className="mt-5">Kleuren aanpassen</h6>
                                <label>Primaire kleur</label>
                                <input
                                  type="color"
                                  name="primary_color"
                                  value="#65006B"
                                  onChange={handleThemeChange}
                                />
                                <label>Secundaire kleur</label>
                                <input
                                  type="color"
                                  name="secondry_color"
                                  value="#FE6A6A"
                                  onChange={handleThemeChange}
                                />
                              </div>
                            </div>
                            <div className="text-end">
                              <input
                                className="form-submit"
                                type="submit"
                                value="Opslaan"
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="col-md-9">
                      <div className="setting-tab-content">
                        <form>
                          <h6>Kanaalinstellingen</h6>
                          <label>Kanaal verwijderen</label>
                          <p>
                            Je SubFee kanaal verwijderen.{" "}
                            <b>
                              Let op: deze actie kan niet teruggedraaid worden!
                            </b>
                          </p>
                          <button className="maroon-btn">
                            Kanaal verwijderen
                          </button>
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
    </div >
  );
};

const mapStateToProps = state => ({
  ...state,
  profileData: state.setting.profile_data?.data,
  createSetting: state.setting.create_profile?.data
});

export default connect(mapStateToProps, { create_profile, get_profile_data })(DashContentSide);
