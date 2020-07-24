import React, { Component } from "react";

class EpochData extends Component {
  render() {
    const data = this.props.epochData;
    let CurrentEpochSlotNo;
    if (!data.CurrentEpochSlotNo) {
        CurrentEpochSlotNo = "N/A";
    } else {
        CurrentEpochSlotNo = data.CurrentEpochSlotNo;
    }
    let currentEpochNo;
    if (!data.currentEpochNo) {
        currentEpochNo = "N/A";
    } else {
        currentEpochNo = data.currentEpochNo;
    }
    let currentSlotNo;
    if (!data.currentSlotNo) {
        currentSlotNo = "N/A";
    } else {
        currentSlotNo = data.currentSlotNo;
    }
    let tipBlockNo;
    if (!data.tipBlockNo) {
        tipBlockNo = "N/A";
    } else {
        tipBlockNo = data.tipBlockNo;
    }
    let KESPeriod;
    if (!data.KESPeriod) {
        KESPeriod = "N/A";
    } else {
        KESPeriod = data.KESPeriod;
    }
    return (
      <React.Fragment>
        <div className="navbar navbar-dark bg-danger">
          <h5 className="card-title" style={{ color: "white" }}>
          Current Epoch SlotNo: {CurrentEpochSlotNo}
          </h5>
          <h5 className="card-title" style={{ color: "white" }}>
          Current Epoch No: {currentEpochNo}
          </h5>
          <h5 className="card-title" style={{ color: "white" }}>
          Current SlotNo: {currentSlotNo}
          </h5>
          <h5 className="card-title" style={{ color: "white" }}>
          Tip Block No: {tipBlockNo}
          </h5>
          <h5 className="card-title" style={{ color: "white" }}>
          KES Period: {KESPeriod}
          </h5>
        </div>
      </React.Fragment>
    );
  }
}

export default EpochData;
