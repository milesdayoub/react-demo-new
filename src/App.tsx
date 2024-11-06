import React from 'react';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import ProfileListCard from './ProfileListCard';

function App() {
  const demoPk = 40679;

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <ProfileListCard pk={demoPk} />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
