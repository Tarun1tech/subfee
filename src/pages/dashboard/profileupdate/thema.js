import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_theme,get_theme_data } from "../../../redux/settings/actions";

// antd upload
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

const Thema = (props) => {

    // antd upload
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
    ]);

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const antdhandleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const uploadButton = (
        <div className="myantd-btn">
            <div>
                Afbeelding toevoegen
            </div>
        </div>
    );

        
    // Theme Setting
    const [theme, setTheme] = useState({
        logo: "",
        logo_background_image: "",
        header_image: "",
     
        favicon: "",
        primary_color: "",
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
        // const [secondaryColor, setSecondaryColor] = useState(null);
        useEffect(() => {
          if (props?.themeData !== undefined || props.themeData?.length > 0) {
              console.log(props?.themeData)
                setPrimaryColor(props.themeData?.primary_color !==null || props.themeData?.primary_color ==="undefined" && props.themeData?.primary_color);
                // setSecondaryColor(props.themeData?.secondary_color)
          }
      },[])
    
        const handleThemeSubmit = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append("logo", logo !==null?logo: props.themeData?.logo);
            formData.append("login_background",backgroundLogo!==null? backgroundLogo:props.themeData?.login_screen_background);
            formData.append("header_image", header !==null?header:props.themeData?.header_image);
            formData.append("profile_image", profile !==null? profile:props.themeData?.profile_image);
            formData.append("fav_icon", favicon !==null?favicon:props.themeData?.fav_icon);
            formData.append("primary_color", primaryColor !==null?primaryColor:props.themeData?.primaryColor);
            // formData.append("secondary_color",secondaryColor !==null? secondaryColor:props?.themeData?.secondaryColor)
            props.create_theme(formData)
      }
    
    
    return (
        <>
            <div className="setting-tab-content">
                <form onSubmit={handleThemeSubmit}>
                    <h6>Uiterlijk van je platform</h6>
                    <p className="sml-heading">Afbeeldingen toevoegen</p>
                    <p>Voeg afbeeldingen toe om je platform nóg persoonlijker te maken!</p>
                    <div className="row">
                        <div className="col-md-9">
                            <label>Logo</label>
                            <p>Dit logo wordt getoond op het inlogscherm en op jouw eigen platform.</p>
                        </div>
                        <div className="col-md-3">
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={antdhandleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <label>Achtergrond voor log-in scherm</label>
                            <p>De afbeelding die getoond wordt achter de log-in module.</p>
                        </div>
                        <div className="col-md-3">
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={antdhandleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <label>Bannerafbeelding </label>
                            <p>Deze banner wordt bovenaan jouw eigen platform getoond.</p>
                        </div>
                        <div className="col-md-3">
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={antdhandleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <label>Favicon</label>
                            <p>De afbeelding die wordt gebruikt in het browsertabblad.</p>
                        </div>
                        <div className="col-md-3">
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={antdhandleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                            <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                                <img
                                    alt="example"
                                    style={{
                                        width: '100%',
                                    }}
                                    src={previewImage}
                                />
                            </Modal>
                        </div>
                    </div>
                    <p className="small-g">De afbeelding die wordt gebruikt in het browsertabblad.</p>
                    <p>Pas de kleuren aan zodat jouw platform perfect aansluit op jouw huisstijl!</p>
                    <input
                                    type="color"
                                    name="primary_color"
                                    defaultValue={primaryColor}
                                    onChange={(e)=>setPrimaryColor(e.target.value)}
                                  />
                    <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan" /></div>
                </form>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
    themeData: state.setting.theme_data?.data,
  });
  
  export default connect(mapStateToProps, { create_theme,get_theme_data })(Thema);