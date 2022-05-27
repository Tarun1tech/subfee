import React from "react";
import notifImg from "../../assets/images/subs.png";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Dashboard = () => {
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
    colors: ['#bf00a5', '#ff6a6a'],
    series: [
      {
        name: "Installation",
        data: [1200, 2000, 3500, 4200, 4700],
      },
      {
        name: "Manufacturing",
        data: [1500, 2100, 3600, 4000, 5000],
      },
    ],
  };

  const BarOption = {
    chart: {
      type: "column",
    },
    xAxis: {
      gridLineWidth: 0,
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0,
    },
    colors: ['#bf00a5', '#ff6a6a'],
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
          <div className="row justify-content-end">
            <div className="col-md-6 text-end">
              <div className="sticky-bell">
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
            </div>
          </div>
          <div className="row justify-content-start dashb">
            <div className="col-md-10">
              <div className="user-welcome">
                <p>Hey Luke</p>
                <h1>Welkom terug👋</h1>
              </div>
            </div>
            <div className="col-md-5">
              <div className="setting-tab">
                <div className="setting-tab-content">
                  <h6 className="stats-page-title">Algemeen</h6>
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
                                d="M2.66668 9.33267L8.66668 9.33333C9.00306 9.33323 9.32705 9.46027 9.57371 9.689C9.82036 9.91772 9.97145 10.2312 9.99668 10.5667L10 10.6667V11.6667C9.99934 14 7.52268 14.6667 5.66668 14.6667C3.85201 14.6667 1.44334 14.0293 1.33668 11.82L1.33334 11.6667V10.666C1.33334 9.96333 1.87734 9.38733 2.56668 9.336L2.66668 9.33333V9.33267ZM10.1467 9.33333H13.3333C13.6696 9.33339 13.9934 9.46051 14.24 9.68922C14.4865 9.91793 14.6375 10.2313 14.6627 10.5667L14.6667 10.6667V11.3333C14.666 13.3747 12.7613 14 11.3333 14C10.8497 14.0011 10.3686 13.9288 9.90668 13.7853C10.1307 13.528 10.3113 13.234 10.4413 12.9007C10.7342 12.9661 11.0333 12.9994 11.3333 13L11.5113 12.996C12.168 12.9673 13.5687 12.754 13.662 11.47L13.6667 11.3333V10.6667C13.6666 10.5887 13.6392 10.5132 13.5893 10.4533C13.5393 10.3934 13.47 10.3528 13.3933 10.3387L13.3333 10.3333H10.6327C10.5775 10.007 10.4411 9.69976 10.236 9.44L10.1467 9.33333H13.3333H10.1467ZM2.66668 10.3327L2.60001 10.3393C2.53602 10.3527 2.47723 10.3841 2.43068 10.43C2.3848 10.4763 2.35331 10.5349 2.34001 10.5987L2.33334 10.666V11.6667C2.33334 12.3393 2.63334 12.8147 3.27801 13.1613C3.82868 13.458 4.61334 13.6373 5.45534 13.6633L5.66668 13.6667L5.87801 13.6633C6.72001 13.6373 7.50401 13.458 8.05534 13.1613C8.65934 12.836 8.96134 12.398 8.99668 11.79L9.00001 11.666V10.6667C8.99991 10.5887 8.97252 10.5132 8.9226 10.4533C8.87267 10.3934 8.80336 10.3528 8.72668 10.3387L8.66668 10.3333L2.66668 10.3327ZM5.66668 2C6.46233 2 7.22539 2.31607 7.788 2.87868C8.35061 3.44129 8.66668 4.20435 8.66668 5C8.66668 5.79565 8.35061 6.55871 7.788 7.12132C7.22539 7.68393 6.46233 8 5.66668 8C4.87103 8 4.10797 7.68393 3.54536 7.12132C2.98275 6.55871 2.66668 5.79565 2.66668 5C2.66668 4.20435 2.98275 3.44129 3.54536 2.87868C4.10797 2.31607 4.87103 2 5.66668 2ZM11.6667 3.33333C12.2855 3.33333 12.879 3.57917 13.3166 4.01675C13.7542 4.45434 14 5.04783 14 5.66667C14 6.2855 13.7542 6.879 13.3166 7.31658C12.879 7.75417 12.2855 8 11.6667 8C11.0478 8 10.4543 7.75417 10.0168 7.31658C9.57918 6.879 9.33334 6.2855 9.33334 5.66667C9.33334 5.04783 9.57918 4.45434 10.0168 4.01675C10.4543 3.57917 11.0478 3.33333 11.6667 3.33333ZM5.66668 3C4.56401 3 3.66668 3.89733 3.66668 5C3.66668 6.10267 4.56401 7 5.66668 7C6.76934 7 7.66668 6.10267 7.66668 5C7.66668 3.89733 6.76934 3 5.66668 3ZM11.6667 4.33333C10.9313 4.33333 10.3333 4.93133 10.3333 5.66667C10.3333 6.402 10.9313 7 11.6667 7C12.402 7 13 6.402 13 5.66667C13 4.93133 12.402 4.33333 11.6667 4.33333Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="ts-text">
                          <p>Subscribers</p>
                          <h4>1750</h4>
                        </div>
                        <span className="count-up">
                          <svg
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.28284 0.717157C3.12663 0.560947 2.87337 0.560947 2.71716 0.717157L0.171573 3.26274C0.0153632 3.41895 0.0153632 3.67222 0.171573 3.82843C0.327783 3.98464 0.581048 3.98464 0.737258 3.82843L3 1.56569L5.26274 3.82843C5.41895 3.98464 5.67222 3.98464 5.82843 3.82843C5.98464 3.67222 5.98464 3.41895 5.82843 3.26274L3.28284 0.717157ZM3.4 7L3.4 1H2.6L2.6 7H3.4Z"
                              fill="#4FB665"
                            />
                          </svg>
                          25.8%
                        </span>
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
                                d="M8.66667 4.16667C8.66667 4.34348 8.59643 4.51305 8.4714 4.63807C8.34638 4.76309 8.17681 4.83333 8 4.83333C7.82319 4.83333 7.65362 4.76309 7.5286 4.63807C7.40357 4.51305 7.33333 4.34348 7.33333 4.16667C7.33333 3.98985 7.40357 3.82029 7.5286 3.69526C7.65362 3.57024 7.82319 3.5 8 3.5C8.17681 3.5 8.34638 3.57024 8.4714 3.69526C8.59643 3.82029 8.66667 3.98985 8.66667 4.16667ZM8.688 1.55C8.48826 1.40415 8.24733 1.32555 8 1.32555C7.75267 1.32555 7.51174 1.40415 7.312 1.55L2.36467 5.16C1.71267 5.63533 2.04933 6.66667 2.85533 6.66667H3V10.5333C2.69896 10.687 2.44625 10.9208 2.26977 11.209C2.0933 11.4973 1.99994 11.8287 2 12.1667V13.1667C2 13.442 2.224 13.6667 2.5 13.6667H13.5C13.6326 13.6667 13.7598 13.614 13.8536 13.5202C13.9473 13.4265 14 13.2993 14 13.1667V12.1667C14.0001 11.8287 13.9067 11.4973 13.7302 11.209C13.5538 10.9208 13.301 10.687 13 10.5333V6.66667H13.1447C13.9513 6.66667 14.2867 5.63533 13.6353 5.16L8.688 1.54933V1.55ZM7.90133 2.35733C7.92988 2.33647 7.96431 2.32523 7.99967 2.32523C8.03502 2.32523 8.06946 2.33647 8.098 2.35733L12.6333 5.66667H3.36667L7.902 2.35733H7.90133ZM12 6.66667V10.3333H10.6667V6.66667H12ZM9.66667 6.66667V10.3333H8.5V6.66667H9.66667ZM7.5 6.66667V10.3333H6.33333V6.66667H7.5ZM3.83333 11.3333H12.1667C12.6267 11.3333 13 11.7067 13 12.1667V12.6667H3V12.1667C3 11.7067 3.37333 11.3333 3.83333 11.3333ZM4 10.3333V6.66667H5.33333V10.3333H4Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="ts-text">
                          <p>Inkomsten</p>
                          <h4>€ 57k</h4>
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
                  <div className="mt-4">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="setting-tab">
                <div className="setting-tab-content">
                  <h6 className="stats-page-title">Inkomstenrapport</h6>
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
                                d="M8 4.69921C8.17685 4.69921 8.34645 4.62895 8.4715 4.50391C8.59655 4.37886 8.6668 4.20925 8.6668 4.03241C8.6668 3.85556 8.59655 3.68596 8.4715 3.56091C8.34645 3.43586 8.17685 3.36561 8 3.36561C7.82315 3.36561 7.65355 3.43586 7.5285 3.56091C7.40345 3.68596 7.3332 3.85556 7.3332 4.03241C7.3332 4.20925 7.40345 4.37886 7.5285 4.50391C7.65355 4.62895 7.82315 4.69921 8 4.69921ZM12.8 10.672V6.40001H12.8736C13.588 6.40001 13.8816 5.48161 13.2976 5.06801L8.6176 1.74641C8.43717 1.61823 8.22133 1.54936 8 1.54936C7.77867 1.54936 7.56283 1.61823 7.3824 1.74641L2.7008 5.06801C2.1184 5.48161 2.4104 6.39921 3.1248 6.39921H3.2V10.6712C2.7192 10.98 2.4 11.5192 2.4 12.1328V13.1992C2.4 13.3053 2.44214 13.407 2.51716 13.4821C2.59217 13.5571 2.69391 13.5992 2.8 13.5992H13.2C13.3061 13.5992 13.4078 13.5571 13.4828 13.4821C13.5579 13.407 13.6 13.3053 13.6 13.1992V12.1328C13.6 11.5192 13.2816 10.98 12.8 10.672ZM7.8448 2.39921C7.88982 2.36731 7.94363 2.35018 7.9988 2.35018C8.05397 2.35018 8.10778 2.36731 8.1528 2.39921L12.664 5.59921H3.3344L7.8456 2.39921H7.8448ZM11.9984 6.39921V10.404C11.9542 10.4007 11.9099 10.3991 11.8656 10.3992H10.3984V6.40001H11.9984V6.39921ZM4 10.404V6.40001H5.6V10.4H4.1328C4.088 10.4 4.0432 10.4016 3.9992 10.4048L4 10.404ZM4.1336 11.1992H11.8672C12.3824 11.1992 12.8 11.6168 12.8 12.1328V12.7992H3.2V12.1328C3.2 11.6168 3.6184 11.1992 4.1336 11.1992ZM7.6 10.3992H6.4V6.40001H7.6V10.4V10.3992ZM8.4 10.3992V6.40001H9.6V10.4H8.4V10.3992Z"
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
                          <p>Deze maand</p>
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
                  <div className="mt-4">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={BarOption}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="setting-tab">
                    <div className="setting-tab-content">
                      <h6 className="stats-page-title">Inkomsten deze maand</h6>
                      <div className="dash-bottom-one text-center">
                        <h2>€ 17.4k</h2>
                        <p>
                          Update je betaalmethode op de{" "}
                          <span>instellingen</span> pagina.
                        </p>
                        <div className="web-btn">
                          <a href="#">Bekijk de inzichten</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="setting-tab">
                    <div className="setting-tab-content">
                      <h6 className="stats-page-title">Gemiddelde kijktijd</h6>
                      <div className="mt-4">
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={BarOption}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="setting-tab">
                    <div className="setting-tab-content">
                      <h6 className="stats-page-title">Nieuwste comments</h6>
                      <div className="dash-latest-comment">
                        <ul>
                          <li>
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="notif-img">
                                <img src={notifImg} />
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
                                <img src={notifImg} />
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
                                <img src={notifImg} />
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
                                <img src={notifImg} />
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
                    </div>
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

export default Dashboard;
