import React from "react";


const DashContentSide = () => {
    return(
        <div>
            <div className="dash-content-side">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-md-6 text-end">
                            <div className="sticky-bell">
                                <span className="bell-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V11C5 14.3 2 15.1 2 17C2 18.7 5.9 20 12 20C18.1 20 22 18.7 22 17C22 15.1 19 14.3 19 11Z" stroke="#65006B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 22C10.989 22 10.039 21.966 9.14502 21.9C9.53619 23.1478 10.6924 23.997 12 23.997C13.3077 23.997 14.4639 23.1478 14.855 21.9C13.961 21.966 13.011 22 12 22Z" fill="#65006B"/>
                                </svg>
                                <span className="notification-count">2</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="setting-tab">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Algemeen</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Thema</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Kanaal</button>
                                    <button style={{color: "#959595"}} className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" disabled>Layout <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 7.25H11.9375V3.75C11.9375 2.64531 11.0422 1.75 9.9375 1.75H6.0625C4.95781 1.75 4.0625 2.64531 4.0625 3.75V7.25H3C2.72344 7.25 2.5 7.47344 2.5 7.75V13.75C2.5 14.0266 2.72344 14.25 3 14.25H13C13.2766 14.25 13.5 14.0266 13.5 13.75V7.75C13.5 7.47344 13.2766 7.25 13 7.25ZM5.1875 3.75C5.1875 3.26719 5.57969 2.875 6.0625 2.875H9.9375C10.4203 2.875 10.8125 3.26719 10.8125 3.75V7.25H5.1875V3.75ZM12.375 13.125H3.625V8.375H12.375V13.125ZM7.5625 10.9531V11.7812C7.5625 11.85 7.61875 11.9062 7.6875 11.9062H8.3125C8.38125 11.9062 8.4375 11.85 8.4375 11.7812V10.9531C8.56648 10.8605 8.66275 10.7294 8.71245 10.5786C8.76216 10.4278 8.76273 10.2651 8.71409 10.114C8.66545 9.96281 8.57011 9.831 8.44179 9.73749C8.31346 9.64398 8.15878 9.5936 8 9.5936C7.84122 9.5936 7.68654 9.64398 7.55821 9.73749C7.42989 9.831 7.33455 9.96281 7.28591 10.114C7.23727 10.2651 7.23784 10.4278 7.28755 10.5786C7.33725 10.7294 7.43352 10.8605 7.5625 10.9531Z" fill="#959595"/>
                                    </svg>
                                    </button>
                                </div>
                                </nav>
                                <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="col-md-10">
                                    <div className="setting-tab-content">
                                        <div className="container-fluid">
                                            <form>
                                                <div className="row justify-content-between">
                                                    <div className="col-md-7">
                                                        <h6>Websitegegevens</h6>
                                                        <label>Websitenaam</label>
                                                        <input type='text' name="Websitenaam" />
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="pe-3"><label>Voornaam</label><input type='text' name="Voornaam" /></div>
                                                            <div className="ps-3"><label>Achternaam</label><input type='text' name="Achternaam" /></div>
                                                        </div>
                                                        <label>E-mailadres</label>
                                                        <input type='email' name="E-mailadres" />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h6>Videobeschrijvingen</h6>
                                                        <span>Standaard beschrijving onder video’s</span>
                                                        <p>Plaats hier de standaard beschrijving die je onder elke video wilt plaatsen. Denk aan een bedankje aan je fans, social media etc.</p>
                                                        <textarea name="video-text"/>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h6>Wettelijke gegevens</h6>
                                                        <label>Algemene voorwaarden</label>
                                                        <textarea name="Algemene-voorwaarden" />
                                                        <label>Privacy statement</label>
                                                        <textarea name="Privacy-statement" />
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <input className="form-submit" type='submit' value='Opslaan'/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="col-md-8">
                                <div className="setting-tab-content">
                                        <div className="container-fluid">
                                            <form>
                                                <div className="row justify-content-between">
                                                    <div className="col-md-12">
                                                        <h6>Grafische vormgeving</h6>
                                                        <label>Logo</label>
                                                        <p>Het logo voor op je website (moet een transparante .png zijn)</p>
                                                        <input type='file' name="Logo" />
                                                        <label>Headerafbeelding</label>
                                                        <p>De headerafbeelding voor bovenaan de dashboard pagina (max. 3000x750px)</p>
                                                        <input type='file' name="Headerafbeelding" />
                                                        <label>Profielfoto</label>
                                                        <p>De profielfoto die wordt getoond wanneer je een nieuwe video upload (max. 1500x1500px)</p>
                                                        <input type='file' name="Profielfoto" />
                                                        <label>Favicon</label>
                                                        <p>De afbeelding die wordt gebruikt in het browsertabblad</p>
                                                        <input type='file' name="Favicon" />
                                                        <h6>Kleuren aanpassen</h6>
                                                        <label>Primaire kleur</label>
                                                        <input type='color' name="primary-color" value='#65006B' />
                                                        <label>Secundaire kleur</label>
                                                        <input type='color' name="secondry-color" value='#FE6A6A' />
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <input className="form-submit" type='submit' value='Opslaan'/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="col-md-8">
                                        <div className="setting-tab-content">
                                            <form>
                                                <h6>Kanaalinstellingen</h6>
                                                <label>Kanaal verwijderen</label>
                                                <p>Je SubFee kanaal verwijderen. <b>Let op: deze actie kan niet teruggedraaid worden!</b></p>
                                                <button className="maroon-btn">Kanaal verwijderen</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashContentSide;