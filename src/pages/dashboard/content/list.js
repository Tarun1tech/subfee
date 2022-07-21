import React, { useState, useEffect } from "react";
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import CustomModal from "../../../layouts/modal/modal";
import Pagination from "../../../layouts/pagination/pagination";
import { get_content_data, create_delete, get_content_by_id_data, reset_app } from "../../../redux/content/actions";
import ContentUpdate from "./content-update";
let PageSize = 10;

const ContentList = (props) => {
    const { contentlistbyid, deletelist, get_content_data } = props;
    const token = localStorage.getItem("access_token")
    const [totalPage, setTotalPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1);
    const [bulkShow, setBulkShow] = useState(false);
    const [bodyData, setBodyData] = useState([]);
    const [bulkDeleteBtn, setBulkDeleteBtn] = useState(false)
    const [bulkDeleteId, setBulkDeleteId] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showvideo, setShowvideo] = useState(false);

    useEffect(() => {
        get_content_data({
            page: currentPage
        });
    }, [token]);
    const handlePerPage = (page) => {
        get_content_data({
            page: page
        });
        setCurrentPage(page)
    }
    useEffect(() => {
        if (props.contentlist?.data?.length > 0) {
            setTotalPage(props.contentlist?.total)
        }
    }, [])

    const handleShowvideo = (id) => {
        props.get_content_by_id_data({
            id: id
        })
        setShowvideo(true);
    };

    const hidevideo = () => {
        props.reset_app();
        setShowvideo(false);
    }

    useEffect(() => {
        if (props.contentlist !== undefined && props.contentlist?.data?.length > 0) {
            let bData = [];
            props.contentlist?.data.forEach((e) => {
                let result = {};
                let checked = {};
                result = e;
                e.checked = false;
                checked = e.checked;
                let data = { ...result, checked };
                bData.push(data);
                return null;
            });
            setBodyData(bData);
        }
        //eslint-disable-next-line
    }, [props.contentlist])

    const isChecked = (id) => {
        const data = bodyData.map((el) => {
            if (el.id === id && el.checked === false) {
                el.checked = true;
                return el;
            } else if (el.id === id && el.checked === true) {
                el.checked = false;
                return el;
            } else return el;
        });
        setBodyData(data);
        const deleteBulk = data.some((el) => el.checked === true);
        setBulkDeleteBtn(deleteBulk);
    };

    const bulkDeletePop = (bodyData) => {
        const data = bodyData.filter((el) => el.checked === true);
        const bId = [];
        for (let i of data) {
            bId.push(i.id);
        }
        setBulkDeleteId(bId);
        setBulkShow(true);
    };

    const bulkDelete = () => {
        props.create_delete({
            ids: bulkDeleteId
        })
    }

    useEffect(() => {
        if (contentlistbyid !== null || contentlistbyid !== undefined) {
            setLoading(false);
        }
        if (deletelist?.success) {
            get_content_data({
                page: currentPage
            });
            setBulkShow(false);
            setBulkDeleteBtn(false);
        } else {
            toast.error(deletelist?.message)
        }
    }, [loading, contentlistbyid, deletelist, get_content_data])
    const onHide = () => {
        setBulkShow(false);
        setBulkDeleteBtn(false);
        get_content_data({
            page: currentPage
        });
    };
    return (
        <div className="col-md-12 mt-4">
            <div className="setting-tab">
                <div className="setting-tab-content">
                    <h6 className="stats-page-title">Recent geüploade content</h6>
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Views</th>
                                <th>Likes</th>
                                <th>Gemiddelde kijktijd</th>
                                {bulkDeleteBtn ? (
                                    <th onClick={() => bulkDeletePop(bodyData)}>
                                        <svg
                                            width="15"
                                            height="19"
                                            viewBox="0 0 15 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.5 6.33333H12.5V16.625C12.5 16.835 12.4342 17.0363 12.3169 17.1848C12.1997 17.3333 12.0408 17.4167 11.875 17.4167H3.125C2.95924 17.4167 2.80027 17.3333 2.68306 17.1848C2.56585 17.0363 2.5 16.835 2.5 16.625V6.33333ZM3.75 7.91666V15.8333H11.25V7.91666H3.75ZM5.625 9.49999H6.875V14.25H5.625V9.49999ZM8.125 9.49999H9.375V14.25H8.125V9.49999ZM4.375 3.95833V2.37499C4.375 2.16503 4.44085 1.96367 4.55806 1.8152C4.67527 1.66674 4.83424 1.58333 5 1.58333H10C10.1658 1.58333 10.3247 1.66674 10.4419 1.8152C10.5592 1.96367 10.625 2.16503 10.625 2.37499V3.95833H13.75V5.54166H1.25V3.95833H4.375ZM5.625 3.16666V3.95833H9.375V3.16666H5.625Z"
                                                fill="#C4C4C4"
                                            />
                                        </svg>
                                    </th>
                                ) : null}
                            </tr>
                        </thead>
                        <tbody>
                            {bodyData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input type="checkbox" checked={item.checked} onClick={() => isChecked(item.id)} />
                                        </td>
                                        <td>
                                            <div className="subs-table-row d-flex justify-content-start align-items-center">
                                                <div className="video-thumb-sec">
                                                    {
                                                        (item.thumbnail != null ? <img src={`https://subfee.techstriker.com/backend/public/${item?.thumbnail}`} /> : <img src="" className="d-none" />)
                                                    }
                                                </div>
                                                <div>
                                                    <p>{item.title}</p>
                                                    <span><Moment format="DD/MM/YYYY">{item.updated_at}</Moment></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.1713 7.308C14.4873 7.72134 14.4873 8.27934 14.1713 8.692C13.176 9.99134 10.788 12.6667 8 12.6667C5.212 12.6667 2.824 9.99134 1.82867 8.692C1.67492 8.49409 1.59146 8.25061 1.59146 8C1.59146 7.74939 1.67492 7.50591 1.82867 7.308C2.824 6.00867 5.212 3.33334 8 3.33334C10.788 3.33334 13.176 6.00867 14.1713 7.308V7.308Z"
                                                    stroke="#65006B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                                                    stroke="#65006B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {item.view}
                                        </td>
                                        <td>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.66666 2C2.826 2 1.33333 3.47733 1.33333 5.3C1.33333 6.77133 1.91666 10.2633 7.65866 13.7933C7.76152 13.8559 7.8796 13.889 8 13.889C8.12039 13.889 8.23847 13.8559 8.34133 13.7933C14.0833 10.2633 14.6667 6.77133 14.6667 5.3C14.6667 3.47733 13.174 2 11.3333 2C9.49266 2 8 4 8 4C8 4 6.50733 2 4.66666 2Z"
                                                    stroke="#D90000" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            {item.likes} likes
                                        </td>
                                        <td>
                                            {item?.video !== null ?
                                                <>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.9375 10.7266L14.936 10.725L14.9344 10.7234C14.2453 9.26562 13.1781 8.51562 11.7578 8.51562C10.3375 8.51562 9.27032 9.26719 8.5797 10.7234V10.725C8.49532 10.9047 8.49532 11.1141 8.5797 11.2937C9.27032 12.75 10.3375 13.5 11.7578 13.5C13.1781 13.5 14.2453 12.7484 14.936 11.2922C15.0203 11.1125 15.0203 10.9047 14.9375 10.7266ZM11.7578 12.5C10.7875 12.5 10.0797 12.0312 9.55314 11.0078C10.0781 9.98438 10.7875 9.51562 11.7578 9.51562C12.7281 9.51562 13.4359 9.98438 13.9625 11.0078C13.4375 12.0312 12.7281 12.5 11.7578 12.5Z"
                                                            fill="#65006B"
                                                        />
                                                        <path d="M10.8906 11.0156C10.8906 11.2477 10.9828 11.4702 11.1469 11.6343C11.311 11.7984 11.5336 11.8906 11.7656 11.8906C11.9977 11.8906 12.2202 11.7984 12.3843 11.6343C12.5484 11.4702 12.6406 11.2477 12.6406 11.0156C12.6406 10.7836 12.5484 10.561 12.3843 10.3969C12.2202 10.2328 11.9977 10.1406 11.7656 10.1406C11.5336 10.1406 11.311 10.2328 11.1469 10.3969C10.9828 10.561 10.8906 10.7836 10.8906 11.0156ZM2.125 3.625H13.125V7.57812H14.25V3C14.25 2.72344 14.0266 2.5 13.75 2.5H1.5C1.22344 2.5 1 2.72344 1 3V11.125C1 11.4016 1.22344 11.625 1.5 11.625H7V10.5H2.125V3.625Z"
                                                            fill="#65006B"
                                                        />
                                                        <path d="M11.3266 5.28281L10.7516 4.70781C10.7031 4.65938 10.6234 4.65938 10.575 4.70781L7.70312 7.58281L6.35781 6.23594C6.30937 6.1875 6.22968 6.1875 6.18124 6.23594L3.92656 8.49063C3.87812 8.53906 3.87812 8.61875 3.92656 8.66719L4.50156 9.24219C4.54999 9.29063 4.62968 9.29063 4.67812 9.24219L6.26874 7.65156L7.61406 8.99844C7.66249 9.04688 7.74218 9.04688 7.79062 8.99844L11.3266 5.45938C11.3766 5.41094 11.3766 5.33125 11.3266 5.28281Z"
                                                            fill="#65006B"
                                                        />
                                                    </svg>
                                                    1m 46s
                                                </>
                                                : "-"}
                                        </td>
                                        <td className="icon_setting">
                                            <span onClick={() => handleShowvideo(item.id)}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 2.45175C10.5 1.926 10.074 1.5 9.54825 1.5H8.4525C7.926 1.5 7.5 1.926 7.5 2.45175C7.5 2.88525 7.203 3.25725 6.79875 3.41625C6.735 3.44175 6.67125 3.46875 6.609 3.49575C6.21075 3.66825 5.7375 3.61575 5.43 3.309C5.25153 3.13066 5.00955 3.03048 4.75725 3.03048C4.50495 3.03048 4.26297 3.13066 4.0845 3.309L3.309 4.0845C3.13066 4.26297 3.03048 4.50495 3.03048 4.75725C3.03048 5.00955 3.13066 5.25153 3.309 5.43C3.6165 5.7375 3.669 6.21 3.495 6.609C3.46766 6.67179 3.44141 6.73505 3.41625 6.79875C3.25725 7.203 2.88525 7.5 2.45175 7.5C1.926 7.5 1.5 7.926 1.5 8.45175V9.54825C1.5 10.074 1.926 10.5 2.45175 10.5C2.88525 10.5 3.25725 10.797 3.41625 11.2013C3.44175 11.265 3.46875 11.3288 3.495 11.391C3.66825 11.7893 3.61575 12.2625 3.309 12.57C3.13066 12.7485 3.03048 12.9904 3.03048 13.2428C3.03048 13.4951 3.13066 13.737 3.309 13.9155L4.0845 14.691C4.26297 14.8693 4.50495 14.9695 4.75725 14.9695C5.00955 14.9695 5.25153 14.8693 5.43 14.691C5.7375 14.3835 6.21 14.331 6.609 14.5043C6.67125 14.532 6.735 14.5583 6.79875 14.5838C7.203 14.7428 7.5 15.1148 7.5 15.5483C7.5 16.074 7.926 16.5 8.45175 16.5H9.54825C10.074 16.5 10.5 16.074 10.5 15.5483C10.5 15.1148 10.797 14.7428 11.2013 14.583C11.265 14.5583 11.3288 14.532 11.391 14.505C11.7893 14.331 12.2625 14.3843 12.5693 14.691C12.6576 14.7794 12.7626 14.8496 12.8781 14.8974C12.9936 14.9453 13.1174 14.9699 13.2424 14.9699C13.3674 14.9699 13.4912 14.9453 13.6067 14.8974C13.7222 14.8496 13.8271 14.7794 13.9155 14.691L14.691 13.9155C14.8693 13.737 14.9695 13.4951 14.9695 13.2428C14.9695 12.9904 14.8693 12.7485 14.691 12.57C14.3835 12.2625 14.331 11.79 14.5043 11.391C14.532 11.3288 14.5583 11.265 14.5838 11.2013C14.7428 10.797 15.1148 10.5 15.5483 10.5C16.074 10.5 16.5 10.074 16.5 9.54825V8.4525C16.5 7.92675 16.074 7.50075 15.5483 7.50075C15.1148 7.50075 14.7428 7.20375 14.583 6.7995C14.5579 6.73579 14.5316 6.67253 14.5043 6.60975C14.3318 6.2115 14.3843 5.73825 14.691 5.43075C14.8693 5.25228 14.9695 5.0103 14.9695 4.758C14.9695 4.5057 14.8693 4.26372 14.691 4.08525L13.9155 3.30975C13.737 3.13141 13.4951 3.03123 13.2428 3.03123C12.9904 3.03123 12.7485 3.13141 12.57 3.30975C12.2625 3.61725 11.79 3.66975 11.391 3.4965C11.3282 3.46891 11.265 3.4424 11.2013 3.417C10.797 3.25725 10.5 2.88525 10.5 2.4525V2.45175Z" stroke="#C4C4C4" stroke-width="1.33333" />
                                                <path d="M12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9V9Z" stroke="#C4C4C4" stroke-width="1.33333" />
                                            </svg>
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={totalPage}
                        pageSize={PageSize}
                        onPageChange={page => handlePerPage(page)}
                    />
                </div>
            </div>
            {!loading && props.contentlistbyid &&
                < ContentUpdate
                    show={showvideo}
                    hide={() => hidevideo()}
                    data={props.contentlistbyid}
                />
            }

            <CustomModal
                show={bulkShow}
                hide={onHide}
                bulkDelete={bulkDelete}
                popupHeader="Content verwijderen"
                popupText="Weet je zeker dat je de geselecteerde content wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt."
                confirmbuttonText="Ja, ik weet het zeker"
                cancelbuttonText="Nee, ik wil dit niet"
            />
        </div>
    )
}
const mapStateToProps = state => ({
    ...state,
    contentlist: state.content?.content_list?.data,
    contentlistbyid: state.content?.contentlistbyid?.data,
    deletelist: state.content?.content_delete?.data?.data
});

export default connect(mapStateToProps, { get_content_data, create_delete, get_content_by_id_data, reset_app })(ContentList);