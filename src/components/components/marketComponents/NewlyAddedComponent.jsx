import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";


import MarketTabs from "./TabsComponent";
import { useQuery } from "react-query";
import { fetchNewlyAdded } from "../../../apis/AnalyticsAPIs";
import ETHIcon from "../../../assets/image/ETH-icon.png";
import AdminIcon from "../../../assets/image/table-admin-img1.png";
import BarChart from "../charts/BarChartComponent";
import LineChart from "../charts/LineChartComponent";
import { Progress } from "reactstrap";

const NewlyAdded = () => {
  const [collectionData, setCollectionData] = useState([]);

  const getRound = (val) => {
    return Number((val).toFixed(2));
  }


  useEffect(() => {
    axios.get('https://api.nftgo.io/api/v1/ranking/new-added-coll-list?offset=0&limit=10000&by=listedTime&rarity=-1&interval=24h&asc=-1&fields=marketCap,marketCapChange24h,volume24h,floorPrice,minterNum,whaleMinterNum,totalMintGas,listedTime')
      .then(res => {
        setCollectionData(res.data.data.list);

      });
  }, []);

  const tableDataContent = useMemo(() => collectionData.map(row => {
    return (<tr>
      <td className="bg-3b3363">
        {/*<span>01</span>*/}
        <img
          src={row.logo}
          alt="table-admin-img1"
          className="img-fluid nft-avatar"
        />
        <p className="d-inline-block mb-0">{row.name}</p>
      </td>
      <td className="bg-3b3363">
        <p>{getRound(row.marketCap)}</p>
        <div className="bg-5b5288 table-progress-bar">
        </div>
      </td>
      <td className="bg-3b3363">
        <span className="d-block  color-68cf29">{row.marketCapChange24h}</span>
      </td>
      <td className="bg-3b3363">
        <p>{getRound(row.volume24h)}</p>
        <div className="bg-5b5288 table-progress-bar">

        </div>
      </td>
      <td className="bg-3b3363">{row.floorPrice.tokenPrice}</td>
      <td className="bg-3b3363">
        <img src={ETHIcon} alt="ETH-icon" className="img-fluid" />
        <p className="d-inline-block">{row.minterNum}</p>
        <div className="bg-5b5288 table-progress-bar">

        </div>
      </td>
      <td className="bg-3b3363">
        <p>{row.whaleMinterNum}</p>
      </td>
      <td className="bg-3b3363">
        <p>{getRound(row.totalMintGas)}</p>
        <div className="bg-5b5288 table-progress-bar">

        </div>
      </td>
      <td className="bg-3b3363">
        <p>added</p>
        <div className="bg-5b5288 table-progress-bar">

        </div>
      </td>
    </tr>)
  }), [collectionData])

  return (
    <>
      <section className="w-100 float-left banner-con design-img main-box">
        <div className="container p-0">
          <div className="banner-content text-center">
            <h1>Newly Added</h1>
            <p className="mb-0">
              Newly Added by marketcap and other key indicators.
            </p>
          </div>
        </div>
      </section>
      <div className="w-100 float-left buyer-con padding-bottom main-box">
        <div className="container p-0">
          <div id="myBtnContainer">
            <MarketTabs />
          </div>
        </div>
        <div className="wrapper">
          <div className="top-collections-input">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 d-flex align-items-center justify-content-md-left justify-content-center">
                <div className="top-collections-input-feild w-100">
                  <input type="text" placeholder="Search Collections" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 d-flex justify-content-md-end align-items-center justify-content-center">
                <div className="top-collections-rt-input">
                  <span>Rarity</span>
                  <i className="fas fa-info-circle ml-2"></i>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round bg-3b3363"></span>
                  </label>
                  <div className="generic-btn d-inline-block">
                    <a href="#" className="bg-3b3363">
                      Customize
                    </a>
                    <select className="border-0 bg-3b3363">
                      <option>All</option>
                      <option>All</option>
                      <option>All</option>
                    </select>
                    <select className="borer-0 bg-3b3363">
                      <option>24H</option>
                      <option>24H</option>
                      <option>24H</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="collections-table w-100">
            <thead>
              <tr>
                <th className="bg-5b5288">
                  {/*<span>#</span> */}
                  Collection
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Market
                  Cap <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Market
                  Cap (24H) <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Volume
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Floor
                  Price <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Minters{" "}
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  Whale Minters <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Total
                  Mint Gas
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
                <th className="bg-5b5288">
                  <i className="fas fa-caret-down mr-2 text-white"></i> Added
                  <i className="fas fa-info-circle ml-2"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableDataContent}
              <tr className="border-0">
                <td className="bg-3b3363">
                  <span>Showing 1 - 50 out of totalRecords</span>
                </td>
                <td className="bg-3b3363" colSpan={7}>
                  <ul className="list-unstyled mb-0 pagination-con">
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fas fa-angle-left"></i>
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href={"#"}>1</a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#">
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </td>
                <td className="bg-3b3363">
                  <div className="generic-btn">
                    <select className="bg-2c254a border-0">
                      <option>Rows 50</option>
                      <option>Rows 50</option>
                      <option>Rows 50</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NewlyAdded;
