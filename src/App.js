import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks';
import TableSubscription from './subscriptions/tableSubscription';
import apolloSetup from './apolloSetup';
import EpochSubscription from './subscriptions/epochSubscription';

function App() {
  return (
    <ApolloProvider client={apolloSetup}>
       <div>
          <div className="navbar navbar-dark bg-success">
            <h3 className="navbar-brand" style={{ marginLeft: "45%" }}>
              POOL OF DESTINY CARDANO POOL TABLE            
              </h3>
          </div>
          <div>
          <EpochSubscription />
            <div style={{ margin: "5% 5% 5% 5%" }}>
            <TableSubscription />
            </div>
          </div>
        </div>
    </ApolloProvider>
  );
}

export default App;
