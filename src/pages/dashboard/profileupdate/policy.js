import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_profile, get_profile_data } from "../../../redux/settings/actions";
import { EditorState, convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToHTML } from 'draft-convert';
const Policy = (props) => {
  const { createSetting, profileData, get_profile_data } = props;

  const token = localStorage.getItem("access_token")
  useEffect(() => {
    get_profile_data();
  }, [token, get_profile_data]);
  
  const termsPolicy = {
    terms: "",
    policy: ""
  }

  const [inputs, setInputs] = useState(termsPolicy);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    })   

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: props.profileData?.name,
      first_name: props.profileData?.first_name,
      legal_information: inputs.terms || profileData?.legal_information,
      privacy_statement: inputs.policy || props.profileData?.privacy_statement
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
    <>
      <div className="setting-tab-content">
        <form id="profileForm" onSubmit={handleSubmit}>
          <h6>Wettelijke gegevens</h6>
          <p className="sml-heading">Algemene voorwaarden</p>
          <p>
            Deze worden getoond op de algemene voorwaarden pagina op jouw
            platform.
          </p>
          <textarea name="terms" onChange={handleChange} defaultValue={props.profileData?.legal_information} />

          <p className="sml-heading">Privacy statement</p>
          <p>
            Deze worden getoond op de privacy statement pagina op jouw platform.
          </p>
          <textarea name="policy" onChange={handleChange} defaultValue={props.profileData?.privacy_statement} />

          <div class="mb-4">
            <input class="form-submit" type="submit" value="Opslaan" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  ...state,
  profileData: state.setting.profile_data?.data,
  createSetting: state.setting.create_profile?.data
});

export default connect(mapStateToProps, { create_profile, get_profile_data })(Policy);
