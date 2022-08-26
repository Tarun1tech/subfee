import React, { useState, useEffect } from "react";
import Highcharts, { map } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { connect } from "react-redux";
import { get_Financial_Data } from "../../redux/financial/actions";
import { get_profile_data } from "../../redux/settings/actions";



const Finanical = (props) => {

  /* graph data states */
  const [totalrevenue, setTotalrevenue] = useState("");
  const [thismonth, setThismonth] = useState("");

  /* get financial data */
  const token = localStorage.getItem("access_token");
  useEffect(() => {
    props.get_Financial_Data();
  }, [token])

  useEffect(() => {
    setTotalrevenue(props.financialData?.total_revenue_graph);
    setThismonth(props.financialData?.this_month_graph);
  })

  console.log(props.financialData, "here is gonna showing financial data")

  /* const totalRevenue = () => {
    setThismonth("");
    setTotalrevenue(props.financialData?.total_revenue_graph);
  }

  const thisMonth = () => {
    setTotalrevenue("");
    setThismonth(props.financialData?.this_month_graph);
  } */


  /* highchart */
  const BarOption = {
    chart: {
      type: "column",
      height: (195) + 'px'
    },
    xAxis: {
      gridLineWidth: 0,
      categories: ["Oct", "Nov", "Dec", "Jan", "Feb"],
    },
    yAxis: {
      min: 0,
      gridLineWidth: 0,
    },
    colors: ['#65006B', '#ff6a6a'],
    series: [
      {
        name: "Deze maand",
        data: thismonth,
      },
      {
        name: "Totale inkomsten",
        data: totalrevenue,
      },
    ],
  };

  console.log(props.profileData, "here is gonna profile data")


  return (
    <div>
      <div className="dash-content-side">
        <div className="container-fluid">
          <div className="financial_block_outer row justify-content-start dashb">
            <div className="col-md-6">
              {props.profileData?.connect_stripe_status === 1 ?
                <div className="setting-tab">
                  <div className="setting-tab-content">
                    <h6 className="stats-page-title">
                      Verbinden met Stripe
                    </h6>
                    <div className="connected_account d-flex align-items-center justify-content-start">
                      <div>
                        <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M47.9996 5.33339C39.5609 5.33339 31.3117 7.83575 24.2952 12.524C17.2787 17.2123 11.8101 23.8759 8.58071 31.6722C5.35137 39.4685 4.50643 48.0474 6.15273 56.3239C7.79904 64.6004 11.8626 72.2029 17.8297 78.1699C23.7967 84.137 31.3992 88.2006 39.6757 89.8469C47.9522 91.4932 56.5311 90.6483 64.3274 87.4189C72.1237 84.1896 78.7873 78.7209 83.4756 71.7044C88.1639 64.6879 90.6662 56.4387 90.6662 48.0001C90.6662 36.6842 86.171 25.8317 78.1695 17.8302C70.1679 9.82861 59.3155 5.33339 47.9996 5.33339ZM75.8662 33.6801L40.8262 68.6934L20.1329 48.0001C19.4257 47.2928 19.0283 46.3336 19.0283 45.3334C19.0283 44.3332 19.4257 43.374 20.1329 42.6667C20.8401 41.9595 21.7994 41.5622 22.7996 41.5622C23.7998 41.5622 24.759 41.9595 25.4662 42.6667L40.8796 58.0801L70.5862 28.4001C70.9364 28.0499 71.3522 27.7721 71.8097 27.5826C72.2673 27.393 72.7577 27.2955 73.2529 27.2955C73.7481 27.2955 74.2385 27.393 74.6961 27.5826C75.1536 27.7721 75.5694 28.0499 75.9196 28.4001C76.2698 28.7502 76.5475 29.166 76.7371 29.6235C76.9266 30.0811 77.0241 30.5715 77.0241 31.0667C77.0241 31.562 76.9266 32.0524 76.7371 32.5099C76.5475 32.9675 76.2698 33.3832 75.9196 33.7334L75.8662 33.6801Z" fill="#14CD48" />
                        </svg>
                      </div>
                      <div className="ms-4">
                        <h6>Verbonden met Strip</h6>
                        <small>Je kunt nu betalingen ontvangen</small>
                        <p className="payee">{props.financialData?.stripe_user_details?.name}</p>
                      </div>
                    </div>
                    <a href="#"/* {props.financialData?.link} */><div className="page-direc text-center">Verbinden met jouw Stripe account</div></a>
                  </div>
                </div> :
                <div className="setting-tab">
                  <div className="setting-tab-content">
                    <h6 className="stats-page-title">
                      Verbinden met Stripe
                    </h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, elit quis ultricies convallis, dolor purus aliquam dui, sed auctor purus leo nec nisl. Praesent maximus hendrerit magna quis sollicitudin. Aliquam et semper ligula. Nam ac tellus ultricies, rutrum dui et, malesuada arcu. Nulla congue at nisl quis semper. Vestibulum scelerisque mi sit amet sodales aliquam. Sed accumsan luctus venenatis. Proin et luctus massa. </p>
                    <a href={props.profileData?.connect_stripe_url}><div className="page-direc text-center">Verbinden met jouw Stripe account</div></a>
                  </div>
                </div>

              }

            </div>
            <div className="col-md-6">
              <div className="setting-tab">
                <div className="setting-tab-content pb-0">
                  <h6 className="stats-page-title">
                    Inkomstenrapport
                  </h6>
                  <div className="stats-count">
                    <div className="total-subs justify-content-between align-items-center">
                      <label className="change_graph">
                        <input type="checkbox" name="this_month" checked />
                        <div className="ts-right change_graph_control d-flex justify-content-start align-items-top">
                          <div className="ts-icon">
                            <span className="purple-icon">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.75 2.875H11.125V1.875C11.125 1.80625 11.0688 1.75 11 1.75H10.125C10.0562 1.75 10 1.80625 10 1.875V2.875H6V1.875C6 1.80625 5.94375 1.75 5.875 1.75H5C4.93125 1.75 4.875 1.80625 4.875 1.875V2.875H2.25C1.97344 2.875 1.75 3.09844 1.75 3.375V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V3.375C14.25 3.09844 14.0266 2.875 13.75 2.875ZM13.125 13.125H2.875V7.1875H13.125V13.125ZM2.875 6.125V4H4.875V4.75C4.875 4.81875 4.93125 4.875 5 4.875H5.875C5.94375 4.875 6 4.81875 6 4.75V4H10V4.75C10 4.81875 10.0562 4.875 10.125 4.875H11C11.0688 4.875 11.125 4.81875 11.125 4.75V4H13.125V6.125H2.875Z" fill="white" />
                              </svg>
                            </span>
                          </div>
                          <div className="ts-text">
                            <p>Deze maand</p>
                            <h4>€ {props.financialData?.this_month}k</h4>
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
                      </label>
                      <label className="change_graph">
                        <div className="ts-left change_graph_control d-flex justify-content-start align-items-top">
                          <div className="ts-icon">
                            <span>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 4.69921C8.17685 4.69921 8.34645 4.62895 8.4715 4.50391C8.59655 4.37886 8.6668 4.20925 8.6668 4.03241C8.6668 3.85556 8.59655 3.68596 8.4715 3.56091C8.34645 3.43586 8.17685 3.36561 8 3.36561C7.82315 3.36561 7.65355 3.43586 7.5285 3.56091C7.40345 3.68596 7.3332 3.85556 7.3332 4.03241C7.3332 4.20925 7.40345 4.37886 7.5285 4.50391C7.65355 4.62895 7.82315 4.69921 8 4.69921ZM12.8 10.672V6.40001H12.8736C13.588 6.40001 13.8816 5.48161 13.2976 5.06801L8.6176 1.74641C8.43717 1.61823 8.22133 1.54936 8 1.54936C7.77867 1.54936 7.56283 1.61823 7.3824 1.74641L2.7008 5.06801C2.1184 5.48161 2.4104 6.39921 3.1248 6.39921H3.2V10.6712C2.7192 10.98 2.4 11.5192 2.4 12.1328V13.1992C2.4 13.3053 2.44214 13.407 2.51716 13.4821C2.59217 13.5571 2.69391 13.5992 2.8 13.5992H13.2C13.3061 13.5992 13.4078 13.5571 13.4828 13.4821C13.5579 13.407 13.6 13.3053 13.6 13.1992V12.1328C13.6 11.5192 13.2816 10.98 12.8 10.672ZM7.8448 2.39921C7.88982 2.36731 7.94363 2.35018 7.9988 2.35018C8.05397 2.35018 8.10778 2.36731 8.1528 2.39921L12.664 5.59921H3.3344L7.8456 2.39921H7.8448ZM11.9984 6.39921V10.404C11.9542 10.4007 11.9099 10.3991 11.8656 10.3992H10.3984V6.40001H11.9984V6.39921ZM4 10.404V6.40001H5.6V10.4H4.1328C4.088 10.4 4.0432 10.4016 3.9992 10.4048L4 10.404ZM4.1336 11.1992H11.8672C12.3824 11.1992 12.8 11.6168 12.8 12.1328V12.7992H3.2V12.1328C3.2 11.6168 3.6184 11.1992 4.1336 11.1992ZM7.6 10.3992H6.4V6.40001H7.6V10.4V10.3992ZM8.4 10.3992V6.40001H9.6V10.4H8.4V10.3992Z" fill="white" />
                              </svg>
                            </span>
                          </div>
                          <div className="ts-text">
                            <p>Totale inkomsten</p>
                            <h4>€ {props.financialData?.total_revenue}k</h4>
                          </div>
                        </div>
                      </label>

                    </div>
                  </div>
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={BarOption}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="setting-tab">
                <div className="setting-tab-content">
                  <h6 className="stats-page-title">Recente uitbetalingen</h6>
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Naar</th>
                        <th>Opties</th>
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
                      {props.financialData?.recent_payments.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <input type="checkbox" name="subscriber" />
                            </td>
                            <td className="td-long">
                              <div className="financial-data">
                                <p>€ {item.stripe_price}</p>
                                <span>{item.starts_at}</span>
                              </div>
                            </td>
                            <td><span className="tbmargin">NL12 RABO 12345678</span></td>
                            <td><span className="tbmargin">Transactie bekijken</span></td>
                            <td></td>
                          </tr>
                        )
                      })}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  ...state,
  financialData: state.financial.financial_data?.data,
  profileData: state.setting.profile_data?.data,
})

export default connect(mapStateToProps, { get_Financial_Data, get_profile_data })(Finanical);
