import React, { useState, useEffect, useRef } from "react";
import Subs from "../../../assets/images/subs.png";
import { connect } from "react-redux";
import { create_profile, get_profile_data, check_username } from "../../../redux/settings/actions";

const Profile = (props) => {

    /* profile image */
    /* profile upload */
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(Subs)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])


    const ref = useRef();

    const handleRemove = () => {
        setPreview(Subs);
        ref.current.value = "";
        setSelectedFile("");
    }
    

    console.log(selectedFile, "selected filee")
    

    const { createSetting } = props;
    const profileFields = {
        name: "",
        current_password: "",
        password_confirmation: "",
    }

    const [inputs, setInputs] = useState(profileFields);
    const [formErrors, setFormErrors] = useState({});
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
    const validate = (values) => {
        let errors = {};

        if (values.current_password !== values.password_confirmation) {
            errors.password_confirmation = `Confirmation and New password must match be same`;
        }

        const regexUsername = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
        if (!values.name || !regexUsername.test(values.name)) {
            errors.username = `Enter valid username`;
        }

        return errors;
    };

    const handleSubmit = (e) => {
        /* setFormErrors(validate(inputs)); */
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", inputs.name || props.profileData.name);
        formdata.append("first_name", inputs.first_name || props.profileData.first_name);
        formdata.append("last_name", inputs.last_name || props.profileData.last_name);
        formdata.append("email", inputs.email || props.profileData?.email);
        formdata.append("user_image", selectedFile);
        formdata.append("phone_number", inputs.phone_number || props.profileData.phone_number);
        formdata.append("newpassword", inputs.current_password);
        formdata.append("oldpassword", inputs.old_password);
        formdata.append("password_confirmation", inputs.password_confirmation);
        props.create_profile(formdata);
        document.getElementById("profileForm").reset();
    }

    useEffect(() => {
        if (createSetting?.data.success) {
            props.get_profile_data();
        }
    }, [createSetting])

    /* check username api*/
    const handleUsername = (e) => {
        setFormErrors(validate(inputs));
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
        if (Object.keys(validate(inputs)).length === 0) {
        props.check_username({
            "user_name": inputs.name
        });
        }
    }
    

    return (
        <>
            <div className="setting-tab-content">
                <form id="profileForm" onSubmit={handleSubmit}>
                    <h6>Accountgegevens</h6>
                    <p className="sml-heading">Profiel</p>
                    <p>Deze informatie wordt getoond wanneer mensen je profiel opzoeken.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pe-3 w-100">
                            <label>Voornaam</label>
                            <input type="text" name="first_name" onChange={handleChange} defaultValue={props.profileData?.first_name} />
                        </div>
                        <div className="ps-3 w-100">
                            <label>Achternaam</label>
                            <input type="text" name="last_name" onChange={handleChange} defaultValue={props.profileData?.last_name} />
                        </div>
                    </div>
                    <label>Gebruikersnaam</label>
                    <input type="text" name="name" onChange={handleUsername} defaultValue={props.profileData?.name} />
                    <div>
                    {formErrors.username ? (
                    <small style={{color: "red"}}>{formErrors.username}</small>
                    ):
                    <small style={{color: "green"}}>{props.usernData}</small>}
                    </div>
                    <label>Profielfoto</label>
                    <div className="profile-upload">
                        <div className="pf-outer me-3">
                            {props.profileData?.profile_image === null ? <img src={selectedFile === undefined ? Subs : preview} /> : <img src={selectedFile === undefined ? props.profileData?.profiles_image : preview} />}
                        </div>
                        <div className="fr_up me-3">
                            <span>Aanpassen</span>
                            <input type='file' className="profile-upload" ref={ref} onChange={onSelectFile} />
                        </div>
                        <p onClick={handleRemove} className="cancel">Verwijderen</p>
                    </div>
                    <p className="sml-heading">Persoonlijke gegevens</p>
                    <p>Verander je persoonlijke contactgegevens.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pe-3 w-100">
                            <label>E-mailadres</label>
                            <input type="email" name="email" onChange={handleChange} defaultValue={props.profileData?.email} disabled />
                        </div>
                        <div className="ps-3 w-100">
                            <label>Telefoonnummer</label>
                            <input type="number" name="phone_number" onChange={handleChange} defaultValue={props.profileData?.phone_number} />

                        </div>
                    </div>
                    <p className="sml-heading">Wachtwoord wijzigen</p>
                    <p>Hier kan je je bestaande wachtwoord wijzigen naar een ander wachtwoord.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pe-3 w-100">
                            <label>Oude wachtwoord</label>
                            <input type="password" maxLength={15} name="old_password" placeholder="Oude wachtwoord" onChange={handleChange} />

                        </div>
                        <div className="ps-3 w-100">
                        </div>
                    </div>
                    <div className="password_change justify-content-between align-items-end">
                        <div className="pe-3 w-100">
                            <label>Nieuwe wachtwoord</label>
                            <input type="password" maxLength={15} name="current_password" placeholder="Nieuwe wachtwoord" onChange={handleChange} />

                        </div>
                        <div className="px-1 w-100">
                            <label>Herhaal nieuwe wachtwoord</label>
                            <input type="password" maxLength={15} name="password_confirmation" placeholder="Herhaal nieuwe wachtwoord" onChange={handleChange} />
                        </div>
                        <div className="change_pass ps-3 w-100">
                            <button className="border-0 btn-success rounded px-3 py-2">Wachtwoord wijzigen</button>
                        </div>

                    </div>
                    {formErrors.password_confirmation && (
                        <span className="error mt-2">{formErrors.password_confirmation}</span>
                    )}

                    <div className="mb-4"><input className="form-submit" type="submit" value="Opslaan" /></div>
                </form>
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    ...state,
    profileData: state.setting.profile_data?.data,
    createSetting: state.setting.create_profile?.data,
    usernData: state.setting?.check_user_name?.message
});

export default connect(mapStateToProps, { create_profile, get_profile_data, check_username })(Profile);
