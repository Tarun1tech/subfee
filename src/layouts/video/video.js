import React, { useEffect, useState } from "react";
import Creator from "../../assets/images/user.png";
import ReactPlayer from "react-player";
import notifImg from "../../assets/images/subs.png";
import { connect } from "react-redux";
import {
  get_feed_data,
  get_Naar,
  list_Comment,
  create_feed_comment,
  create_comment_delete,
  edit_comment,
} from "../../redux/feed/actions";
import CustomModal from "../modal/modal";

const Video = (props) => {
  const {
    commentadd,
    getnaardata,
    listComment,
    editComment,
    deletedComment,
    feedlist,
  } = props;
  const [postId, setPostId] = useState("");
  const [commentshow, setCommentShow] = useState(true);
  const [bulkShow, setBulkShow] = useState(false);
  const [subcommentShow, setSubCommentId] = useState("");
  const [subshow, setSubShow] = useState(false);
  const [inputs, setInputs] = useState({
    comment: "",
  });
  let token = localStorage.getItem("token");
  const [initial_data, setInitial_data] = useState({});
  const [isedit, setIsedit] = useState(true);
  const [iseditcomment, setIseditcomment] = useState("");
  const [issubedit, setIssubedit] = useState(true);
  const [issubeditcomment, setIssubeditcomment] = useState("");
  const [newcomment, setNewcomment] = useState("");
  const [deleteid, setDeleteid] = useState("");
  console.log(listComment, "listCOme")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubComment = (id) => {
    console.log(id, "idd")
    setSubCommentId(id);
    setSubShow(true);
  };

  const handleSubmit = (e, postId, parentId) => {
    e.preventDefault();
    setPostId(postId);
    setSubCommentId(parentId);
    props.create_feed_comment({
      post_id: postId,
      parent_id: parentId,
      comment: inputs.comment,
      user_type: 1
    });
    setCommentShow(true);
    setSubShow(true);
    document.getElementById("comments_id").reset();
  };

  useEffect(() => {
    props.get_feed_data();
    //eslint-disable-next-line
  }, [token]);

  useEffect(() => {
    if (feedlist?.data) {
      setPostId(feedlist?.data[0]?.id);
      setInitial_data(feedlist?.data[0]);
      props.list_Comment({
        post_id: feedlist?.data[0]?.id,
      });
    }
    //eslint-disable-next-line
  }, [feedlist]);

  useEffect(() => {
    if (commentadd?.success) {
      props.list_Comment({
        post_id: postId,
      });
    }
    //eslint-disable-next-line
  }, [commentadd]);

  const handleGet = (id) => {
    setPostId(id);
    props.get_Naar({
      id: id,
    });
    props.list_Comment({
      post_id: id,
    });
    window.scrollTo(0, 10)
  };

  const getComments = (id) => {
    setCommentShow(true);
    setPostId(id);
    /* setPostId(id)
        setCommentShow(true);
        props.list_Comment({
            post_id: id
        }) */
  };

  useEffect(() => {
    if (getnaardata !== undefined) {
      setInitial_data(getnaardata);
    }
    //eslint-disable-next-line
  }, [getnaardata]);

  /* comment delete */

  const handleDelete = (id) => {
    setDeleteid(id);
    setBulkShow(true);
  };

  const confirmDelete = () => {
    props.create_comment_delete({
      id: deleteid,
    });
    setBulkShow(false);
  };

  const onHide = () => {
    setBulkShow(false);
    props.list_Comment({
      post_id: deleteid,
    });
  };

  /* comment edit */
  // const [editcomment, setEditcomment] = useState("");
  const handleEdit = (e, id) => {
    e.preventDefault();
    setIseditcomment(id);
    setIsedit(false);
  };

  const handleSubEdit = (e, id) => {
    e.preventDefault();
    setIssubeditcomment(id);
    setIssubedit(false);
  };
  const handleCommentediting = (e) => {
    setNewcomment(e.target.value);
  };

  const handleEditedcomment = (e, id) => {
    e.preventDefault();
    props.edit_comment({
      id: id,
      comment: newcomment,
      user_type: 1
    });
  };

  useEffect(() => {
    if (editComment?.data?.success) {
      props.list_Comment({
        post_id: postId,
      });
      setIsedit(true);
      setIssubedit(true);
    }
    if (deletedComment?.data?.success) {
      props.list_Comment({
        post_id: postId,
      });
      setCommentShow(true);
    }
    //eslint-disable-next-line
  }, [editComment, deletedComment]);

  console.log(props, "adasd");

  return (
    <>
      <div className="row mt-5">

        <div className="col-md-8">
          <div className="creator-video njp start-0 mt-4" >
            {initial_data?.video !== null ?
              <div className="single-video">
                <ReactPlayer
                  config={{ file: { attributes: { controlsList: 'nodownload' } } }}
                  className="videoFrame"
                  url={`https://subfee.techstriker.com/backend/public${initial_data?.video}`}
                  light={`https://subfee.techstriker.com/backend/public${initial_data?.thumbnail}`}
                  playing
                  controls
                  width="100" />
              </div> :
              initial_data?.thumbnail !== null ?
                <div className="single-video">      <img src={`https://subfee.techstriker.com/backend/public${initial_data?.thumbnail}`} className="feed-img" />     </div> : null

            }

            {(initial_data?.video !== null || initial_data?.thumbnail !== null) &&
              <div className="video-like-btn d-flex justify-content-start align-items-center">
                <p>{initial_data?.likes} Likes</p>
              </div>
            }

            <h6 className="mt-3">{initial_data?.title}</h6>


            <p className="video-desc" dangerouslySetInnerHTML={{
              __html: `${initial_data?.desc?.replace(/(?:\r\n|\r|\n)/g, "<br />")}`,
            }}></p>
            {(initial_data?.video === null || initial_data?.thumbnail === null) &&
              <div className="video-like-btn d-flex justify-content-start align-items-center">

                <p>{initial_data?.likes} Likes</p>
              </div>
            }
            {initial_data?.comments !== 0 ?
              <span onClick={() => getComments(initial_data?.id)} className="comments-count" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ "--sub-pink": `${props.theme_Data?.primary_color}` }}>Bekijk alle {initial_data?.total_comments} comments</span>
              : null}
            {initial_data?.comments !== 0 && commentshow && postId === initial_data?.id ?
              <div >
                <div class="card-body comment-sec p-0">
                  <div className="notification-box video-comments">
                    <div className="dash-latest-comment mt-0">
                      <ul>
                        {listComment?.map((item, index) => {
                          return (
                            <>
                              <li key={index}>
                                <div className="d-flex justify-content-start align-items-top">
                                  <div className="notif-img">
                                    <img src={item?.user_info?.profiles_image === null ? notifImg : item?.user_info?.profiles_image} alt="notifImg" />
                                  </div>
                                  <div className="notif-content">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <h6>{item?.user_info?.name}</h6>
                                    </div>
                                    {localStorage.getItem("profile-id") == item?.user_id ?
                                      <div className="dropdown float-end">
                                        <button className="border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                          <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="1.84211" cy="1.84211" r="1.84211" fill="#BABABA" />
                                            <circle cx="1.84211" cy="7" r="1.84211" fill="#BABABA" />
                                            <circle cx="1.84211" cy="12.1579" r="1.84211" fill="#BABABA" />
                                          </svg>

                                        </button>
                                        <ul className="dropdown-menu comment_edit_delete" aria-labelledby="dropdownMenuButton1">
                                          <li><button className="border-0 bg-transparent" onClick={(e) => handleEdit(e, item.id)}><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.2308 3.00444L10.1111 0.873881C9.971 0.734516 9.78144 0.656281 9.58385 0.656281C9.38625 0.656281 9.1967 0.734516 9.05663 0.873881L1.5419 8.37777L0.855793 11.3389C0.832124 11.4471 0.832936 11.5593 0.858168 11.6672C0.883399 11.7751 0.932415 11.876 1.00163 11.9625C1.07085 12.049 1.15852 12.119 1.25824 12.1673C1.35796 12.2156 1.46721 12.241 1.57801 12.2417C1.62964 12.2469 1.68166 12.2469 1.73329 12.2417L4.7269 11.5555L12.2308 4.05888C12.3702 3.91881 12.4484 3.72925 12.4484 3.53166C12.4484 3.33407 12.3702 3.14451 12.2308 3.00444ZM4.36579 10.9055L1.55996 11.4942L2.19913 8.74249L7.82163 3.14166L9.98829 5.30833L4.36579 10.9055ZM10.4722 4.78471L8.30551 2.61805L9.56218 1.3686L11.6927 3.53527L10.4722 4.78471Z" fill="black" />
                                          </svg>
                                            Bewerken</button></li>
                                          <li><button className="border-0 bg-transparent" onClick={(e) => handleDelete(e, item.id)}><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.41671 2.70833H7.58337C7.58337 2.42102 7.46924 2.14547 7.26607 1.9423C7.06291 1.73914 6.78736 1.625 6.50004 1.625C6.21272 1.625 5.93717 1.73914 5.73401 1.9423C5.53084 2.14547 5.41671 2.42102 5.41671 2.70833ZM4.60421 2.70833C4.60421 2.45937 4.65324 2.21284 4.74852 1.98283C4.84379 1.75282 4.98344 1.54382 5.15948 1.36778C5.33553 1.19173 5.54452 1.05209 5.77454 0.956812C6.00455 0.861537 6.25108 0.8125 6.50004 0.8125C6.74901 0.8125 6.99553 0.861537 7.22554 0.956812C7.45556 1.05209 7.66455 1.19173 7.8406 1.36778C8.01664 1.54382 8.15629 1.75282 8.25156 1.98283C8.34684 2.21284 8.39587 2.45937 8.39587 2.70833H11.5105C11.6182 2.70833 11.7215 2.75113 11.7977 2.82732C11.8739 2.90351 11.9167 3.00684 11.9167 3.11458C11.9167 3.22233 11.8739 3.32566 11.7977 3.40185C11.7215 3.47803 11.6182 3.52083 11.5105 3.52083H10.7955L10.1617 10.081C10.1131 10.5836 9.87898 11.0501 9.50503 11.3895C9.13109 11.7289 8.64412 11.9169 8.13912 11.9167H4.86096C4.35605 11.9167 3.86922 11.7287 3.49539 11.3893C3.12156 11.05 2.88752 10.5835 2.83892 10.081L2.20462 3.52083H1.48962C1.38188 3.52083 1.27855 3.47803 1.20236 3.40185C1.12618 3.32566 1.08337 3.22233 1.08337 3.11458C1.08337 3.00684 1.12618 2.90351 1.20236 2.82732C1.27855 2.75113 1.38188 2.70833 1.48962 2.70833H4.60421ZM5.68754 5.28125C5.68754 5.17351 5.64474 5.07017 5.56855 4.99399C5.49237 4.9178 5.38904 4.875 5.28129 4.875C5.17355 4.875 5.07022 4.9178 4.99403 4.99399C4.91784 5.07017 4.87504 5.17351 4.87504 5.28125V9.34375C4.87504 9.45149 4.91784 9.55483 4.99403 9.63101C5.07022 9.7072 5.17355 9.75 5.28129 9.75C5.38904 9.75 5.49237 9.7072 5.56855 9.63101C5.64474 9.55483 5.68754 9.45149 5.68754 9.34375V5.28125ZM7.71879 4.875C7.82654 4.875 7.92987 4.9178 8.00605 4.99399C8.08224 5.07017 8.12504 5.17351 8.12504 5.28125V9.34375C8.12504 9.45149 8.08224 9.55483 8.00605 9.63101C7.92987 9.7072 7.82654 9.75 7.71879 9.75C7.61105 9.75 7.50772 9.7072 7.43153 9.63101C7.35534 9.55483 7.31254 9.45149 7.31254 9.34375V5.28125C7.31254 5.17351 7.35534 5.07017 7.43153 4.99399C7.50772 4.9178 7.61105 4.875 7.71879 4.875ZM3.64762 10.003C3.67684 10.3045 3.8173 10.5843 4.04162 10.7879C4.26593 10.9915 4.55803 11.1042 4.86096 11.1042H8.13912C8.44205 11.1042 8.73415 10.9915 8.95847 10.7879C9.18278 10.5843 9.32324 10.3045 9.35246 10.003L9.97971 3.52083H3.02037L3.64762 10.003Z" fill="black" />
                                          </svg>
                                            Verwijderen</button></li>

                                        </ul>

                                      </div>
                                      : null}
                                    {console.log(iseditcomment, item.id, "cinnn")}
                                    {iseditcomment === item.id ?
                                      <div>{isedit ? <p className="sss">{item?.comment}</p>
                                        : <div className="comment-box d-flex justify-content-between align-items-center" style={{ "--sub-pink": `${props.theme_Data?.primary_color}` }}>
                                          <form id="comments_id" onSubmit={(e) => handleEditedcomment(e, item.id)}>
                                            <input type="text" defaultValue={item?.comment} name="comment" id="comment" onChange={handleCommentediting} required />
                                            <button type="submit" className="comment_icon">
                                              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="#818181" />
                                              </svg>
                                            </button>
                                          </form>
                                        </div>}</div>
                                      : <p className="thi">{item?.comment}</p>}

                                    {/* <small onClick={() => handleSubComment(item.id)} className="comment" style={{ "--sub-pink": `${props.theme_Data?.primary_color}` }}>Beantwoorden</small> */}
                                    {!isedit &&
                                      iseditcomment === item.id ? null : (
                                      <small
                                        role="button"
                                        onClick={() =>
                                          handleSubComment(item.id)
                                        }
                                        style={{ "--sub-pink": `${props.theme_Data?.primary_color}` }}>
                                        {item?.reply.length > 0
                                          ? `Bekijk ${item?.reply.length} antwoorden`
                                          : "Beantwoorden"}
                                      </small>
                                    )}

                                    {console.log(subcommentShow === item.id && subshow)}
                                    {subcommentShow === item.id && subshow ?
                                      <div >
                                        <div class="card-body p-0">
                                          <div className="notification-box video-comments">
                                            <div className="dash-latest-comment mt-0">
                                              <ul>
                                                {item?.reply.map(
                                                  (item, index) => {
                                                    return (
                                                      <>
                                                        <li key={index}>
                                                          <div className="d-flex justify-content-start align-items-top">
                                                            <div className="notif-img">
                                                              <img
                                                                src={
                                                                  item
                                                                    ?.reply_user_info
                                                                    ?.profiles_image ===
                                                                    null
                                                                    ? notifImg
                                                                    : item
                                                                      ?.reply_user_info
                                                                      ?.profiles_image
                                                                }
                                                                alt="notifImg"
                                                              />
                                                            </div>
                                                            <div className="notif-content">
                                                              <div className="d-flex justify-content-between align-items-center">
                                                                <h6>
                                                                  {
                                                                    item
                                                                      ?.reply_user_info
                                                                      ?.name
                                                                  }
                                                                </h6>
                                                              </div>
                                                              {issubeditcomment ===
                                                                item?.id ? (
                                                                <div>
                                                                  {issubedit ? (
                                                                    <p>
                                                                      {
                                                                        item?.comment
                                                                      }
                                                                    </p>
                                                                  ) : (
                                                                    <div
                                                                      className="comment-box d-flex justify-content-between align-items-center"
                                                                      data-aos="fade"
                                                                    >
                                                                      <form
                                                                        id="comment_idsss"
                                                                        onSubmit={(
                                                                          e
                                                                        ) =>
                                                                          handleEditedcomment(
                                                                            e,
                                                                            item.id
                                                                          )
                                                                        }
                                                                      >
                                                                        <input
                                                                          type="text"
                                                                          defaultValue={
                                                                            item?.comment
                                                                          }
                                                                          name="comment"
                                                                          id="comment"
                                                                          onChange={
                                                                            handleCommentediting
                                                                          }
                                                                          required
                                                                        />
                                                                        <button type="submit">
                                                                          <svg
                                                                            width="21"
                                                                            height="21"
                                                                            viewBox="0 0 21 21"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                          >
                                                                            <path
                                                                              d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z"
                                                                              fill="white"
                                                                            />
                                                                          </svg>
                                                                        </button>
                                                                      </form>
                                                                    </div>
                                                                  )}
                                                                </div>
                                                              ) : (
                                                                <p>
                                                                  {
                                                                    item?.comment
                                                                  }
                                                                </p>
                                                              )}

                                                            </div>
                                                            <div className="dropdown ms-auto float-end">
                                                              <button
                                                                className="border-0 bg-transparent"
                                                                type="button"
                                                                id="dropdownMenuButton1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                              >
                                                                <svg
                                                                  width="4"
                                                                  height="14"
                                                                  viewBox="0 0 4 14"
                                                                  fill="none"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                  <circle
                                                                    cx="1.84211"
                                                                    cy="1.84211"
                                                                    r="1.84211"
                                                                    fill="#BABABA"
                                                                  />
                                                                  <circle
                                                                    cx="1.84211"
                                                                    cy="7"
                                                                    r="1.84211"
                                                                    fill="#BABABA"
                                                                  />
                                                                  <circle
                                                                    cx="1.84211"
                                                                    cy="12.1579"
                                                                    r="1.84211"
                                                                    fill="#BABABA"
                                                                  />
                                                                </svg>
                                                              </button>

                                                              <ul
                                                                className="dropdown-menu comment_edit_delete"
                                                                aria-labelledby="dropdownMenuButton1"
                                                              >
                                                                {localStorage.getItem(
                                                                  "profile-id"
                                                                ) ==
                                                                  item.user_id ? (
                                                                  <li>
                                                                    <button
                                                                      className="border-0 bg-transparent"
                                                                      onClick={(
                                                                        e
                                                                      ) =>
                                                                        handleSubEdit(
                                                                          e,
                                                                          item.id
                                                                        )
                                                                      }
                                                                    >
                                                                      <svg
                                                                        width="13"
                                                                        height="13"
                                                                        viewBox="0 0 13 13"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                      >
                                                                        <path
                                                                          d="M12.2308 3.00444L10.1111 0.873881C9.971 0.734516 9.78144 0.656281 9.58385 0.656281C9.38625 0.656281 9.1967 0.734516 9.05663 0.873881L1.5419 8.37777L0.855793 11.3389C0.832124 11.4471 0.832936 11.5593 0.858168 11.6672C0.883399 11.7751 0.932415 11.876 1.00163 11.9625C1.07085 12.049 1.15852 12.119 1.25824 12.1673C1.35796 12.2156 1.46721 12.241 1.57801 12.2417C1.62964 12.2469 1.68166 12.2469 1.73329 12.2417L4.7269 11.5555L12.2308 4.05888C12.3702 3.91881 12.4484 3.72925 12.4484 3.53166C12.4484 3.33407 12.3702 3.14451 12.2308 3.00444ZM4.36579 10.9055L1.55996 11.4942L2.19913 8.74249L7.82163 3.14166L9.98829 5.30833L4.36579 10.9055ZM10.4722 4.78471L8.30551 2.61805L9.56218 1.3686L11.6927 3.53527L10.4722 4.78471Z"
                                                                          fill="black"
                                                                        />
                                                                      </svg>
                                                                      Bewerken
                                                                    </button>
                                                                  </li>
                                                                ) : null}
                                                                <li>
                                                                  <button
                                                                    className="border-0 bg-transparent"
                                                                    onClick={() =>
                                                                      handleDelete(
                                                                        item.id
                                                                      )
                                                                    }
                                                                  >
                                                                    <svg
                                                                      width="13"
                                                                      height="13"
                                                                      viewBox="0 0 13 13"
                                                                      fill="none"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                      <path
                                                                        d="M5.41671 2.70833H7.58337C7.58337 2.42102 7.46924 2.14547 7.26607 1.9423C7.06291 1.73914 6.78736 1.625 6.50004 1.625C6.21272 1.625 5.93717 1.73914 5.73401 1.9423C5.53084 2.14547 5.41671 2.42102 5.41671 2.70833ZM4.60421 2.70833C4.60421 2.45937 4.65324 2.21284 4.74852 1.98283C4.84379 1.75282 4.98344 1.54382 5.15948 1.36778C5.33553 1.19173 5.54452 1.05209 5.77454 0.956812C6.00455 0.861537 6.25108 0.8125 6.50004 0.8125C6.74901 0.8125 6.99553 0.861537 7.22554 0.956812C7.45556 1.05209 7.66455 1.19173 7.8406 1.36778C8.01664 1.54382 8.15629 1.75282 8.25156 1.98283C8.34684 2.21284 8.39587 2.45937 8.39587 2.70833H11.5105C11.6182 2.70833 11.7215 2.75113 11.7977 2.82732C11.8739 2.90351 11.9167 3.00684 11.9167 3.11458C11.9167 3.22233 11.8739 3.32566 11.7977 3.40185C11.7215 3.47803 11.6182 3.52083 11.5105 3.52083H10.7955L10.1617 10.081C10.1131 10.5836 9.87898 11.0501 9.50503 11.3895C9.13109 11.7289 8.64412 11.9169 8.13912 11.9167H4.86096C4.35605 11.9167 3.86922 11.7287 3.49539 11.3893C3.12156 11.05 2.88752 10.5835 2.83892 10.081L2.20462 3.52083H1.48962C1.38188 3.52083 1.27855 3.47803 1.20236 3.40185C1.12618 3.32566 1.08337 3.22233 1.08337 3.11458C1.08337 3.00684 1.12618 2.90351 1.20236 2.82732C1.27855 2.75113 1.38188 2.70833 1.48962 2.70833H4.60421ZM5.68754 5.28125C5.68754 5.17351 5.64474 5.07017 5.56855 4.99399C5.49237 4.9178 5.38904 4.875 5.28129 4.875C5.17355 4.875 5.07022 4.9178 4.99403 4.99399C4.91784 5.07017 4.87504 5.17351 4.87504 5.28125V9.34375C4.87504 9.45149 4.91784 9.55483 4.99403 9.63101C5.07022 9.7072 5.17355 9.75 5.28129 9.75C5.38904 9.75 5.49237 9.7072 5.56855 9.63101C5.64474 9.55483 5.68754 9.45149 5.68754 9.34375V5.28125ZM7.71879 4.875C7.82654 4.875 7.92987 4.9178 8.00605 4.99399C8.08224 5.07017 8.12504 5.17351 8.12504 5.28125V9.34375C8.12504 9.45149 8.08224 9.55483 8.00605 9.63101C7.92987 9.7072 7.82654 9.75 7.71879 9.75C7.61105 9.75 7.50772 9.7072 7.43153 9.63101C7.35534 9.55483 7.31254 9.45149 7.31254 9.34375V5.28125C7.31254 5.17351 7.35534 5.07017 7.43153 4.99399C7.50772 4.9178 7.61105 4.875 7.71879 4.875ZM3.64762 10.003C3.67684 10.3045 3.8173 10.5843 4.04162 10.7879C4.26593 10.9915 4.55803 11.1042 4.86096 11.1042H8.13912C8.44205 11.1042 8.73415 10.9915 8.95847 10.7879C9.18278 10.5843 9.32324 10.3045 9.35246 10.003L9.97971 3.52083H3.02037L3.64762 10.003Z"
                                                                        fill="black"
                                                                      />
                                                                    </svg>
                                                                    Verwijderen
                                                                  </button>
                                                                </li>
                                                              </ul>
                                                            </div>
                                                          </div>
                                                        </li>
                                                      </>
                                                    );
                                                  }
                                                )}
                                                <div>
                                                  <div className="comment-box d-flex justify-content-between align-items-center" >
                                                    <img src={props.profileData?.profiles_image === null ? Creator : props.profileData?.profiles_image} className="subimage" />
                                                    <form id="comments_id" onSubmit={(e) => handleSubmit(e, item?.post_id, item?.id)}>
                                                      <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" onChange={handleChange} required />
                                                      <button type="submit">
                                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                          <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="#818181" />
                                                        </svg>
                                                      </button>
                                                    </form>
                                                  </div>
                                                </div>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div> : null}
                                  </div>

                                </div>
                              </li>
                            </>
                          )
                        })}

                      </ul>

                    </div>
                  </div>
                </div>

                <div className="comment-box d-flex justify-content-between align-items-center" style={{ "--sub-pink": `${props.theme_Data?.primary_color}` }}>
                  <img src={props.profileData?.profiles_image === null ? Creator : props.profileData?.profiles_image} />
                  <form id="comments_id" onSubmit={(e) => handleSubmit(e, initial_data?.id, "0")}>
                    <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" onChange={handleChange} required />
                    <button type="submit" className="comment_icon">
                      <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="#818181" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              :
              initial_data.comments !== 0 && initial_data.total_comments === 0 ?
                <>
                  <div className="comment-box d-flex justify-content-between align-items-center" style={{ "--sub-pink": `${props.theme_Data?.primary_color}` }}>
                    <img src={props.profileData?.profiles_image === null ? Creator : props.profileData?.profiles_image} />
                    <form id="comment_id" action="file.php"

                      onSubmit={(e) => handleSubmit(e, 0, initial_data.id)}
                      autoComplete="off"  >
                      <input type="text" placeholder="Comment plaatsen" name="comment" id="comment" onChange={handleChange} required />

                      <button type="submit" className="comment_icon">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.6943 3.24003C17.5725 3.15714 17.4312 3.10738 17.2844 3.09565C17.1376 3.08392 16.9902 3.11062 16.8568 3.17313L2.46145 9.94741C2.3143 10.0168 2.19024 10.127 2.1041 10.265C2.01796 10.403 1.97338 10.5629 1.9757 10.7255C1.97803 10.8882 2.02715 11.0467 2.11719 11.1822C2.20724 11.3176 2.3344 11.4243 2.48347 11.4894L7.05611 13.4904V19.1825L11.9979 15.6531L16.032 17.4178C16.1566 17.4723 16.2924 17.4961 16.4281 17.487C16.5637 17.478 16.6952 17.4364 16.8114 17.3658C16.9276 17.2952 17.0251 17.1976 17.0957 17.0814C17.1662 16.9652 17.2077 16.8337 17.2167 16.698L18.0635 3.99621C18.0727 3.84898 18.0436 3.70186 17.9789 3.56929C17.9141 3.43672 17.8161 3.32326 17.6943 3.24003V3.24003ZM15.6061 15.3829L11.1444 13.4302L13.8304 8.17425L7.35333 11.7731L4.87055 10.6867L16.2776 5.31804L15.6061 15.3829V15.3829Z" fill="#818181" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </>
                : null
            }
          </div>
        </div>
        <div className="col-md-4">
          <div className="naar-right">
          {props.feedlist?.data?.map((item, index) => {
            return (
              <>
                <div
                  className="creator-video side-sm-vdo mt-4"
                  data-aos="fade-up"
                  key={index}
                  onClick={() => handleGet(item?.id)}
                >
                  {/* <div className="creator-nm-detail d-flex justify-content-start align-items-center">
                      <div>
                        <img
                          src={`https://subfee.techstriker.com/backend/public${item?.creator_detail?.profile_image}`}
                        />
                      </div>
                      <div className="ms-2">
                        <p className="mb-0">{item?.creator_detail?.first_name}</p>
                      </div>
                    </div> */}

                  {item.video !== null ? (
                    <div className="single-video">
                      <ReactPlayer
                        className="videoFrame"
                        url={`https://subfee.techstriker.com/backend/public${item.video}`}
                        light={`https://subfee.techstriker.com/backend/public${item.thumbnail}`}
                        playing={false}
                        // controls
                        // onPlay={() => handleViewCount(item.id, item.user_id)}
                        width="100"
                      />
                      {/* <div className="video-like-btn d-flex justify-content-start align-items-center">
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
                                                          </div> */}
                    </div>
                  ) : item.thumbnail !== null ? (
                    <div className="single-video">
                      <img
                        src={`https://subfee.techstriker.com/backend/public${item.thumbnail}`}
                        className="feed-img"
                      />

                    </div>
                  ) : null}

                  <h6 className="mt-3">{item?.title}</h6>
                  <p className="video-desc">{item?.desc}</p>
                  {/* {item.thumbnail === null && item.video === null ?
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
                                                  : null} */}
                  <div></div>
                </div>
              </>
            );
          })}
          </div>
        </div>
      </div>

      <CustomModal
        show={bulkShow}
        hide={onHide}
        bulkDelete={confirmDelete}
        popupHeader="Content verwijderen"
        popupText="Weet je zeker dat je de geselecteerde content wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt."
        confirmbuttonText="Ja, ik weet het zeker"
        cancelbuttonText="Nee, ik wil dit niet"
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state,
  getnaardata: state.feed?.naar_info?.data,
  listComment: state.feed?.comment_list?.data,
  commentadd: state.feed.create_comment,
  commentdelete: state,
  deletedComment: state.feed?.comment_delete?.data,
  editComment: state.feed?.edit_comment?.data,
  feedlist: state.feed?.feed_list?.data,
  profileData: state.setting?.profile_data?.data,
});

export default connect(mapStateToProps, {
  get_feed_data,
  get_Naar,
  list_Comment,
  create_feed_comment,
  create_comment_delete,
  edit_comment,
})(Video);