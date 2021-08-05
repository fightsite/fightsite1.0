import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

import HomePage from './pages/homepage';

// const httpLink = createHttpLink({
//   uri: '/graphql'
// })
const authorize = setContext((_, { headers }) => {
  const token = localStorage.getItem('id-token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})
const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
  // headers: {
  //   authorization: localStorage.getItem('token') || '',
  // }
})
function App() {
  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");



  return (
    <ApolloProvider client={client}>
    
      <HomePage></HomePage>

    </ApolloProvider>
    
  )
}

export default App;
