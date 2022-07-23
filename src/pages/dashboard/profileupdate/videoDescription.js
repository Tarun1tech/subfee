import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_profile, get_profile_data } from "../../../redux/settings/actions";


const VideoDescription = (props) => {
    const { createSetting } = props;
    const profileFields = {

        video_desc: "",
        // instagram_url: "",
        // twitter_url: "",
        // facebook_url: "",
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
            default_video_descriptions: inputs.video_desc || props.profileData?.default_video_descriptions,
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
                    <h6>Videobeschrijvingen</h6>
                    <p className="sml-heading">Standaard beschrijving toevoegen</p>
                    <p>Maak het jezelf makkelijk en voeg een standaard beschrijving toe aan je video’s.</p>
                    <textarea name="video_desc"  onChange={handleChange} defaultValue={props.profileData?.default_video_descriptions} />
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

export default connect(mapStateToProps, { create_profile, get_profile_data })(VideoDescription);
