import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_contact_us, get_profile_data } from "../../../redux/settings/actions";


const ContactUs = (props) => {
    const { createSetting } = props;
    const profileFields = {
        question_or_remark: "",
        first_name: "",
        email: "",
        phone_number: ""
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

            question_or_remark: inputs.message,
            full_name: inputs.first_name || props.profileData?.first_name,
            email: inputs.email || props.profileData?.email,
            phone_number: inputs.phone_number || props.profileData?.phone_number

        }
        if (Object.keys(validate(inputs)).length === 0) {
            props.create_contact_us(payload);
            document.getElementById("contactForm").reset();
        }

    }

    useEffect(() => {
        if (createSetting?.data.success) {
            props.get_profile_data();
        }
    }, [createSetting])
    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <div className="setting-tab-content me-0">
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <h6>Support ticket indienen</h6>
                            <p className="sml-heading">Neem contact met ons op</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="pe-3 w-100">
                                    <label>Volledige naam</label>
                                    <input type="text" name="first_name" onChange={handleChange} defaultValue={props.profileData?.first_name} />
                                </div>
                                <div className="ps-3 w-100">
                                    <label>Telefoonnummer</label>
                                    <input type="number" name="phone_number" onChange={handleChange} defaultValue={props.profileData?.phone_number} />
                                </div>
                            </div>
                            <label>E-mailadres</label>
                            <input type="email" name="email" onChange={handleChange} defaultValue={props.profileData?.email} disabled />
                            <label>Vraag of opmerking</label>
                            <input type="text" name="message" onChange={handleChange} />
                            <div class="mb-4"><input class="form-submit" type="submit" value="Indienen" /></div>
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
                                    <path d="M18.6875 20.8438H18.5653C4.44189 20.0316 2.43657 8.11469 2.15626 4.47781C2.13367 4.19504 2.1671 3.91059 2.25464 3.64076C2.34217 3.37094 2.48209 3.12103 2.66637 2.90537C2.85065 2.68971 3.07567 2.51253 3.32855 2.38398C3.58142 2.25543 3.85718 2.17804 4.14001 2.15625H8.10032C8.38822 2.15597 8.66957 2.24215 8.90793 2.40362C9.14629 2.56509 9.33067 2.79441 9.4372 3.06188L10.5297 5.75C10.6349 6.0113 10.661 6.29774 10.6048 6.57375C10.5485 6.84976 10.4125 7.10317 10.2134 7.3025L8.68251 8.84781C8.92165 10.2068 9.57245 11.4595 10.5469 12.4365C11.5213 13.4135 12.7723 14.0676 14.1306 14.3103L15.6903 12.765C15.8926 12.5682 16.1484 12.4353 16.4258 12.3829C16.7032 12.3305 16.9898 12.3609 17.25 12.4703L19.9597 13.5556C20.2231 13.6655 20.4479 13.8513 20.6053 14.0894C20.7628 14.3275 20.8458 14.6071 20.8438 14.8925V18.6875C20.8438 19.2594 20.6166 19.8078 20.2122 20.2122C19.8078 20.6166 19.2594 20.8438 18.6875 20.8438ZM4.31251 3.59375C4.12189 3.59375 3.93907 3.66948 3.80428 3.80427C3.66949 3.93906 3.59376 4.12188 3.59376 4.3125V4.37C3.92439 8.625 6.0447 18.6875 18.6444 19.4062C18.7388 19.4121 18.8335 19.3992 18.9229 19.3684C19.0123 19.3376 19.0948 19.2894 19.1656 19.2266C19.2364 19.1639 19.2941 19.0877 19.3354 19.0026C19.3767 18.9175 19.4008 18.8251 19.4063 18.7306V14.8925L16.6966 13.8072L14.6338 15.8556L14.2888 15.8125C8.03563 15.0291 7.18751 8.77594 7.18751 8.71125L7.14438 8.36625L9.18564 6.30344L8.10751 3.59375H4.31251Z" fill="#E60000" />
                                </svg>
                                    Telefonisch support</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    profileData: state.setting.profile_data?.data,
    createContact: state.setting.create_contact?.data
});

export default connect(mapStateToProps, { create_contact_us, get_profile_data })(ContactUs);
