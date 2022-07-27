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

  let data = props?.profileData === undefined ? "<p></p>" : props.profileData?.privacy_statement
  const [contentState, setContentState] = useState(() => EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML(data)
    )
  ))
  let html = props?.profileData === undefined ? "<p></p>" : props.profileData?.legal_information
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML(html)
    )
  ))

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const onPrivacyChange = (contentState) => {
    setContentState(contentState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: props.profileData?.name,
      first_name: props.profileData?.first_name,
      legal_information: draftToHtml(convertToRaw(editorState.getCurrentContent())) || profileData?.legal_information,
      privacy_statement: draftToHtml(convertToRaw(contentState.getCurrentContent())) || props.profileData?.privacy_statement
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

          <Editor
            defaultEditorState={editorState}
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
          />

          <p className="sml-heading">Privacy statement</p>
          <p>
            Deze worden getoond op de privacy statement pagina op jouw platform.
          </p>
          <Editor
            defaultEditorState={editorState}
            editorState={contentState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onPrivacyChange}
          />

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
