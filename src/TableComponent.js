import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

import { connect } from "react-redux";
class TableComponent extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "70%", paddingLeft: "20px" }}>
        <span style={{ fontWeight: "600", fontSize: "20px", color: "#6a78d4" }}>
          Moved UP
        </span>
        <div className="stats">
          <div className="statOne">
            <div className="soneLeft">
              <div style={{ fontSize: "25px", fontWeight: "550" }}>
                {this.props.data.length}
              </div>
              <div style={{ fontSize: "12px", color: "grey" }}>Count</div>
            </div>
            <div className="soneRight">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    fontSize: "25px",
                    color: "#56b8be",
                    fontWeight: "900",
                  }}
                >
                  +5
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    marginLeft: "5px",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  <div>since</div>
                  <div> Dec 2020</div>
                </div>
              </div>
              <div style={{ fontSize: "12px", color: "grey" }}>Perfomance</div>
            </div>
          </div>
          <div className="statOne" style={{ marginLeft: "10px" }}>
            <div className="soneLeft">
              <div
                style={{ fontSize: "25px", color: "black", fontWeight: "550" }}
              >
                $
                {this.props.data
                  .map((dat) => dat.target)
                  .reduce((a, b) => a + b)}
              </div>
              <div style={{ fontSize: "12px", color: "grey" }}>Count</div>
            </div>
            <div className="soneRight">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    fontSize: "25px",
                    color: "#56b8be",
                    fontWeight: "900",
                  }}
                >
                  +0.3%
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    marginLeft: "5px",
                    textAlign: "left",
                    padding: "5px",
                  }}
                >
                  <div>since</div>
                  <div> Dec 2020</div>
                </div>
              </div>
              <div
                style={{ fontSize: "12px", color: "grey", marginLeft: "5px" }}
              >
                Perfomance
              </div>
            </div>
          </div>
        </div>
        {/** Table  */}
        <div>
          <table
            className="tableStyle responsive "
            style={{ marginTop: "20px" }}
          >
            <thead
              style={{
                backgroundColor: "#f0f2fb",
                color: "#6a78d4",
              }}
            >
              <tr>
                <th>Opportunity</th>
                <th>Target</th>
                <th>Due Date</th>
                <th>Stage</th>
                <th>Client / Prospect Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((col) => {
                return (
                  <tr>
                    <td style={{ display: "flex", flexDirection: "column" }}>
                      <span>{col.opportunity}</span>
                      <span
                        className="opp"
                        style={{
                          backgroundColor: "#e9edff",
                          fontSize: "10px",
                          width: "40px",
                          borderRadius: "5px",
                        }}
                      >
                        {col.opportunityState}
                      </span>
                    </td>
                    <td>${col.target}</td>
                    <td>{col.dueDate}</td>
                    <td>{col.stage}</td>
                    <td>
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
                        style={{
                          width: "35px",
                          borderRadius: "50px",
                          backgroundColor: "gray",
                          marginRight: "10px",
                        }}
                        alt="usefImage "
                      />
                      {col.clientName}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { data: state.data };
};
export default connect(mapStateToProps)(TableComponent);
