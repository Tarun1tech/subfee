import React, { useEffect } from "react";
import SubscriberBanner from "../../layouts/banner/banner";
import Video from "../../layouts/video/video";
import notifImg from "../../assets/images/subs.png";
import { connect } from "react-redux";
import { get_feed_data } from "../../redux/feed/actions";
import ReactPlayer from "react-player";
import Creator from "../../assets/images/user.png";

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
    useEffect(() => {
        props.get_feed_data();
    }, [token]);
    console.log(props.feedlist, "feeldi")
    return (
        <>
            <div className="dash-content-side">
                <div className="container">
                    <Video data={props.feedlist} />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    ...state,
    feedlist: state.feed?.feed_list?.data,
});

export default connect(mapStateToProps, { get_feed_data })(Naar);