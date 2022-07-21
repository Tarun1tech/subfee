import React from "react";
import SubsImg from "../../../assets/images/subs.png";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Subscribe = () => {
  const options = {
    chart: {
      height: (320) + "px",
    },
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
      height: (240) + "px",
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
      <div className="row">
        <div className="col-md-12">
          <div className="setting-tab">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-subscribers"
                role="tabpanel"
                aria-labelledby="nav-subscribers-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="setting-tab-content pb-0">
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
                  <div className="col-md-6">
                    <div className="setting-tab-content pb-0">
                      <h6 className="stats-page-title">
                        Aantal nieuwe subscribers (tijdlijn){" "}
                      </h6>
                      <div className="chart-keypoint d-flex justify-content-start align-items-center">
                        <p className="purp-dot">Bestaande subscribers</p>
                        <p className="pink-dot">Nieuwe subscribers</p>
                      </div>
                      <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mt-4">
                    <div className="setting-tab-content">
                      <h6 className="stats-page-title">Nieuwste subscribers</h6>

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
                                  <img src={SubsImg} alt="SubsImg" />
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
                                  <img src={SubsImg} alt="SubImg" />
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
                                  <img src={SubsImg} alt="SubsImg" />
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
  );
};
export default Subscribe;
