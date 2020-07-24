import React, { Component } from "react";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: this.props.tableData,
    };
  }

  render() {
  // fixedfee: 700000000
  // margin: 0.05
  // pledge: 90000000000
  // poolid: "\x402cc0049e163c9aaa0cb49e088ba194d09307cf40e2d09180ecc8cc"
  // poolname: "AtlasStakePool"
    const tableData = this.state.tableData;
    console.log(tableData);
    const poolData = [];
    if(tableData !== undefined && tableData !== null) {
      tableData.map((data) => {
        let fixedfee;
    if (!data.fixedfee) {
      fixedfee = "N/A";
    } else {
      fixedfee = data.fixedfee;
    }
    let margin;
    if (!data.margin) {
      margin = "N/A";
    } else {
      margin = data.margin;
    }
    let pledge;
    if (!data.pledge) {
      pledge = "N/A";
    } else {
      pledge = data.pledge;
    }
    let poolid;
    if (!data.poolid) {
      poolid = "N/A";
    } else {
      poolid = data.poolid.replace("\\x", ' ');
    }
    let poolname;
    if (!data.poolname) {
      poolname = "N/A";
    } else {
      poolname = data.poolname;
    }
    return poolData.push({
      fixedfee: fixedfee,
      margin: margin,
      pledge: pledge,
      poolid: poolid,
      poolname: poolname
    })

      });
      
    
    }

    console.log(poolData);

    return (
      <React.Fragment>
        {poolData !== undefined && poolData !== null && (
          <div className="table-responsive">
            <table className="table table-bordered table-sm">
              <thead className="thead-dark">
                <tr>
                  <th>Pool Name</th>
                  <th>Pledge</th>
                  <th>Margin</th>
                  <th>Fixed Fee</th>
                  <th>Pool ID</th>
                </tr>
              </thead>
              <tbody className="table-striped">
                {poolData.map(row => (
                  <tr key={row._id}>
                  <td style={{ textTransform: 'uppercase'}}>{row.poolname}</td>
                  <td>{row.pledge}</td>
                  <td>{row.margin}</td>
                  <td>{row.fixedfee}</td>
                  <td>{row.poolid}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default TableData;
