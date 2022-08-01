import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { get_faq_data } from "../../../redux/settings/actions";
import Accordion from 'react-bootstrap/Accordion';
const FAQ = (props) => {


    const token = localStorage.getItem("access_token")
    useEffect(() => {
        props.get_faq_data();
    }, [token]);

    console.log(props.faqData, "faqD ")

    return (
        <>
            <div className="setting-tab-content">
                <form>
                    <h6>Veelgestelde vragen</h6>
                    <p className="small-heading">Heb je vragen? Wij zijn er om te helpen.</p>
                    <div className="faq-subfee">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            {props.faqData?.map((item, index) => {
                                return (
                                    <Accordion defaultActiveKey="0" >
                                        <Accordion.Item eventKey={index === 0 ? '0' : index}>
                                            <Accordion.Header> {item?.question}</Accordion.Header>
                                            <Accordion.Body >
                                                {item?.answer_question}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                )
                            })}


                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    faqData: state.setting.faq_data?.data,
});

export default connect(mapStateToProps, { get_faq_data })(FAQ);