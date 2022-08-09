import React, { useState, useEffect, useRef } from "react";
import Moment from 'react-moment';
import SubsImg from "../../assets/images/subs.png";
import Csv from "../../assets/images/csv.png";
import Excel from "../../assets/images/excel.png";
import Pagination from "../../layouts/pagination/pagination";
import { connect } from "react-redux";
import { get_subscriber_data, get_subscriber_data_search } from "../../redux/subscriber/actions";
import { CSVLink } from "react-csv";
import Modal from "react-bootstrap/Modal";
import { setIn } from "immutable";

let PageSize = 10;
const Subscribers = (props) => {
  const { get_subscriber_data, get_subscriber_data_search } = props;
  const token = localStorage.getItem("access_token");
  const [totalPage, setTotalPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1);
  const [bodyData, setBodyData] = useState([]);
  const [stripeStatus, setStripeStatus] = useState("");
  const [searchData, setSearchData] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false);
  const [inactive, setInActive] = useState(false);
  const headers = [
    { label: 'Voornaam', key: 'first_name' },
    { label: 'Achternaam', key: 'last_name' },
    { label: 'E-mailadres', key: 'email' },
    { label: 'Abonnement status', key: 'new_status' }
  ]

  useEffect(() => {
    get_subscriber_data_search({
      page: currentPage
    });
  }, [token]);
  const handlePerPage = (page) => {
    get_subscriber_data_search({
      page: page
    });
    setCurrentPage(page)
  }
  useEffect(() => {
    if (props.subscriberlist?.data?.length > 0) {
      setTotalPage(props.subscriberlist?.total)
    }
  }, [])
  const [actives, setActives] = useState(true);
  const [inactives, setInActives] = useState(true)
  const handleFilter = (data) => {
    setActives(!actives)
    setStripeStatus(data)
    console.log(actives, "actives")
    if (actives) {
      setActive(true);
      setInActive(false)
      get_subscriber_data_search({
        page: currentPage,
        stripe_status: 1,
        search_query: searchData
      });
    } else {
      setInActive(false);
      setActive(false);
      get_subscriber_data_search({
        page: currentPage,
        search_query: searchData
      });
    }
    // get_subscriber_data_search({
    //   page: currentPage,
    //   stripe_status: data
    // });
  }
  const handleFilterActive = (data) => {
    setInActives(!inactives)
    setStripeStatus(data)
    console.log(inactives, "actives")
    if (inactives) {
      setInActive(true)
      setActive(false)
      get_subscriber_data_search({
        page: currentPage,
        stripe_status: "0",
        search_query: searchData
      });
    } else {
      setInActive(false);
      setActive(false)
      get_subscriber_data_search({
        page: currentPage,
        search_query: searchData
      });
    }
    // get_subscriber_data_search({
    //   page: currentPage,
    //   stripe_status: data
    // });
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchData(value);
  };
  const onglobalSearch = (e) => {
    e.preventDefault();
    get_subscriber_data_search({
      stripe_status: stripeStatus,
      search_query: searchData
    });
  }
  useEffect(() => {
    if (props.subscriberlist !== undefined && props.subscriberlist?.data?.length > 0) {
      let bData = [];
      props.subscriberlist?.data.forEach((e) => {
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
  }, [props.subscriberlist])

  const ref = useRef();

  const cleanValue = () => {
    ref.current.value = "";
    setSearchData("");
  }

  return (
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="setting-tab subs-page">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h6 className="stats-page-title">Alle subscribers</h6>
                  </div>
                  <div className="col-md-4 position-relative">
                    <form onSubmit={(e) => onglobalSearch(e)}>
                      <input type="search" placeholder="Zoeken...." name="search" className="subscriber-search" onChange={handleSearch} onBlur={(e) => onglobalSearch(e)} ref={ref} />{!searchData ? null : <span className="crossx" onClick={cleanValue}>x</span>}
                    </form>
                  </div>
                  <div className="col-md-4 text-end">
                    <button className={active ? "table-header-active me-2" : "table-header-inactive me-2"} onClick={() => handleFilter("1", "active")}>Actief</button>
                    <button className={inactive ? "table-header-active me-5" : "table-header-inactive me-5"} onClick={() => handleFilterActive("0", "active")}>Inactief</button>
                    <button className="export-subscribers-btn" type="button" onClick={() => setShow(true)}>Exporteren</button>
                    {/* <div class="modal fade" id="exportSubs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-modal-size">
                        <div class="modal-content">
                          <div class="modal-body export-subs-body"> */}
                    <Modal className="modal " show={show} size="md" onHide={() => setShow(false)} backdrop="static"
                      keyboard={false}>
                      <div class=" modal-modal-size">
                        <Modal.Header closeButton>
                          <div>
                            <h6 className="stats-page-title">Subscribers exporteren</h6>
                            <p className="mt-3">Bestandsformaat</p>
                          </div>
                        </Modal.Header>

                        <div class="modal-body export-subs-body pt-0">
                          <form>
                            <div className="d-flex justify-content-center align-items-center">
                              <div>
                                <label class="custom-export-select">
                                  <div>
                                    <input type="checkbox" />
                                    <div className="file-icon" onClick={() => setSheetName("csv")}>
                                      <img src={Csv} className="icon_csv" />
                                      CSV</div>
                                  </div>
                                </label>
                              </div>
                              <div>
                                <label class="custom-export-select">
                                  <div>
                                    <input type="checkbox" />
                                    <div className="file-icon" onClick={() => setSheetName("xls")}><img src={Excel} className="icon_csv" />
                                      XLSX</div>
                                  </div>
                                </label>
                              </div>
                            </div>
                            <CSVLink data={bodyData}
                              target="_blank" headers={headers} filename={`subscriber.${sheetName}`}
                            >
                              <div className="chose-btn-export text-center" onClick={() => setShow(false)}>


                                Exporteren

                              </div>
                            </CSVLink>

                          </form>
                        </div>
                      </div>
                    </Modal>
                    {/*      </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <table className="table" id="tbl_exporttable_to_xls">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>E-mailadres</th>
                      <th>Lid sinds</th>
                      <th>Abonnement status</th>

                    </tr>
                  </thead>
                  <tbody>
                    {props.subscriberlist?.data.length > 0 ? props.subscriberlist?.data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input type="checkbox" checked={item.checked} />
                          </td>
                          <td>
                            <div className="subs-table-row d-flex justify-content-start align-items-center">
                              <div>
                                {
                                  (item.profile_image != null ? <img src={`${item?.profile_image}`} /> : <img src={SubsImg} className="d-none" />)
                                }
                              </div>
                              <div>
                                <p>{item?.first_name}</p>
                                <span>@{item?.name}</span>
                              </div>
                            </div>
                          </td>
                          <td>{item?.email}</td>
                          <td>  <span><Moment format="DD/MM/YYYY">{item.updated_at}</Moment></span></td>
                          <td><button className={item.stripe_status ? "active-one" : "inactive-one"}>{item.stripe_status ? "Actief" : "InActief"}</button></td>
                          <td></td>
                        </tr>
                      );
                    }) : <tr className="text-center">
                      No Data Found
                    </tr>}

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

          </div>
        </div>
      </div >
    </div >
  );
};

const mapStateToProps = state => ({
  ...state,
  subscriberlist: state.subscriber?.subscriber_data?.data?.data?.data
});

export default connect(mapStateToProps, { get_subscriber_data, get_subscriber_data_search })(Subscribers);