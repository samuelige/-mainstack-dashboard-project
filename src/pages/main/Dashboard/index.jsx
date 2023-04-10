import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CCard, CCol, CContainer, CRow } from "@coreui/react";
import "../../../assets/css/pages/dashboard.css";
import { config } from "../../../utils/helper.js";
import { dashboardDataAction } from "../../../stateManagement/reactQuery/actions/dashboardAction";
import { dayandmonth } from "../../../utils/dayAndMonth";

const Dashboard = () => {  
    const [retriveGraphData, setRetriveGraphData] = useState();
    const [retriveTopLocationsData, setRetriveTopLocationsData] = useState({
        category: [],
        total_value: [],
    });
    const [retriveTopSourceData, setRetriveTopSourceData] = useState({
        category: [],
        total_value: [],
    });
    const {data: dashboardData } = useQuery(["dashboardData"], dashboardDataAction, {refetchOnWindowFocus: false});
    
    useEffect(() => {
        if (dashboardData?.data?.graph_data?.views) {
            setRetriveGraphData(dashboardData?.data?.graph_data?.views);
        }

        if (dashboardData?.data?.top_locations) {
            const valueCategory = [];
            const valueTotalValue = [];

            dashboardData?.data?.top_locations.map((item) => {
                if (item.country) {
                    valueCategory.push(item.country);
                }
        
                if (item.percent) {
                    valueTotalValue.push(Math.floor(item.percent));
                }
        
                return null;
              });
    
            setRetriveTopLocationsData(
              {
                category: valueCategory,
                totalValue: valueTotalValue,
              },
            );
        }

        if (dashboardData?.data?.top_sources) {
            const valueCategory = [];
            const valueTotalValue = [];

            dashboardData?.data?.top_sources.map((item) => {
                if (item.source) {
                    valueCategory.push(item.source);
                }
        
                if (item.percent) {
                    valueTotalValue.push(Math.floor(item.percent));
                }
        
                return null;
              });
    
            setRetriveTopSourceData(
              {
                category: valueCategory,
                totalValue: valueTotalValue,
              },
            );
        }
    }, [dashboardData]);

    const orderSummaryEl = document.querySelector("#orderSummaryChart");

    const orderSummaryConfig = {
      chart: {
        height: 280,
        type: "area",
        toolbar: false,
        dropShadow: {
          enabled: true,
          top: 18,
          left: 2,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15,
        },
      },
      markers: {
        size: 6,
        colors: "transparent",
        strokeColors: "transparent",
        strokeWidth: 4,
        discrete: [
          {
            fillColor: config.colors_dark.cardColor,
            seriesIndex: 0,
            dataPointIndex: 9,
            strokeColor: config.colors.warning,
            strokeWidth: 4,
            size: 6,
            radius: 2,
          },
        ],
        hover: {
          size: 7,
        },
      },
   
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], 
          opacity: 0.5,
          border: "1px dashed",
          borderColor: "#DBDEE6",
        },
      },
      series: [
        {
            name: "View all",
          data: retriveGraphData && Object.values(retriveGraphData),
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      colors: [config.colors.warning],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.8,
          opacityFrom: 0.7,
          opacityTo: 0.25,
          stops: [0, 95, 100],
        },
      },
      xaxis: {
        categories: retriveGraphData && Object.keys(retriveGraphData),
        labels: {
          offsetX: 0,
          style: {
            colors: config.colors_dark.axisColor,
            fontSize: "13px",
          },
          formatter: (val) => dayandmonth(val),
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        lines: {
          show: false,
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
      },

    };

    const orderSummary = new window.ApexCharts(orderSummaryEl, orderSummaryConfig);

    useEffect(() => {
        if (typeof orderSummaryEl !== "undefined" && orderSummaryEl !== null) {
            orderSummary.render();
        }
      }, [retriveGraphData]);

      const topLocationsEl = document.querySelector("#top_locations");

      const topLocationsConfig = {
        chart: {
            height: 280,
            type: "donut",
            toolbar: false,
        },
        series: retriveTopLocationsData.totalValue?.length ? 
        [...retriveTopLocationsData.totalValue] : [0],
 
        labels: [...retriveTopLocationsData.category],
        dataLabels: {
            enabled: false,
        },
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
        }],
      };

      const topLocations = new window.ApexCharts(topLocationsEl, topLocationsConfig);

    useEffect(() => {
        if (typeof topLocationsEl !== "undefined" && topLocationsEl !== null) {
            topLocations.render();
        }
      }, [retriveTopLocationsData]);

      const topSourceEl = document.querySelector("#top_sources");

      const topSourceConfig = {
        chart: {
            height: 280,
            type: "donut",
            toolbar: false,
        },
        series: retriveTopSourceData.totalValue?.length ? 
        [...retriveTopSourceData.totalValue] : [0],
 
        labels: [...retriveTopSourceData.category],
        dataLabels: {
            enabled: false,
        },
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
        }],
      };

      const topSource = new window.ApexCharts(topSourceEl, topSourceConfig);

    useEffect(() => {
        if (typeof topSourceEl !== "undefined" && topSourceEl !== null) {
            topSource.render();
        }
      }, [retriveTopSourceData]);
    
    return (
        <div>
            <CContainer fluid className="db__section">
                <section className="db__header-aside-left">
                    <h1>Good morning, Blessing ⛅️</h1>
                    <p>Check out your dashboard summary.</p>
                </section>

                <p className="db__header-aside-right">View  analytics</p>
            </CContainer>
            <CContainer fluid>
                <section className="db__badge-container">
                    <div className="db__badge db__shared-badge">1 Day</div>
                    <div className="db__badge db__shared-badge">3 Days</div>
                    <div className="db__badge db__shared-badge">7 Days</div>
                    <div className="db__badge db__shared-badge">90 Days</div>
                    <div className="db__badge db__orange-badge">All Time</div>
                    <div className="db__badge db__shared-badge">Custom Date</div>
                </section>

            </CContainer>

            <CContainer fluid className="db__graph-container">
                
                <CCard>
                    <div className="card__title">
                        <div className="card__title-container">
                            <h3>Page Views</h3>
                            <AiOutlineInfoCircle />
                        </div>
                        <p className="card__title-text-xs">All time</p>
                        <h1>500</h1>
                    </div>
                    
                    <div id="orderSummaryChart" />
                </CCard>
            </CContainer>

            <CContainer fluid className="mt-4">
                <CRow xs={{ gutterY: 4 }}>
                    <CCol>
                        <CCard>
                            <div className="card__title-container  card__title-container-shared">
                                <h3>Top Locations</h3>
                                <p>View full reports</p>
                            </div>
                            <div id="top_locations" />
                        </CCard>
                    </CCol>
                    <CCol>
                        <CCard>
                            <div className="card__title-container card__title-container-shared">
                                <h3>Top Locations</h3>
                                <p>View full reports</p>
                            </div>
                            <div id="top_sources" />
                        </CCard>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    );
};

export default Dashboard;
