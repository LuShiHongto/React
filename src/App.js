import React, { Component } from 'react';
import { Route,Redirect,Switch} from "react-router-dom";
//Redirect，重对象到remen
//Redirect，用重定向必须放在最底下

import Top from './components/commons/Top.jsx';
import Navigation from './components/commons/Navigation.jsx';
import Remen from './components/pages/Remen/Remen.jsx';
import Xinxian from './components/pages/Xinxian/Xinxian.jsx';
import Gaoxiao from './components/pages/Gaoxiao/Gaoxiao.jsx';

//Switch关于到重定向的问题用到的标签

class App extends Component {
  render() {
    return (
      <div className="App">
        <Top></Top>
				<Navigation></Navigation>
				<Switch>
					<Route path="/remen" component={Remen} />
					<Route path="/xinxian" component={Xinxian} />
					<Route path="/gaoxiao" component={Gaoxiao} />
					<Redirect from='/' to='/remen' />
				</Switch>
      </div>
    );
  }
}

export default App;
