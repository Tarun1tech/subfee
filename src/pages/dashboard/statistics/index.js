import React from "react";
import Tabs from "../../../layouts/tabs/tabs";
import Subscribe from "./subscribe";
import Omzet from "./omzet";

const Statistics = () => {  
  const data = [
    {
      heading: "Subscribers",
      body: <Subscribe />,
      disabled: false,
      icons:''
    },
    {
      heading: "Omzet",
      body: <Omzet />,
      disabled: false,
      icons:''
    },
    {
      heading: "Videoprestaties",
      body: "none",
      disabled: true,
      icons: <svg
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
    }
  ]
  
  
  return (
    <>
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="setting-tab">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {/* <button
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
                    </button> */}
                    <Tabs data={data}>
                     
                    
                    
                    </Tabs>
                  </div>
                </nav>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};
export default Statistics;
