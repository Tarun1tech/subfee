import React from "react";
import SubsImg from "../../assets/images/subs.png";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Statistics = () => {
  const options = {
    xAxis: {
      gridLineWidth: 1,
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yAxis: {
      gridLineWidth: 1,
    },
    colors: ["#65006B", "#ff6a6a"],
    series: [
      {
        name: "Installation",
        data: [70, 79, 77, 47, 79],
      },
      {
        name: "Manufacturing",
        data: [48, 25, 77, 15, 50],
      },
    ],
  };
  const BarOption = {
    chart: {
      type: "column",
      height: (9 / 16 * 100) + '%'
    },
    xAxis: {
      gridLineWidth: 0,
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0,
    },
    colors: ["#65006B", "#ff6a6a"],
    series: [
      {
        name: "Installation",
        data: [3000, 1200, 2500, 1900, 1200],
      },
      {
        name: "Manufacturing",
        data: [2000, 900, 1600, 1500, 1000],
      },
    ],
  };
  return (
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="setting-tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-subscribers-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-subscribers"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Subscribers
                    </button>
                    <button
                      className="nav-link"
                      id="nav-Omzet-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-Omzet"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Omzet
                    </button>
                    <button
                      style={{ color: "#959595" }}
                      className="nav-link"
                      id="nav-videoprestaties-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-videoprestaties"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                      disabled
                    >
                      Videoprestaties{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 7.25H11.9375V3.75C11.9375 2.64531 11.0422 1.75 9.9375 1.75H6.0625C4.95781 1.75 4.0625 2.64531 4.0625 3.75V7.25H3C2.72344 7.25 2.5 7.47344 2.5 7.75V13.75C2.5 14.0266 2.72344 14.25 3 14.25H13C13.2766 14.25 13.5 14.0266 13.5 13.75V7.75C13.5 7.47344 13.2766 7.25 13 7.25ZM5.1875 3.75C5.1875 3.26719 5.57969 2.875 6.0625 2.875H9.9375C10.4203 2.875 10.8125 3.26719 10.8125 3.75V7.25H5.1875V3.75ZM12.375 13.125H3.625V8.375H12.375V13.125ZM7.5625 10.9531V11.7812C7.5625 11.85 7.61875 11.9062 7.6875 11.9062H8.3125C8.38125 11.9062 8.4375 11.85 8.4375 11.7812V10.9531C8.56648 10.8605 8.66275 10.7294 8.71245 10.5786C8.76216 10.4278 8.76273 10.2651 8.71409 10.114C8.66545 9.96281 8.57011 9.831 8.44179 9.73749C8.31346 9.64398 8.15878 9.5936 8 9.5936C7.84122 9.5936 7.68654 9.64398 7.55821 9.73749C7.42989 9.831 7.33455 9.96281 7.28591 10.114C7.23727 10.2651 7.23784 10.4278 7.28755 10.5786C7.33725 10.7294 7.43352 10.8605 7.5625 10.9531Z"
                          fill="#959595"
                        />
                      </svg>
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-subscribers"
                    role="tabpanel"
                    aria-labelledby="nav-subscribers-tab"
                  >
                    <div className="row">
                      <div className="col-md-5">
                        <div className="setting-tab-content">
                          <h6 className="stats-page-title">
                            Totaal aantal subscribers
                          </h6>
                          <div className="stats-count">
                            <div className="total-subs d-flex justify-content-between align-items-center">
                              <div className="ts-left d-flex justify-content-start align-items-top">
                                <div className="ts-icon">
                                  <span>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13.625 6.15625C13.6938 6.15625 13.75 6.1 13.75 6.03125V5.09375C13.75 5.025 13.6938 4.96875 13.625 4.96875H11.0625V2.375C11.0625 2.30625 11.0063 2.25 10.9375 2.25H9.9375C9.86875 2.25 9.8125 2.30625 9.8125 2.375V4.96875H6.25V2.375C6.25 2.30625 6.19375 2.25 6.125 2.25H5.125C5.05625 2.25 5 2.30625 5 2.375V4.96875H2.375C2.30625 4.96875 2.25 5.025 2.25 5.09375V6.03125C2.25 6.1 2.30625 6.15625 2.375 6.15625H5V9.84375H2.375C2.30625 9.84375 2.25 9.9 2.25 9.96875V10.9062C2.25 10.975 2.30625 11.0312 2.375 11.0312H5V13.625C5 13.6938 5.05625 13.75 5.125 13.75H6.125C6.19375 13.75 6.25 13.6938 6.25 13.625V11.0312H9.8125V13.625C9.8125 13.6938 9.86875 13.75 9.9375 13.75H10.9375C11.0063 13.75 11.0625 13.6938 11.0625 13.625V11.0312H13.625C13.6938 11.0312 13.75 10.975 13.75 10.9062V9.96875C13.75 9.9 13.6938 9.84375 13.625 9.84375H11.0625V6.15625H13.625ZM9.8125 9.84375H6.25V6.15625H9.8125V9.84375Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="ts-text">
                                  <p>Aantal subscribers</p>
                                  <h4>17.543</h4>
                                </div>
                              </div>
                              <div className="ts-right d-flex justify-content-start align-items-top">
                                <div className="ts-icon">
                                  <span className="purple-icon">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_114_981)">
                                        <path
                                          d="M15.3733 10.2222L13.56 8L15.3378 5.82222C15.435 5.70308 15.4963 5.5587 15.5144 5.40599C15.5325 5.25328 15.5067 5.09857 15.44 4.96C15.3724 4.80468 15.2604 4.67284 15.1181 4.58109C14.9757 4.48934 14.8093 4.4418 14.64 4.44444H0.862222C0.750741 4.44268 0.640004 4.46289 0.536336 4.50393C0.432668 4.54497 0.338099 4.60603 0.258032 4.68362C0.177964 4.76121 0.113966 4.85381 0.0696925 4.95614C0.025419 5.05847 0.00173727 5.16852 0 5.28L0 10.7244C0.00467144 10.9488 0.0980006 11.1622 0.259578 11.318C0.421155 11.4737 0.637831 11.5591 0.862222 11.5556H14.6889C14.8526 11.5583 15.0136 11.5141 15.153 11.4283C15.2924 11.3424 15.4043 11.2185 15.4756 11.0711C15.5395 10.9342 15.5638 10.7821 15.5458 10.6321C15.5277 10.482 15.468 10.34 15.3733 10.2222ZM0.888889 10.6667V5.33333H14.5689L12.4178 7.96889L14.6 10.6667H0.888889Z"
                                          fill="white"
                                        />
                                        <path
                                          d="M4.17334 8.60001L2.72445 6.66667H2.22223V9.41334H2.72445V7.48445L4.17334 9.41334H4.67112V6.66667H4.17334V8.60001Z"
                                          fill="white"
                                        />
                                        <path
                                          d="M5.41333 9.41334H7.48444V8.96001H5.91555V8.24445H7.33333V7.78667H5.91555V7.12445H7.48444V6.66667H5.41333V9.41334Z"
                                          fill="white"
                                        />
                                        <path
                                          d="M10.8978 8.63556L10.2489 6.66667H9.70667L9.05333 8.63556L8.46666 6.66667H7.92L8.79111 9.41334H9.28444L9.97778 7.37334L10.6667 9.41334H11.1689L12.0356 6.66667H11.4889L10.8978 8.63556Z"
                                          fill="white"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_114_981">
                                          <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </span>
                                </div>
                                <div className="ts-text">
                                  <p>Waarvan nieuw</p>
                                  <h4>1.252</h4>
                                </div>
                                <span className="count-fall">
                                  <svg
                                    width="6"
                                    height="7"
                                    viewBox="0 0 6 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.71716 6.28284C2.87337 6.43905 3.12663 6.43905 3.28284 6.28284L5.82843 3.73726C5.98464 3.58105 5.98464 3.32778 5.82843 3.17157C5.67222 3.01536 5.41895 3.01536 5.26274 3.17157L3 5.43431L0.737258 3.17157C0.581048 3.01536 0.327783 3.01536 0.171573 3.17157C0.0153632 3.32778 0.0153632 3.58105 0.171573 3.73726L2.71716 6.28284ZM2.6 0L2.6 6H3.4L3.4 0L2.6 0Z"
                                      fill="#FF6A6A"
                                    />
                                  </svg>{" "}
                                  14.5%
                                </span>
                              </div>
                            </div>
                          </div>
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={BarOption}
                          />
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="setting-tab-content">
                          <h6 className="stats-page-title">
                            Aantal nieuwe subscribers (tijdlijn){" "}
                          </h6>
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                        </div>
                      </div>
                      <div className="col-md-10 mt-4">
                        <div className="setting-tab-content">
                          <h6 className="stats-page-title">
                            Nieuwste subscribers
                          </h6>

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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                          <div className="text-center">
                            <button
                              style={{ backgroundColor: "#FE6A6A" }}
                              className="mt-4 maroon-btn"
                            >
                              Alle subscribers bekijken
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-Omzet"
                    role="tabpanel"
                    aria-labelledby="nav-Omzet-tab"
                  >
                    <div className="row">
                      <div className="col-md-5">
                        <div className="setting-tab-content">
                          <h6 className="stats-page-title">
                            Totaal aantal subscribers
                          </h6>
                          <div className="stats-count">
                            <div className="total-subs d-flex justify-content-between align-items-center">
                              <div className="ts-left d-flex justify-content-start align-items-top">
                                <div className="ts-icon">
                                  <span>
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.99995 4.69921C8.1768 4.69921 8.3464 4.62895 8.47145 4.50391C8.5965 4.37886 8.66675 4.20925 8.66675 4.03241C8.66675 3.85556 8.5965 3.68596 8.47145 3.56091C8.3464 3.43586 8.1768 3.36561 7.99995 3.36561C7.82311 3.36561 7.6535 3.43586 7.52846 3.56091C7.40341 3.68596 7.33315 3.85556 7.33315 4.03241C7.33315 4.20925 7.40341 4.37886 7.52846 4.50391C7.6535 4.62895 7.82311 4.69921 7.99995 4.69921ZM12.8 10.672V6.40001H12.8736C13.588 6.40001 13.8816 5.48161 13.2976 5.06801L8.61755 1.74641C8.43712 1.61823 8.22128 1.54936 7.99995 1.54936C7.77863 1.54936 7.56278 1.61823 7.38235 1.74641L2.70075 5.06801C2.11835 5.48161 2.41035 6.39921 3.12475 6.39921H3.19995V10.6712C2.71915 10.98 2.39995 11.5192 2.39995 12.1328V13.1992C2.39995 13.3053 2.4421 13.407 2.51711 13.4821C2.59213 13.5571 2.69387 13.5992 2.79995 13.5992H13.2C13.306 13.5992 13.4078 13.5571 13.4828 13.4821C13.5578 13.407 13.6 13.3053 13.6 13.1992V12.1328C13.6 11.5192 13.2816 10.98 12.8 10.672ZM7.84475 2.39921C7.88977 2.36731 7.94358 2.35018 7.99875 2.35018C8.05393 2.35018 8.10774 2.36731 8.15275 2.39921L12.664 5.59921H3.33435L7.84555 2.39921H7.84475ZM11.9984 6.39921V10.404C11.9542 10.4007 11.9099 10.3991 11.8656 10.3992H10.3984V6.40001H11.9984V6.39921ZM3.99995 10.404V6.40001H5.59995V10.4H4.13275C4.08795 10.4 4.04315 10.4016 3.99915 10.4048L3.99995 10.404ZM4.13355 11.1992H11.8672C12.3824 11.1992 12.8 11.6168 12.8 12.1328V12.7992H3.19995V12.1328C3.19995 11.6168 3.61835 11.1992 4.13355 11.1992ZM7.59995 10.3992H6.39995V6.40001H7.59995V10.4V10.3992ZM8.39995 10.3992V6.40001H9.59995V10.4H8.39995V10.3992Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="ts-text">
                                  <p>Totale inkomsten</p>
                                  <h4>€ 57.4k</h4>
                                </div>
                              </div>
                              <div className="ts-right d-flex justify-content-start align-items-top">
                                <div className="ts-icon">
                                  <span className="purple-icon">
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div className="ts-text">
                                  <p>Deze week</p>
                                  <h4>€ 17.4k</h4>
                                </div>
                                <span className="count-fall">
                                  <svg
                                    width="6"
                                    height="7"
                                    viewBox="0 0 6 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M2.71716 6.28284C2.87337 6.43905 3.12663 6.43905 3.28284 6.28284L5.82843 3.73726C5.98464 3.58105 5.98464 3.32778 5.82843 3.17157C5.67222 3.01536 5.41895 3.01536 5.26274 3.17157L3 5.43431L0.737258 3.17157C0.581048 3.01536 0.327783 3.01536 0.171573 3.17157C0.0153632 3.32778 0.0153632 3.58105 0.171573 3.73726L2.71716 6.28284ZM2.6 0L2.6 6H3.4L3.4 0L2.6 0Z"
                                      fill="#FF6A6A"
                                    />
                                  </svg>{" "}
                                  14.5%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="setting-tab-content">
                          <h6 className="stats-page-title">
                            Behaalde omzet (tijdlijn)
                          </h6>
                        </div>
                      </div>
                      <div className="col-md-10 mt-4">
                        <div className="setting-tab-content">
                          <h6 className="stats-page-title">
                            Nieuwste subscribers
                          </h6>

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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                                      <img src={SubsImg} />
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
                          <div className="text-center">
                            <button
                              style={{ backgroundColor: "#FE6A6A" }}
                              className="mt-4 maroon-btn"
                            >
                              Alle subscribers bekijken
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-videoprestaties"
                    role="tabpanel"
                    aria-labelledby="nav-videoprestaties-tab"
                  >
                    ...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
