import React from 'react';
import ReactDOM from 'react-dom';

//引入路由
import { HashRouter as Router} from "react-router-dom";

//引入css文件
import './styles/app.css';
import './styles/base.css';
import './styles/cards.css';
import './styles/index.css';

//axios配置
import axios from 'axios';

import App from './App';
import * as serviceWorker from './lib/serviceWorker';
React.axios = axios;
ReactDOM.render(
	<Router>
		<App></App>
	</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
