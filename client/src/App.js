import React, {useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  createHttpLink
} from '@apollo/client'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ChooseBets from './components/choose-bet';
// import ChooseFighter from './components/choose-fighter';
// import Fight from './components/fight';
// import Login from './components/login';
// import Results from './components/results';
// import FighterCards from './components/fightercards';
// import Cards from './components/cards';
// import Header from './components/header';
// import Footer from './components/footer';
// import Animation from './components/animation';
// import SignIn from './components/sign-in';
import HomePage from './pages/homepage';
import FightPage from './pages/fightpage';

const httpLink = createHttpLink({
  uri: 'graphql',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
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
