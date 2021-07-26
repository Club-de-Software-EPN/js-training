import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail';

const App = () => {
  return (
    <ChakraProvider theme={theme} >
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/details/:id" component={Detail}/>
          </Switch>
        </Router>
      </Layout>
    </ChakraProvider>
  );
};

export default App;