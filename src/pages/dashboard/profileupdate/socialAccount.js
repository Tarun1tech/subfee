import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_profile, get_profile_data } from "../../../redux/settings/actions";

const SocialAccount = (props) => {
    const { createSetting } = props;
    const profileFields = {

        // video_desc: "",
        instagram_url: "",
        twitter_url: "",
        facebook_url: "",
        // youtube_url: "",
        // terms_condition: "",
        // privacy_statement: "",
        // password_confirmation:""
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
        e.preventDefault();
        const payload = {
            name:  props.profileData?.name,
            first_name:  props.profileData?.first_name,
            instagram_url: inputs.instagram_url || props.profileData?.instagram_url,
            twitter_url: inputs.twitter_url || props.profileData?.twitter_url,
            facebook_url: inputs.facebook_url || props.profileData?.facebook_url,
            youtube_url: inputs.youtube_url || props.profileData?.youtube_url,
            // legal_information: inputs.terms_condition || props.profileData?.terms_condition,
            // privacy_statement: inputs.privacy_statement || props.profileData?.privacy_statement
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
                    <h6>Social Media accounts</h6>
                    <p className="sml-heading">Accounts verbinden</p>
                    <p>Deze social media accounts worden op je platform getoond.</p>
                    <label>Instagram URL</label>
                    <input type="text" name="instagram_url" onChange={handleChange} defaultValue={props.profileData?.instagram_url} />
                    <label>Twitter URL</label>
                    <input type="text" name="twitter_url" onChange={handleChange} defaultValue={props.profileData?.twitter_url} />
                    <label>Facebook URL</label>
                    <input type="text" name="facebook_url" onChange={handleChange} defaultValue={props.profileData?.facebook_url} />
                    <label>Youtube URL</label>
                    <input type="text" name="youtube_url" onChange={handleChange} defaultValue={props.profileData?.youtube_url} />
                    <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan" /></div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    profileData: state.setting.profile_data?.data,
    createSetting: state.setting.create_profile?.data
});

export default connect(mapStateToProps, { create_profile, get_profile_data })(SocialAccount);
