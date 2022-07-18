import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_theme,get_theme_data } from "../../redux/settings/actions";

const Thema = (props) => {
    
      // Theme Setting
  const [theme, setTheme] = useState({
    logo: "",
    logo_background_image: "",
    header_image: "",
    profile_image: "",
    favicon: "",
    primary_color: "",
    secondary_color:""
  })
  const token = localStorage.getItem("access_token")
  useEffect(() => {
    props.get_theme_data();
  }, [token]);
    const [logo, setLogo] = useState(null)  
    const [backgroundLogo, setBackgroundLogo] = useState(null);
    const [header, setHeader] = useState(null);
    const [profile, setProfile] = useState(null);
    const [favicon, setFavicon] = useState(null);
    const [primaryColor, setPrimaryColor] = useState(null);
    const [secondaryColor, setSecondaryColor] = useState(null);
    useEffect(() => {
      if (props?.themeData !== undefined || props.themeData?.length > 0) {
          console.log(props?.themeData)
            setPrimaryColor(props.themeData?.primary_color !==null || props.themeData?.primary_color ==="undefined" && props.themeData?.primary_color);
            setSecondaryColor(props.themeData?.secondary_color)
      }
  },[])
  console.log(primaryColor,"pr")
    const handleThemeSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("logo", logo !==null?logo: props.themeData?.logo);
        formData.append("login_background",backgroundLogo!==null? backgroundLogo:props.themeData?.login_screen_background);
        formData.append("header_image", header !==null?header:props.themeData?.header_image);
        formData.append("profile_image", profile !==null? profile:props.themeData?.profile_image);
        formData.append("fav_icon", favicon !==null?favicon:props.themeData?.fav_icon);
        formData.append("primary_color", primaryColor !==null?primaryColor:props.themeData?.primaryColor);
        formData.append("secondary_color",secondaryColor !==null? secondaryColor:props?.themeData?.secondaryColor)
        console.log(formData.logo)
    //     const payload = {
        
    //         formData,
           
    //   }
        console.log(formData, "payload")
        props.create_theme(formData)
  }
    
    return (
        <>
         <div className="col-md-9">
                      <div className="setting-tab-content">
                        <div className="container-fluid">
                      
                          <form onSubmit={handleThemeSubmit}>
                            <div className="row justify-content-between">
                              <div className="col-md-12">
                                <h6>Grafische vormgeving</h6>
                                <label>Logo</label>
                                <p>
                                  Het logo voor op je website (moet een
                                  transparante .png zijn)
                                </p>
                                <input type="file" name="logo" onChange={(e)=>setLogo(e.target.files[0])} required/>
                                <label>Log-in scherm achtergrond</label>
                                <p>
                                  De afbeelding die getoond wordt achter de log-in module
                                </p>
                                <input type="file" name="login_background_image" onChange={(e)=>setBackgroundLogo(e.target.files[0])} required/>
                                <label>Headerafbeelding</label>
                                <p>
                                  De headerafbeelding voor bovenaan de dashboard
                                  pagina (max. 3000x750px)
                                </p>
                                <input type="file" name="header_image" onChange={(e)=>setHeader(e.target.files[0])} required/>
                                <label>Profielfoto</label>
                                <p>
                                  De profielfoto die wordt getoond wanneer je
                                  een nieuwe video upload (max. 1500x1500px)
                                </p>
                                <input type="file" name="profile_image" onChange={(e)=>setProfile(e.target.files[0])} required/>
                                <label>Favicon</label>
                                <p>
                                  De afbeelding die wordt gebruikt in het
                                  browsertabblad
                                </p>
                                <input type="file" name="favicon" onChange={(e)=>setFavicon(e.target.files[0])} required/>
                                <h6 className="mt-5">Kleuren aanpassen</h6>
                                <label>Primaire kleur</label>
                                <input
                                  type="color"
                                  name="primary_color"
                                  defaultValue={primaryColor}
                                  onChange={(e)=>setPrimaryColor(e.target.value)}
                                />
                                <label>Secundaire kleur</label>
                                <input
                                  type="color"
                                  name="secondry_color"
                                  defaultValue={secondaryColor}
                                  onChange={(e)=>setSecondaryColor(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="text-end">
                              <input
                                className="form-submit"
                                type="submit"
                                value="Opslaan"
                              />
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
    themeData: state.setting.theme_data?.data,
  });
  
  export default connect(mapStateToProps, { create_theme,get_theme_data })(Thema);