import React, { Component } from "react";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: this.props.tableData,
    };
  }

  render() {
    const info = this.state.tableData;
    return (
      <React.Fragment>
        {info !== undefined && info !== null && (
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
                <tr key={info._id}>
                  <td>{info.poolname}</td>
                  <td>{info.pledge}</td>
                  <td>{info.margin}</td>
                  <td>{info.fixedfee}</td>
                  <td>{info.poolid}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default TableData;
