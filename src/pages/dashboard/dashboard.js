import React from "react";
import notifImg from "../../assets/images/subs.png";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Dashboard = () => {
  const options = {
    chart: {
      height: (230) + 'px',
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
    colors: ['#65006B', '#ff6a6a'],
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

  return (
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row justify-content-start dashb">
            <div className="col-md-10">
              <div className="user-welcome">
                <p>Hey Luke</p>
                <h1>Welkom terug👋</h1>
              </div>
            </div>
            <div className="col-md-12 text-end mb-4">
              <button className="dash-calender-btn"><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.7656 4.13281H15.9922V2.69531C15.9922 2.59648 15.9113 2.51562 15.8125 2.51562H14.5547C14.4559 2.51562 14.375 2.59648 14.375 2.69531V4.13281H8.625V2.69531C8.625 2.59648 8.54414 2.51562 8.44531 2.51562H7.1875C7.08867 2.51562 7.00781 2.59648 7.00781 2.69531V4.13281H3.23438C2.83682 4.13281 2.51562 4.454 2.51562 4.85156V19.7656C2.51562 20.1632 2.83682 20.4844 3.23438 20.4844H19.7656C20.1632 20.4844 20.4844 20.1632 20.4844 19.7656V4.85156C20.4844 4.454 20.1632 4.13281 19.7656 4.13281ZM18.8672 18.8672H4.13281V10.332H18.8672V18.8672ZM4.13281 8.80469V5.75H7.00781V6.82812C7.00781 6.92695 7.08867 7.00781 7.1875 7.00781H8.44531C8.54414 7.00781 8.625 6.92695 8.625 6.82812V5.75H14.375V6.82812C14.375 6.92695 14.4559 7.00781 14.5547 7.00781H15.8125C15.9113 7.00781 15.9922 6.92695 15.9922 6.82812V5.75H18.8672V8.80469H4.13281Z" fill="#65006B"/>
              </svg> 13-01-22 - 17-01-22
              </button>
            </div>
            <div className="col-md-4">
              <div className="dash-card dc-one d-flex align-items-center justify-content-between">
                <div>
                  <h2>2.547</h2>
                  <p>Aantal subscribers</p>
                </div>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9999 25C30.7529 25 35.4166 20.3363 35.4166 14.5833C35.4166 8.83036 30.7529 4.16666 24.9999 4.16666C19.247 4.16666 14.5833 8.83036 14.5833 14.5833C14.5833 20.3363 19.247 25 24.9999 25Z" stroke="white" stroke-width="4.16667"/>
                <path d="M35.4166 29.1667H36.15C37.673 29.1671 39.1435 29.7237 40.2852 30.7318C41.4269 31.74 42.1611 33.1303 42.35 34.6417L43.1645 41.15C43.2378 41.7363 43.1855 42.3315 43.0112 42.8961C42.8369 43.4606 42.5444 43.9816 42.1533 44.4246C41.7623 44.8675 41.2814 45.2221 40.7428 45.465C40.2041 45.7079 39.62 45.8335 39.0291 45.8333H10.9708C10.3799 45.8335 9.79579 45.7079 9.25714 45.465C8.7185 45.2221 8.23767 44.8675 7.84658 44.4246C7.45548 43.9816 7.16306 43.4606 6.98872 42.8961C6.81438 42.3315 6.76211 41.7363 6.83538 41.15L7.64788 34.6417C7.83683 33.1296 8.57166 31.7387 9.7142 30.7304C10.8567 29.7222 12.3283 29.1661 13.852 29.1667H14.5833" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dash-card dc-two d-flex align-items-center justify-content-between">
                <div>
                  <h2>2.547</h2>
                  <p>Nieuwe subscribers</p>
                </div>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9999 25C30.7529 25 35.4166 20.3363 35.4166 14.5833C35.4166 8.83037 30.7529 4.16667 24.9999 4.16667C19.247 4.16667 14.5833 8.83037 14.5833 14.5833C14.5833 20.3363 19.247 25 24.9999 25Z" stroke="white" stroke-width="4.16667"/>
                <path d="M35.4166 45.8333H10.9708C10.3799 45.8335 9.79579 45.7079 9.25714 45.465C8.7185 45.2222 8.23767 44.8675 7.84658 44.4246C7.45548 43.9817 7.16306 43.4606 6.98872 42.8961C6.81438 42.3315 6.76211 41.7363 6.83538 41.15L7.64788 34.6417C7.83683 33.1296 8.57166 31.7387 9.7142 30.7305C10.8567 29.7222 12.3283 29.1661 13.852 29.1667H14.5833M39.5833 27.0833V39.5833M33.3333 33.3333H45.8333" stroke="white" stroke-width="4.16667" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="col-md-4">
              <div className="dash-card dc-three d-flex align-items-center justify-content-between">
                <div>
                  <h2>€ 8.549</h2>
                  <p>Behaalde omzet</p>
                </div>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.3125 7.8125H4.6875C3.82324 7.8125 3.125 8.51074 3.125 9.375V40.625C3.125 41.4893 3.82324 42.1875 4.6875 42.1875H45.3125C46.1768 42.1875 46.875 41.4893 46.875 40.625V9.375C46.875 8.51074 46.1768 7.8125 45.3125 7.8125ZM6.64062 11.3281H43.3594V17.1875H6.64062V11.3281ZM43.3594 38.6719H6.64062V21.4844H43.3594V38.6719ZM31.7871 35.5469H39.8438C40.0586 35.5469 40.2344 35.3711 40.2344 35.1562V31.6406C40.2344 31.4258 40.0586 31.25 39.8438 31.25H31.7871C31.5723 31.25 31.3965 31.4258 31.3965 31.6406V35.1562C31.3965 35.3711 31.5723 35.5469 31.7871 35.5469Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="col-md-8">
              <div className="setting-tab">
                <div className="setting-tab-content pb-0">
                  <h6 className="stats-page-title">Subscriber groei</h6>
                  <div className="mt-4">
                    <HighchartsReact
                      highcharts={Highcharts}
                      options={options}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
            <div className="setting-tab">
                <div className="setting-tab-content">
                  <h6 className="stats-page-title">Videoprestaties</h6>
                  <div className="video-stats d-flex justify-content-start align-items-center">
                    <span className="vs-icon vs-one d-flex justify-content-center align-items-center">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.241 14.4483C12.736 14.4483 13.9479 13.2364 13.9479 11.7414C13.9479 10.2465 12.736 9.03458 11.241 9.03458C9.74608 9.03458 8.53418 10.2465 8.53418 11.7414C8.53418 13.2364 9.74608 14.4483 11.241 14.4483Z" fill="white"/>
                    <path d="M21.3511 11.5114C20.5552 9.45256 19.1735 7.67211 17.3767 6.39006C15.5799 5.10801 13.4468 4.38056 11.2411 4.29762C9.03535 4.38056 6.90227 5.10801 5.10547 6.39006C3.30868 7.67211 1.92693 9.45256 1.13101 11.5114C1.07726 11.66 1.07726 11.8228 1.13101 11.9715C1.92693 14.0303 3.30868 15.8108 5.10547 17.0928C6.90227 18.3749 9.03535 19.1023 11.2411 19.1853C13.4468 19.1023 15.5799 18.3749 17.3767 17.0928C19.1735 15.8108 20.5552 14.0303 21.3511 11.9715C21.4049 11.8228 21.4049 11.66 21.3511 11.5114ZM11.2411 16.1401C10.3711 16.1401 9.52068 15.8821 8.79733 15.3988C8.07398 14.9154 7.5102 14.2285 7.17728 13.4247C6.84436 12.621 6.75725 11.7366 6.92697 10.8833C7.0967 10.0301 7.51562 9.2463 8.13078 8.63114C8.74594 8.01598 9.5297 7.59706 10.3829 7.42733C11.2362 7.25761 12.1206 7.34472 12.9244 7.67764C13.7281 8.01056 14.4151 8.57434 14.8984 9.29769C15.3817 10.021 15.6397 10.8715 15.6397 11.7414C15.6379 12.9075 15.1739 14.0252 14.3494 14.8498C13.5249 15.6743 12.4071 16.1383 11.2411 16.1401Z" fill="white"/>
                    </svg>
                    </span>
                    <div>
                      <small>Aantal views</small>
                      <h6>12.573</h6>
                    </div>
                  </div>
                  <div className="video-stats d-flex justify-content-start align-items-center">
                    <span className="vs-icon vs-two d-flex justify-content-center align-items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.48514 3.76233C4.10001 3.76233 2.16638 5.69596 2.16638 8.08109C2.16638 12.3998 7.27037 16.326 10.0187 17.2392C12.767 16.326 17.871 12.3998 17.871 8.08109C17.871 5.69596 15.9373 3.76233 13.5522 3.76233C12.0917 3.76233 10.8 4.48749 10.0187 5.59741C9.62043 5.03016 9.09138 4.56722 8.4763 4.24779C7.86122 3.92836 7.17822 3.76184 6.48514 3.76233Z" fill="white" stroke="white" stroke-width="1.57046" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <div>
                      <small>Aantal likes</small>
                      <h6>283</h6>
                    </div>
                  </div>
                  <div className="video-stats d-flex justify-content-start align-items-center">
                    <span className="vs-icon vs-three d-flex justify-content-center align-items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2428 2.19619H3.6791C2.81299 2.19619 2.10864 2.90054 2.10864 3.76665V17.9008L5.24956 14.7599H16.2428C17.1089 14.7599 17.8132 14.0555 17.8132 13.1894V3.76665C17.8132 2.90054 17.1089 2.19619 16.2428 2.19619Z" fill="white"/>
                    </svg>
                    </span>
                    <div>
                      <small>Aantal comments</small>
                      <h6>114</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <div className="support-banner d-flex justify-content-between align-items-center">
                <h2>
                  Heb je vragen of kom je ergens niet uit? <br/>
                  <span>Neem contact op met onze support!</span>
                </h2>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="colored-btn me-4">
                    <a href="#">E-mail support</a>
                  </div>
                  <div className="light-btn">
                    <a href="#">Telefonisch support</a>
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
