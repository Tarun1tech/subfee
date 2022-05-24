import React from "react";
import SubsImg from '../../assets/images/subs.png';

const Subscribers = () => {
    return(
        <div>
            <div className="dash-content-side">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-md-6 text-end">
                            <div className="sticky-bell">
                                <span className="bell-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 11V8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8V11C5 14.3 2 15.1 2 17C2 18.7 5.9 20 12 20C18.1 20 22 18.7 22 17C22 15.1 19 14.3 19 11Z" stroke="#65006B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 22C10.989 22 10.039 21.966 9.14502 21.9C9.53619 23.1478 10.6924 23.997 12 23.997C13.3077 23.997 14.4639 23.1478 14.855 21.9C13.961 21.966 13.011 22 12 22Z" fill="#65006B"/>
                                </svg>
                                <span className="notification-count">2</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-11">
                            <div className="setting-tab subs-page">
                            <h6 className="stats-page-title">Alle subscribers</h6>
                            <table className='table'>
                                            <thead>
                                              <tr>
                                                <th></th>
                                                <th></th>
                                                <th>E-mailadres</th>
                                                <th>Lid sinds</th>
                                                <th><svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 6.33333H12.5V16.625C12.5 16.835 12.4342 17.0363 12.3169 17.1848C12.1997 17.3333 12.0408 17.4167 11.875 17.4167H3.125C2.95924 17.4167 2.80027 17.3333 2.68306 17.1848C2.56585 17.0363 2.5 16.835 2.5 16.625V6.33333ZM3.75 7.91666V15.8333H11.25V7.91666H3.75ZM5.625 9.49999H6.875V14.25H5.625V9.49999ZM8.125 9.49999H9.375V14.25H8.125V9.49999ZM4.375 3.95833V2.37499C4.375 2.16503 4.44085 1.96367 4.55806 1.8152C4.67527 1.66674 4.83424 1.58333 5 1.58333H10C10.1658 1.58333 10.3247 1.66674 10.4419 1.8152C10.5592 1.96367 10.625 2.16503 10.625 2.37499V3.95833H13.75V5.54166H1.25V3.95833H4.375ZM5.625 3.16666V3.95833H9.375V3.16666H5.625Z" fill="#C4C4C4"/>
                                                </svg>
                                                </th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                              <tr>
                                                <td><input type='checkbox' name='subscriber' /></td>
                                                <td><div className='subs-table-row d-flex justify-content-start align-items-center'><div><img src={SubsImg} /></div><div><p>John Doe</p><span>@Johndoeissubscribed</span></div></div></td>
                                                <td>johndoe92@gmail.com</td>
                                                <td>21-03-2021</td>
                                                <td></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        <div className='text-center mt-4 pt-4'>
                                            <nav aria-label="Page navigation example">
                                            <ul className="pagination justify-content-center">
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                                <li className="page-item"><a className="page-link" href="#">6</a></li>
                                                <li className="page-item">
                                                <a className="page-link content-next-table" href="#">Volgende</a>
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
    )
}


export default Subscribers;