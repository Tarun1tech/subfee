import React, {useState} from "react";
import WhiteLogo from "../assets/images/light-logo.png";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const EmailVerification = () => {

    const [verficationemail, setVerificatiomemail] = useState('');

    const vemailhandle = (e) => {
        setVerificatiomemail(e.target.value);        
    }

    const makeVerify =(e) =>{
        e.preventDefault();
        alert("Please wait")
        axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}api/forgot-password`, {
            "email":verficationemail
        })
        .then((response) => {
            console.log(response)
            if(response.data.success === true){
                toast.success(response.data.message);
            }else{
                console.log("error");
            }
        })
    }

    return(
        <>
        <div className="login_back">
            <div>
                
            <img className="light_logo" src={WhiteLogo} alt="logo" />
            <div className="login_card">
                <h4 className="small_heading">
                Verify your email
                </h4>
                <p className="text">Fill your email on below input box</p>
                <form onSubmit={makeVerify}>
                <label>Registered Email</label>
                <input type="email" name="verification-email" onChange={vemailhandle} required/>
                <small>Please wait after clicking button to check response.</small>
                <input type="submit" className="submit" value="Verify email" />
                </form>
            </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default EmailVerification;