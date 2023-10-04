import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme"
import NavBar from './components/NavBar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
    <ApolloProvider client={client}>
      <Router>
        <Grid container spacing={2}>
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
            <Route 
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </Grid>
      </Router>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
