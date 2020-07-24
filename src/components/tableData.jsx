import React, { Component } from "react";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: this.props.tableData,
    };
  }

  render() {
    const tableData = this.state.tableData;
    const poolData = [];
    if(tableData !== undefined && tableData !== null) {
      tableData.map((data) => {
        let fixedfee;
    if (data.fixedfee !== undefined && data.fixedfee !== null) {
      fixedfee = data.fixedfee;
    } else {
      fixedfee = "N/A";
    }
    let margin;
    if (data.margin !== undefined && data.margin !== null) {
      margin = data.margin;
    } else {
      margin = "N/A";
    }
    let pledge;
    if (data.pledge !== undefined && data.pledge !== null) {
      pledge = data.pledge;
    } else {
      pledge = "N/A";
    }
    let poolid;
    if (data.poolid !== undefined && data.poolid !== null) {
      poolid = data.poolid.replace("\\x", ' ');
    } else {
      poolid = "N/A";
    }
    let poolname;
    if (data.poolname !== undefined && data.poolname !== null) {
      poolname = data.poolname;
    } else {
      poolname = "N/A";
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
