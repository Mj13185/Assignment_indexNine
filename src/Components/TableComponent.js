import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

import { connect } from "react-redux";

import "../App.css";
class TableComponent extends Component {
  render() {
    return (
      <div className="tableContain">
        <h3>Moved UP</h3>
        <div className="stats">
          <div className="statOne">
            <div className="soneLeft">
              <div className="statdata">{this.props.data.length}</div>
              <div className="greyFont">Count</div>
            </div>
            <div className="soneRight">
              <div className="textRow">
                <div className="boldFont">+5</div>
                <div className="textCol">
                  <div>since</div>
                  <div> Dec 2020</div>
                </div>
              </div>
              <div className="greyFont">Perfomance</div>
            </div>
          </div>
          <div className="statTwo">
            <div className="soneLeft">
              <div className="statdata">
                $
                {this.props.data
                  .map((dat) => dat.target)
                  .reduce((a, b) => a + b)}
              </div>
              <div className="greyFont">Count</div>
            </div>
            <div className="soneRight">
              <div className="textRow">
                <div className="boldFont">+0.3%</div>
                <div className="textCol">
                  <div>since</div>
                  <div> Dec 2020</div>
                </div>
              </div>
              <div className="greyFont">Perfomance</div>
            </div>
          </div>
        </div>
        {/** Table  */}
        <div>
          <table className="tableStyle responsive ">
            <thead>
              <tr>
                <th>Opportunity</th>
                <th>Target</th>
                <th>Due Date</th>
                <th>Stage</th>
                <th>Client / Prospect Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((col, index) => {
                return (
                  <tr>
                    <td>
                      <text>{col.opportunity}</text>
                      <br />
                      <text className="opp">{col.opportunityState}</text>
                    </td>
                    <td>${col.target}</td>
                    <td>{col.dueDate}</td>
                    <td>{col.stage}</td>
                    <td>
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
                        className="imageUsr"
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
