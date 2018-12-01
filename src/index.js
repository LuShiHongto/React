import React from 'react';
//虚拟DOM
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

//状态管理
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './App';
import * as serviceWorker from './lib/serviceWorker';
React.axios = axios;

//创建仓库
//它是状态管理的配置参数，函数第一个参数为state，是存储组件需要通信和交换的数据
//第二个参数是action，它是触发，是需要其他组件传递的一个信号

//state交换数据的仓库
//action交换数据的动作
const store = createStore((state = {
   isShowNav: false,
   text:[{
		title:"热门",
	},{
		title:"新鲜事",
	},{
		title:"搞笑",
	},{
		title:"情感",
	},{
		title:"明星",
	},{
		title:"社会",
	},{
		title:"数码",
	},{
		title:"体育",
	},{
		title:"电影",
	},{
		title:"游戏",
	}]
}, action) => {
   switch (action.type){
	   //修改并传递
		case 'toggleNav':
			return {
				...state,//...解构符，继承仓库的数据
				isShowNav:action.isShowNav
			}
		default:
			return state
   }
})
//Provider下的组件拥有了可以与仓库关联的能力
//上面仓库有一个store，通过store将数据注入到Provider下的通信组件
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App></App>
		</Router>
	</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
