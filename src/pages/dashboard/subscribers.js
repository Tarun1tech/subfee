import React from "react";
import SubsImg from "../../assets/images/subs.png";
import Csv from "../../assets/images/csv.png";
import Excel from "../../assets/images/excel.png";

const Subscribers = () => {
  return (
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="setting-tab subs-page">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="stats-page-title">Alle subscribers</h6>
                  </div>
                  <div>
                    <button className="export-subscribers-btn" type="button" data-bs-toggle="modal" data-bs-target="#exportSubs">Exporteren</button>
                    <div class="modal fade" id="exportSubs" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-modal-size">
                        <div class="modal-content">
                          <div class="modal-body export-subs-body">
                          <h6 className="stats-page-title">Subscribers exporteren</h6>
                          <p className="mt-3">Bestandsformaat</p>
                          <form>
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                            <label class="custom-export-select">
                              <div>
                              <input type="checkbox"/>
                              <div className="file-icon"><img src={Csv} /> CSV</div>
                              </div>
                            </label>                          
                            </div>
                            <div>
                            <label class="custom-export-select">
                              <div>
                              <input type="checkbox"/>
                              <div className="file-icon"><img src={Excel} />XLSX</div>
                              </div>
                            </label>
                            </div>
                          </div>
                          <button className="chose-btn-export" data-bs-dismiss="modal">Exporteren</button>
                          </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>E-mailadres</th>
                      <th>Lid sinds</th>
                      <th>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg" />
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg}alt="subsImg" />
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" name="subscriber" />
                      </td>
                      <td>
                        <div className="subs-table-row d-flex justify-content-start align-items-center">
                          <div>
                            <img src={SubsImg} alt="subsImg"/>
                          </div>
                          <div>
                            <p>John Doe</p>
                            <span>@Johndoeissubscribed</span>
                          </div>
                        </div>
                      </td>
                      <td>johndoe92@gmail.com</td>
                      <td>21-03-2021</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center mt-4 pt-4">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          6
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link content-next-table" href="#">
                          Volgende
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
