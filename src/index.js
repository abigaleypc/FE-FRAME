import React from 'react'
import ReactDOM from 'react-dom';
import Routers from './routers/index.jsx'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
// TO DO : IMPORT ANTD CSS
import 'antd/dist/antd.less';


const history = createBrowserHistory()

import Layout from "./containers/Layout/Layout";

const App = () => (
  <Router history={history}>
    <div>
      <Layout />
      <Routers />
    </div>
  </Router>
)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
