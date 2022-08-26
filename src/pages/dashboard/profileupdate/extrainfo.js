import React, { useState, useEffect } from "react";


const ExtraInfo = (props) => {

    return (
        <>
            <div className="setting-tab-content">
                <form id="profileForm" className="extra-info-form">
                    <h6>Extra informatie</h6>
                    <p className="sml-heading">Unique Selling Points toevoegen</p>
                    <p>Deze USP’s worden getoond op de registratie- en betaalpagina van jouw platform.</p>
                    <label>USP 1 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_one"/>
                    <label>USP 2 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_two"/>
                    <label>USP 3 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_three"/>
                    <label>USP 4 <small>max. 30 tekens</small></label>
                    <input type="text" name="usp_four"/>
                    <div class="mb-4"><input class="form-submit" type="submit" value="Opslaan" /></div>
                </form>
            </div>
        </>
    )
}


export default ExtraInfo;
