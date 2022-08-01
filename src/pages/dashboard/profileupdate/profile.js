import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_profile, get_profile_data } from "../../../redux/settings/actions";

const Profile = (props) => {
    const { createSetting } = props;
    const profileFields = {

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

        return errors;
    };

    const handleSubmit = (e) => {
        setFormErrors(validate(inputs));
        e.preventDefault();
        const payload = {
            name: inputs.username || props.profileData?.name,
            first_name: inputs.first_name || props.profileData?.first_name,
            last_name: inputs.last_name || props.profileData?.last_name,
            email: inputs.email || props.profileData?.email,
            newpassword: inputs.current_password,
            oldpassword: inputs.old_password,
            password_confirmation: inputs.password_confirmation,
            phone_number: inputs.phone_number || props.profileData?.phone_number

        }
        if (Object.keys(validate(inputs)).length === 0) {
            props.create_profile(payload);
            document.getElementById("profileForm").reset();
        }

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
                    <input type="text" name="username" onChange={handleChange} defaultValue={props.profileData?.name} />
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
                            <input type="text" name="old_password" placeholder="Oude wachtwoord" onChange={handleChange} />

                        </div>
                        <div className="ps-3 w-100">
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="pe-3 w-100">
                            <label>Nieuwe wachtwoord</label>
                            <input type="text" name="current_password" placeholder="Nieuwe wachtwoord" className="mt-4" onChange={handleChange} />

                        </div>
                        <div className="ps-3 w-100">
                            <label>Herhaal nieuwe wachtwoord</label>
                            <input type="text" name="password_confirmation" placeholder="Herhaal nieuwe wachtwoord" className="mt-4" onChange={handleChange} />
                        </div>

                    </div>
                    {formErrors.password_confirmation && (
                        <span className="error mt-2">{formErrors.password_confirmation}</span>
                    )}

                    <div class="mb-4"><input class="form-submit" type="submit" value="Wijzigen" /></div>
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

export default connect(mapStateToProps, { create_profile, get_profile_data })(Profile);
