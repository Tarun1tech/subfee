    import React, { useEffect, useState } from "react";
    import Creator from '../../assets/images/user.png';
    import ReactPlayer from "react-player";
    import notifImg from "../../assets/images/subs.png";
    import { connect } from "react-redux";
    import {   get_feed_data } from "../../redux/feed/actions";
    import Aos from 'aos';
    import "aos/dist/aos.css";

    const Video = (props) => {

        useEffect(() => {
            Aos.init({ duration: 1400 });
        }, []);

        const { commentadd } = props
        const [postId, setPostId] = useState("")
        const [commentshow, setCommentShow] = useState(false);
        const [subcommentShow, setSubCommentId] = useState("");
        const [inputs, setInputs] = useState({
            comment: ""
        });

        const handleLikes = (postId, userId) => {
            props.create_feed_like({
                content_id: postId,
                content_user_id: userId
            })

        }

        const handleViewCount = (postId, userId) => {
            props.create_feed_Count({
                content_id: postId,
                content_user_id: userId
            })
        }

        const handleChange = (e) => {
            const { name, value } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        };
        const handleComment = (postId) => {
            setPostId(postId);
            props.get_feed_comment_data({
                post_id: postId
            });
            setCommentShow(true);
        }

        const handleSubComment = (id) => {
            setSubCommentId(id)
        }

        const handleSubmit = (e, parentId, postId) => {
            e.preventDefault();
            props.create_feed_comment({
                post_id: postId,
                parent_id: parentId,
                comment: inputs.comment
            })

            document.getElementById("comment_id").reset();

        }

        useEffect(() => {
            if (commentadd?.success) {
                props.get_feed_comment_data({
                    post_id: postId
                });
            }
        }, [commentadd])

        return (
            <>
                {props.data?.data?.map((item, index) => {
                    return (
                        <>
                            <div className="creator-video side-sm-vdo mt-4" data-aos="fade-up" key={index}>
                                <div className="creator-nm-detail d-flex justify-content-start align-items-center">
                                    <div><img src={`https://subfee.techstriker.com/backend/public${item?.creator_detail?.profile_image}`} /></div>
                                    <div className="ms-2"><p className="mb-0">{item?.creator_detail?.first_name}</p></div>
                                </div>
                                <div className="single-video">
                                    {item.video !== null ?
                                        <>
                                            <ReactPlayer
                                                className="videoFrame"
                                                url={`https://subfee.techstriker.com/backend/public${item.video}`}
                                                light={`https://subfee.techstriker.com/backend/public${item.thumbnail}`}
                                                playing
                                                controls
                                                onPlay={() => handleViewCount(item.id, item.user_id)}
                                                width="100" />
                                            <div className="video-like-btn d-flex justify-content-start align-items-center">
                                                <button className="d-flex justify-content-center align-items-center" onClick={() => handleLikes(item.id, item.user_id)}>
                                                    {item.like_status ?
                                                        <svg className="after-like" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#E10051" />
                                                        </svg>
                                                        :
                                                        <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#A7A7A7" />
                                                        </svg>}
                                                </button>
                                                <p>{item?.likes} Likes</p>
                                            </div>
                                        </>
                                        :
                                        item.thumbnail !== null ?
                                            <>
                                                <img src={`https://subfee.techstriker.com/backend/public${item.thumbnail}`} className="feed-img" />
                                                <div className="video-like-btn d-flex justify-content-start align-items-center">
                                                    <button className="d-flex justify-content-center align-items-center" onClick={() => handleLikes(item.id, item.user_id)}>
                                                        {item.like_status ?
                                                            <svg className="after-like" width="13" height="13" viewBox="0 0 13 13" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#E10051" />
                                                            </svg>
                                                            :
                                                            <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#A7A7A7" />
                                                            </svg>}
                                                    </button>
                                                    <p>{item?.likes} Likes</p>
                                                </div>
                                            </>
                                            : null}

                                </div>

                                <h6 className="mt-3">{item?.title}</h6>
                                <p className="video-desc">{item?.desc}</p>
                                {item.thumbnail === null && item.video === null ?
                                    <div className="video-like-btn d-flex justify-content-start align-items-center">
                                        <button className="d-flex justify-content-center align-items-center" onClick={() => handleLikes(item.id, item.user_id)}>
                                            {item.like_status ?
                                                <svg className="after-like" width="13" height="13" viewBox="0 0 13 13" fill="red" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#E10051" />
                                                </svg>
                                                :
                                                <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.2468 6.77549C11.4601 6.49365 11.5781 6.14834 11.5781 5.78906C11.5781 5.21904 11.2595 4.67949 10.7466 4.37861C10.6145 4.30116 10.4642 4.2604 10.3111 4.26054H7.2668L7.34297 2.70029C7.36074 2.32324 7.22744 1.96523 6.96846 1.69228C6.84136 1.55775 6.68802 1.45071 6.51792 1.37778C6.34782 1.30484 6.16457 1.26757 5.97949 1.26826C5.31934 1.26826 4.73535 1.71259 4.56016 2.34863L3.46963 6.29687H3.46582V11.7305H9.46182C9.57861 11.7305 9.69287 11.7076 9.79824 11.6619C10.4025 11.4042 10.7923 10.8139 10.7923 10.1588C10.7923 9.99883 10.7694 9.8414 10.7237 9.68906C10.937 9.40722 11.0551 9.06191 11.0551 8.70263C11.0551 8.54267 11.0322 8.38525 10.9865 8.23291C11.1998 7.95107 11.3179 7.60576 11.3179 7.24648C11.3153 7.08652 11.2925 6.92783 11.2468 6.77549ZM1.42188 6.70312V11.3242C1.42188 11.5489 1.60342 11.7305 1.82812 11.7305H2.65332V6.29687H1.82812C1.60342 6.29687 1.42188 6.47842 1.42188 6.70312Z" fill="#A7A7A7" />
                                                </svg>}
                                        </button>
                                        <p>{item?.likes} Likes</p>
                                    </div>
                                    : null}
                                <div>
                                        {/* <div className="card-body">
                                            <div className="notification-box video-comments">
                                                <div className="dash-latest-comment mt-0" data-aos="fade-down">
                                                
                                                        
                                                            <ul>
                                                                <li>
                                                                    <div className="d-flex justify-content-start align-items-top">
                                                                        <div className="notif-img">
                                                                            <img src={notifImg} alt="notifImg" />
                                                                        </div>
                                                                        <div className="notif-content">
                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                <h6>ALok</h6>
                                                                            </div>
                                                                            <p>
                                                                                {item.comment}
                                                                            </p>
                                                                
                                                                                <small onClick={() => handleSubComment(item.id)} >Beantwoorden</small> 
                                                                    
                                                                                <div id="comment-reply">
                                                                                    <div className="card-body">
                                                                                        <div className="notification-box video-comments">
                                                                                            <div className="dash-latest-comment mt-0" data-aos="zoom-in">
                                                                                                {item.reply?.map((i, index) => {
                                                                                                    return (
                                                                                                        <>
                                                                                                            <ul>
                                                                                                                <li>
                                                                                                                    <div className="d-flex justify-content-start align-items-top">
                                                                                                                        <div className="notif-img">
                                                                                                                            <img src={notifImg} alt="notifImg" />
                                                                                                                        </div>
                                                                                                                        <div className="notif-content">
                                                                                                                            <div className="d-flex justify-content-between align-items-center">
                                                                                                                                <h6>{i.reply_user_info?.name}</h6>
                                                                                                                            </div>
                                                                                                                            <p>
                                                                                                                                {i.comment}
                                                                                                                            </p>
                                                                                                                       
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </li>
                                                                                                            </ul>

                                                                                                        </>
                                                                                                    )
                                                                                                })}
                                                                                                <div className="comment-box d-flex justify-content-between align-items-center">
                                                                                                    <img src={Creator} />
                                                                                                    <form id="comment_id" onSubmit={(e) => handleSubmit(e, item.id, item.post_id)}>
                                                                                                        <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" onChange={handleChange} required />

                                                                                                        <button type="submit"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                            <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="white" />
                                                                                                        </svg>
                                                                                                        </button>
                                                                                                    </form>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                        
                                                                        </div>
                                                                    </div>
                                                                </li>

                                                            </ul>
                                                        
                                                

                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div className="comment-box d-flex justify-content-between align-items-center">
                                            <img src={Creator} />
                                            <form id="comment_id"
                                                onSubmit={(e) => handleSubmit(e, 0, item.id)}
                                            >
                                                <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" onChange={handleChange} required />
                                                <button type="submit">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="white" />
                                                    </svg>
                                                </button>
                                            </form>
                                        </div> */}
                                    </div>
                    
                                        
                                            {/* <div className="comment-box d-flex justify-content-between align-items-center">
                                                <img src={Creator} />
                                                <form id="comment_id" action="file.php"

                                                    onSubmit={(e) => handleSubmit(e, 0, item.id)}
                                                    autoComplete="off"  >
                                                    <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" onChange={handleChange} required />

                                                    <button type="submit" >
                                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="white" />
                                                        </svg>
                                                    </button>
                                                </form>
                                            </div> */}
                                    
                                    
                                

                            </div>
                        </>
                    )
                })}

            </>
        )
    }

    const mapStateToProps = state => ({
        ...state
    });

    export default connect(mapStateToProps, {  get_feed_data })(Video);