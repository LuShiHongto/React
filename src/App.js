import React, { Component } from 'react';
import { Route } from "react-router-dom";
//Redirect，重对象到remen
//Redirect,一直报警告，情况不明
import Top from './components/commons/Top.jsx';
import Remen from './components/pages/Remen/Remen.jsx';
import Xinxian from './components/pages/Xinxian/Xinxian.jsx';
import Gaoxiao from './components/pages/Gaoxiao/Gaoxiao.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Top></Top>
				
				<Route path="/remen" component={Remen} />
				<Route path="/xinxian" component={Xinxian} />
				<Route path="/gaoxiao" component={Gaoxiao} />
      </div>
    );
  }
}

export default App;
