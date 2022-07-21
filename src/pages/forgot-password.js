import React, { useEffect, useState } from 'react';
import WhiteLogo from "../assets/images/light-logo.png";
import 'react-toastify/dist/ReactToastify.css';
import { connect } from "react-redux";
import { forgot_password } from "../redux/auth/actions";
import { useHistory } from 'react-router-dom';

const ForgotPassword = (props) => {

    const userInputs = {
        password: "",
        confirmPassword: "",
    }

    const [inputs, setInputs] = useState(userInputs);
    const [formErrors, setFormErrors] = useState({});
    const history = useHistory();
    let k = window.location.href.split("?").length - 1;
    let email = window.location.href.split("=")[k];

    const validate = (values) => {
        let errors = {};
        // const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
        if (!values.password) {
            errors.password = `Password is required`;
            // } else if (!regex.test(values.password)) {
            //     errors.password =
            //         `Password should be min 6 words`;
            // }
        } else if (values.password > 6) {
            errors.password = `Password should be min 6 words`
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = `Password must be same`;
        } else if (values.password !== values.confirmPassword) {
            errors.confirmPassword = `Confirm password doesn't match`;
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
            props.forgot_password({
                "email": email,
                "password": inputs.password,
                "confirm_password": inputs.confirmPassword
            });
        }

    }

    useEffect(() => {
        if (props.auth.user.data?.success === true) {
            history.push("/login")
        }
    }, [props])

    return (
        <>
            <div>
                <div className="login_back">
                    <div>
                        <img className="light_logo" src={WhiteLogo} alt="logo" />
                        <div className="login_card">
                            <h4 className="small_heading">
                                Wachtwoord vergeten
                            </h4>
                            <p className="text">Vraag hier een nieuw wachtwoord aan</p>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Nieuw wachtwoord*</label>
                                    <input type="password" name="password" onChange={handleChange} />
                                    {formErrors.password && (
                                        <span className="error">{formErrors.password}</span>
                                    )}
                                </div>
                                <div>
                                    <label>Wachtwoord bevestigen*</label>
                                    <input type="password" name="confirmPassword" onChange={handleChange} />
                                    {formErrors.confirmPassword && (
                                        <span className="error">{formErrors.confirmPassword}</span>
                                    )}
                                </div>
                                <input type="submit" className="submit" value="Wachtwoord wijzigen" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, { forgot_password })(ForgotPassword);