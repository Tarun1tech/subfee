import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { create_theme, get_theme_data } from "../../../redux/settings/actions";

// antd upload
import { Modal, Upload } from 'antd';

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => resolve(reader.result);

        reader.onerror = (error) => reject(error);
    });

const Thema = (props) => {
    const { create_theme, themeData } = props
    // antd upload
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState([
    ]);
    const [fileLists, setFileLists] = useState([]);
    const [bannerList, setBannerList] = useState([]);
    const [favList, setFavList] = useState([])

    const handleCancel = () => setPreviewVisible(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const handleLogoChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const handleLogoBChange = ({ fileList: newFileList }) => setFileLists(newFileList);
    const handleBannerChange = ({ fileList: newFileList }) => setBannerList(newFileList);
    const handleFavChange = ({ fileList: newFileList }) => setFavList(newFileList);
    const uploadButton = (
        <div className="myantd-btn">
            <div>
                Afbeelding toevoegen
            </div>
        </div>
    );


    // Theme Setting

    const token = localStorage.getItem("access_token")
    useEffect(() => {
        props.get_theme_data();
    }, [token]);

    const [primaryColor, setPrimaryColor] = useState(null);

    useEffect(() => {
        if (props?.themeData !== undefined || props.themeData?.length > 0) {
            console.log(props?.themeData)
            setPrimaryColor(props.themeData?.primary_color);

        }
    }, [])

    const handleThemeSubmit = (e) => {
        let image = [];
        let logobackgorund = [];
        let banner = [];
        let fav = []
        for (let i = 0; i < fileList.length; i++) {
            image.push(fileList[i].response.data.fileupload)
        };
        for (let i = 0; i < fileLists.length; i++) {
            logobackgorund.push(fileLists[i].response.data.fileupload)
        };
        for (let i = 0; i < bannerList.length; i++) {
            banner.push(bannerList[i].response.data.fileupload)
        };
        for (let i = 0; i < favList.length; i++) {
            fav.push(favList[i].response.data.fileupload)
        };
        e.preventDefault();
        let payload = {
            primary_color: primaryColor || props.themeData?.primary_color
        }

        payload.logo = fileList.length === 0 ? "" : image[0] || props.themeData?.logo;
        payload.login_screen_background = fileLists.length === 0 ? "" : logobackgorund[0] || props.themeData?.login_screen_background;
        payload.header_image = bannerList.length === 0 ? "" : banner[0] || props.themeData?.header_image;
        payload.fav_icon = favList.length === 0 ? "" : fav[0] || props.themeData?.fav_icon;
        console.log(payload)

        props.create_theme(payload)
    }

    useEffect(() => {
        if (create_theme?.success) {

            props.get_theme_data();
        }
        if (themeData !== undefined) {
            if (themeData?.logo) {
                let images = [];
                images.push({
                    url: `https://subfee.techstriker.com/backend/public${props.themeData?.logo}`,
                    response: { data: [props.themeData?.logo] },
                });
                setFileList(images);
            }
            if (themeData?.login_screen_background) {
                let login_background = [];
                login_background.push({
                    url: `https://subfee.techstriker.com/backend/public${props.themeData?.login_screen_background}`,
                    response: { data: [props.themeData?.login_screen_background] },
                });
                setFileLists(login_background);
            }
            if (themeData?.header_image) {
                let header_image = [];
                header_image.push({
                    url: `https://subfee.techstriker.com/backend/public${props.themeData?.header_image}`,
                    response: { data: [props.themeData?.header_image] },
                });
                setBannerList(header_image);
            }
            if (themeData?.fav_icon) {
                let fav_icon = [];
                fav_icon.push({
                    url: `https://subfee.techstriker.com/backend/public${props.themeData?.fav_icon}`,
                    response: { data: [props.themeData?.fav_icon] },
                });
                setFavList(fav_icon);
            }


        }
    }, [create_theme, themeData])
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
                                action="https://subfee.techstriker.com/backend/api/creator/upload-file"
                                listType="picture-card"
                                name="fileupload"
                                fileList={fileList}
                                onPreview={handlePreview}
                                onChange={handleLogoChange}
                                headers={{
                                    Authorization: ` Bearer ${token}`
                                }}
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
                                action="https://subfee.techstriker.com/backend/api/creator/upload-file"
                                listType="picture-card"
                                name="fileupload"
                                fileList={fileLists}
                                onPreview={handlePreview}
                                onChange={handleLogoBChange}
                                headers={{
                                    Authorization: ` Bearer ${token}`
                                }}
                            >
                                {fileLists.length >= 1 ? null : uploadButton}
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
                                action="https://subfee.techstriker.com/backend/api/creator/upload-file"
                                listType="picture-card"
                                name="fileupload"
                                fileList={bannerList}
                                onPreview={handlePreview}
                                onChange={handleBannerChange}
                                headers={{
                                    Authorization: ` Bearer ${token}`
                                }}
                            >
                                {bannerList.length >= 1 ? null : uploadButton}
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
                                action="https://subfee.techstriker.com/backend/api/creator/upload-file"
                                listType="picture-card"
                                name="fileupload"
                                fileList={favList}
                                onPreview={handlePreview}
                                onChange={handleFavChange}
                                headers={{
                                    Authorization: ` Bearer ${token}`
                                }}
                            >
                                {favList.length >= 1 ? null : uploadButton}
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
                    <p class="sml-heading">Kleuren aanpassen</p>
                    <p>Pas de kleuren aan zodat jouw platform perfect aansluit op jouw huisstijl!</p>
                    <input
                        type="color"
                        name="primary_color"
                        defaultValue={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
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
    create_theme: state.setting.create_theme?.data
});

export default connect(mapStateToProps, { create_theme, get_theme_data })(Thema);