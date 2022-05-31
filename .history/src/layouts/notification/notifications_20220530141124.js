import React from "react";
import notifImg from "../../assets/images/subs.png";

const MyNotifications = () => {
    return(
        <div className="dash-content-side my-noti">
            <div class="dropdown"> 
              <div className="sticky-bell" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="bell-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 11V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V11C5 14.3 2 15.1 2 17C2 18.7 5.9 20 12 20C18.1 20 22 18.7 22 17C22 15.1 19 14.3 19 11Z"
                      stroke="#65006B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C10.989 22 10.039 21.966 9.14502 21.9C9.53619 23.1478 10.6924 23.997 12 23.997C13.3077 23.997 14.4639 23.1478 14.855 21.9C13.961 21.966 13.011 22 12 22Z"
                      fill="#65006B"
                    />
                  </svg>
                  <span className="notification-count">2</span>
                </span>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div className="dash-latest-comment">
                        <ul>
                          <li>
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="notif-img">
                                <img src={notifImg} alt="notifImg" />
                              </div>
                              <div className="notif-content">
                                <div className="d-flex justify-content-between align-items-center">
                                  <h6>John Doe</h6>
                                  <span>13m</span>
                                </div>
                                <p>
                                  Gaf commentaar op <span>videonaam</span>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="notif-img">
                                <img src={notifImg} alt="notifImg"/>
                              </div>
                              <div className="notif-content">
                                <div className="d-flex justify-content-between align-items-center">
                                  <h6>John Doe</h6>
                                  <span>13m</span>
                                </div>
                                <p>
                                  Gaf commentaar op <span>videonaam</span>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="notif-img">
                                <img src={notifImg} alt="notifImg"/>
                              </div>
                              <div className="notif-content">
                                <div className="d-flex justify-content-between align-items-center">
                                  <h6>John Doe</h6>
                                  <span>13m</span>
                                </div>
                                <p>
                                  Gaf commentaar op <span>videonaam</span>
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
              </ul>
            </div>
        </div>
    )
}

export default MyNotifications;