import React, {useState} from 'react';
import WhiteLogo from "../assets/images/light-logo.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';




const ForgotPassword = () => {

    const userInputs = {
        newPassword:"",
        reEnteredpassword:"",
    }

    const [inputs, setInputs] = useState(userInputs);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const {email} = useParams();


    const changePassword = (e) => {
        e.preventDefault();
        axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}api/reset-password`, {
            "email": email,
            "password":inputs.newPassword,
            "confirm_password":inputs.reEnteredpassword
        })
        .then((response) => {
            if(response.data.success === true){
                toast.success(response.data.message)
            }else{
                toast.error(response.data.message)
            }
        })
    }


    return(
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
                <form onSubmit={changePassword}>
                <label>Nieuw wachtwoord*</label>
                <input type="password" name="newPassword" onChange={handleInputChange} required/>
                <label>Wachtwoord bevestigen*</label>
                <input type="password" name="reEnteredpassword" onChange={handleInputChange} required/>
                <input type="submit" className="submit" value="Wachtwoord wijzigen" />
                </form>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ForgotPassword;
