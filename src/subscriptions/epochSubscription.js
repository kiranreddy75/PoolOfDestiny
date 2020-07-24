import { useSubscription } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import React from 'react';
import EpochData from "../components/epochData";

const SUBSCRIBE_CARDANO = gql`
subscription CardanoSubscription {
    Cardano {
      CurrentEpochSlotNo
      currentEpochNo
      currentSlotNo
      tipBlockNo
      KESPeriod
    }
  }
`;

const EpochSubscription = () => {
const {data, error, loading} = useSubscription(SUBSCRIBE_CARDANO);
if(loading) {
    return <div>Loading...</div>
}
if(error) {
return <div>Error! {error.message}</div>
}
return data.Cardano.map((data) => (
  <EpochData epochData={data} />
  // <li key={data.currentEpochNo}>
  // </li>
));
};

export default EpochSubscription;