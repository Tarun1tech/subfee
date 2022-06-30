import React, { useState } from "react";
import WhiteLogo from "../assets/images/light-logo.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { email_verify } from "../redux/auth/actions";

const EmailVerification = (props) => {

    const [formErrors, setFormErrors] = useState({});
    const [inputs, setInputs] = useState({
        email: ""
    });
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!values.email || !regexEmail.test(values.email)) {
            errors.email = `Enter a valid email.`;
        }
        return errors;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        setFormErrors(validate(inputs));
        e.preventDefault();
        if (Object.keys(validate(inputs)).length === 0) {
            props.email_verify({
                "email": inputs.email
            });
        }
    }

    return (
        <>
            <div className="login_back">
                <div>
                    <img className="light_logo" src={WhiteLogo} alt="logo" />
                    <div className="login_card">
                        <h4 className="small_heading">
                            Verify your email
                        </h4>
                        <p className="text">Fill your email on below input box</p>
                        <form onSubmit={handleSubmit}>
                            <label>Registered Email</label>
                            <input type="email" name="email" onChange={handleChange} />
                            {formErrors.email && (
                                <span className="error">{formErrors.email}</span>
                            )}
                            <input type="submit" className="submit" value="Verify email" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, { email_verify })(EmailVerification);