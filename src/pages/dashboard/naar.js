import React from "react";
import Video from "../../layouts/video/video";
import { connect } from "react-redux";
import { get_feed_data } from "../../redux/feed/actions";

const Naar = (props) => {
    const formatDate = (date) =>
        `${new Date(date).toLocaleString("default", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            // second: "2-digit",
        })} `;
    const token = localStorage.getItem("access_token")

    return (
        <>
            <div className="dash-content-side">
                <div className="container">
                    <Video />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
});

export default connect(mapStateToProps, { get_feed_data })(Naar);