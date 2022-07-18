import React from "react";
import Ban from '../../assets/images/ban.png';
import { connect } from "react-redux";

const SubscriberBanner = (props) => {
    return(
        <div>
            <div className="subs-banner">
                <img src={Ban}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    ...state,
  });
  
export default connect(mapStateToProps, {  })(SubscriberBanner);
