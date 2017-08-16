import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import json from './resume.json';

console.log(json);

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App {...json} />
    </AppContainer>, 
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
