import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { create_profile, get_profile_data } from "../../../redux/settings/actions";


const Policy = (props) => {
  const { createSetting } = props;
  const profileFields = {

      terms_condition: "",
      privacy_statement: "",
  
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
          legal_information: inputs.terms_condition || props.profileData?.legal_information,
          privacy_statement: inputs.privacy_statement || props.profileData?.privacy_statement
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
          <h6>Wettelijke gegevens</h6>
          <p className="sml-heading">Algemene voorwaarden</p>
          <p>
            Deze worden getoond op de algemene voorwaarden pagina op jouw
            platform.
          </p>
          <textarea name="legal_information"  onChange={handleChange} defaultValue={props.profileData?.legal_information}/>
         
          <p className="sml-heading">Privacy statement</p>
          <p>
            Deze worden getoond op de privacy statement pagina op jouw platform.
          </p>
          <textarea name="privacy_statement" onChange={handleChange} defaultValue={props.profileData?.privacy_statement}/>
          <div class="mb-4">
            <input class="form-submit" type="submit" value="Opslaan" />
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  ...state,
  profileData: state.setting.profile_data?.data,
  createSetting: state.setting.create_profile?.data
});

export default connect(mapStateToProps, { create_profile, get_profile_data })(Policy);
