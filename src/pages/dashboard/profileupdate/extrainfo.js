import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { get_profile_data, create_ups } from "../../../redux/settings/actions";


const ExtraInfo = (props) => {

    const multiUps = {
        usp_one: "",
        usp_two: "",
        usp_three: "",
        usp_four: "",
    }

    const [inputs, setInputs] = useState(multiUps);

    const token = localStorage.getItem("access_token");

    useEffect(() => {
        props.get_profile_data();
    }, [token])
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            usp_1:  inputs.usp_one || props.profileData?.usp_1,
            usp_2:  inputs.usp_two || props.profileData?.usp_2,
            usp_3:  inputs.usp_three || props.profileData?.usp_3,
            usp_4:  inputs.usp_four || props.profileData?.usp_4,
        }
        props.create_ups(payload);
    }

    console.log(props.profileData, "here i have to find ups")

    return (
        <>
            <div className="setting-tab-content">
                <form id="profileForm" className="extra-info-form" onSubmit={handleSubmit}>
                    <h6>Extra informatie</h6>
                    <p className="sml-heading">Unique Selling Points toevoegen</p>
                    <p>Deze USP’s worden getoond op de registratie- en betaalpagina van jouw platform.</p>
                    <label>USP 1 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_one" defaultValue={props?.profileData?.usp_1} onChange={handleChange}/>
                    <label>USP 2 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_two" defaultValue={props?.profileData?.usp_2} onChange={handleChange}/>
                    <label>USP 3 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_three" defaultValue={props?.profileData?.usp_3} onChange={handleChange}/>
                    <label>USP 4 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_four" defaultValue={props?.profileData?.usp_4} onChange={handleChange}/>
                    <div class="mb-4"><input class="form-submit" onSubmit={handleSubmit} type="submit" value="Opslaan" /></div>
                </form>
            </div>
        </>
    )
}


const mapStateToProps = state => ({
    ...state,
    profileData: state.setting.profile_data?.data,
});

export default connect(mapStateToProps, { get_profile_data, create_ups })(ExtraInfo);
