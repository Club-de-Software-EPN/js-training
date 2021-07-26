import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';

import App from './App';

const container = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  container
);
