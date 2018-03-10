import React from 'react'
import { Link } from "react-router-dom";
class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to="/">融资列表</Link>
          </li>
          <li>
            <Link to="/users">融资详情-资产信息</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;

