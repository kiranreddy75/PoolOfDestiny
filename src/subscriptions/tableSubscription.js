import { useSubscription } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import React from 'react';
import TableData from "../components/tableData";

const SUBSCRIBE_INFO = gql`
subscription MySubscription {
    Pool {
      poolid
      poolname
      pledge
      margin
      fixedfee
    }
  }
`;

const TableSubscription = () => {
const {data, error, loading} = useSubscription(SUBSCRIBE_INFO);
if(loading) {
    return <div>Loading...</div>
}
if(error) {
return <div>Error! {error.message}</div>
}
return <TableData tableData={data.Pool}/>
};

export default TableSubscription;