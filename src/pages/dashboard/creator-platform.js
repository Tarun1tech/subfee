import React from "react";
import ReactPlayer from "react-player";
import Creator from "../../assets/images/user.png";

const CreatorPlatform = () => {
    return(
        <div className="dash-content-side">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-8">
                        <div className="creator-video mt-4" data-aos="fade-up">
                            <div className="creator-nm-detail d-flex justify-content-start align-items-center">
                                <div><img src={Creator} /></div>
                                <div className="ms-2"><p className="mb-0">Jens Posma</p></div>
                            </div>
                            <div className="single-video">
                                <ReactPlayer
                                className="videoFrame"
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                light="https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                playing
                                controls
                                width="100" />
                            </div>

                            <h6 className="mt-3">Here going video Title</h6>
                            <p className="video-desc">Here going video description</p>
                            <div className="video-like-btn d-flex justify-content-start align-items-center">
                                    <button className="d-flex justify-content-center align-items-center">
                                    <svg className="after-like" width="13" height="13" viewBox="0 0 13 13" fill="red" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#E10051" />
                                    </svg>
                                    </button>
                                    <p>10 Likes</p>
                                </div>
                            <span className="comments-count">Bekijk alle 18 comments</span>
                                <div>
                                    <div className="comment-box d-flex justify-content-between align-items-center">
                                        <img src={Creator} />
                                        <form id="comment_id">
                                            <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" required />
                                            <button type="submit">
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="white" />
                                                </svg>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                        </div>
                        <div className="col-md-4 ps-4 mt-4">
                            <div className="notification-box">
                                <h6>Recente notificaties</h6>
                                <div className="dash-latest-comment">
                                        <ul>
                                                    <li>
                                                        <div className="d-flex justify-content-start align-items-center">
                                                            <div className="notif-img">                                                                
                                                                <img src={Creator} alt="" />
                                                                <div className="notification-alert">
                                                                    <span className="d-flex justify-content-center align-items-center red">
                                                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M7.78623 4.69075C7.93389 4.49564 8.01562 4.25657 8.01562 4.00784C8.01562 3.61321 7.79502 3.23968 7.43994 3.03138C7.34853 2.97776 7.24445 2.94954 7.13848 2.94964H5.03086L5.08359 1.86946C5.0959 1.60843 5.00361 1.36058 4.82432 1.17161C4.73633 1.07847 4.63017 1.00437 4.51241 0.953877C4.39464 0.903386 4.26778 0.877582 4.13965 0.878058C3.68262 0.878058 3.27832 1.18568 3.15703 1.62601L2.40205 4.35941H2.39941V8.12113H6.55049C6.63135 8.12113 6.71045 8.1053 6.7834 8.07366C7.20176 7.89525 7.47158 7.48656 7.47158 7.03304C7.47158 6.9223 7.45576 6.81331 7.42412 6.70784C7.57178 6.51273 7.65352 6.27366 7.65352 6.02493C7.65352 5.91419 7.6377 5.80521 7.60605 5.69974C7.75371 5.50462 7.83545 5.26556 7.83545 5.01683C7.83369 4.90609 7.81787 4.79622 7.78623 4.69075ZM0.984375 4.64066V7.83988C0.984375 7.99544 1.11006 8.12113 1.26562 8.12113H1.83691V4.35941H1.26562C1.11006 4.35941 0.984375 4.48509 0.984375 4.64066Z" fill="white" />
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="notif-content">
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <h6>Alok</h6>
                                                                    <span>    20 June 2022</span>
                                                                </div>
                                                                <p>
                                                                    Here is gonna my message
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                        </ul>
                                        <p>No Notifications yet</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
    )
}

export default CreatorPlatform;