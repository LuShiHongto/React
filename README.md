## 1.Redirect重定向用法

用法不明，找不到警告缘由（已解决）
```js
	<Redirect from='/' to='/remen' />
	<Route path="/remen" component={Remen} />
	<Route path="/xinxian" component={Xinxian} />
	<Route path="/gaoxiao" component={Gaoxiao} />
```
	在此项目中想使用重定向，按照以上写法但一直报以下警告
	翻阅资料找不到缘由
` Warning: You tried to redirect to the same route you're currently on: "/remen" `

<br>
## 2.并且点击切换路由连续点击同一个路由报警告

` Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack `

## Redirect重定向报警告已解决：
```js
1. 首先需要引入Switch
	import { Route,Redirect,Switch} from "react-router-dom";
```

```js
2. 用Switch标签将路由包起来作为所有组件老爸使用
注意：Redirect重定向标签必须放在最后边
	<Switch>
		<Route path="/remen" component={Remen} />
		<Route path="/xinxian" component={Xinxian} />
		<Route path="/gaoxiao" component={Gaoxiao} />
		<Redirect from='/' to='/remen' />
	</Switch>
```

```js
3. 在切换路由的位置Link标签下to的写法改成如下方法
	<Link to={ {pathname: item.href}}  replace>
		{item.title}
	<em ></em></Link>
```
#### 该办法同时解决以上1、2遇到的问题
<br>
## 3.axios请求如果没有下载依赖包则会报 git is not defined

git数据请求如使用json之类的数据类型请求而不是从网上扒，则需要把文件放在入口处，服务器才能读取到

<br>
## 4.获取到数据后Vue做法是push到空数组中，而React做法

```js
	使用setState（）
	
	this.setState({
		cards:res.data.data.cards
	})
	
	this.setState({传参位置:数据来源})
```
	setState()将合并你提供的对象到当前的状态中。

<br>
## 5.渲染页面遇到的一些问题

#### (1)循环遍历类似v-for的方法
```js
	(() => {
		return this.到数据.map((item,index) => {
			return (
				<p key={index}>HTML视图结构</p>
			)
		})
	})()
```
#### 坑：最尾部括号不能忘否则报警告：
	Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

#### (2)设置元素HTML

```js
此用法将最原始的htnl渲染到页面中
	dangerouslySetInnerHTML={{ __html: item.mblog.text}}
	
	有一点非常直接注意的是:
	{__html: 'First &middot; Second'} 注意html的地方是双下划线，这个是必须的语法，请注意否则会报错如下：
	Uncaught Error: `props.dangerouslySetInnerHTML` must be in the form `{__html: ...}` 
```
<br>
## 6.redux的安装与使用

### 安装
```js
	cnpm install --save redux
	npm install --save react-redux
```

### 引入配置
```js
	import {Provider, connect} from 'react-redux';
	import {createStore} from 'redux';
```

### 创建仓库

```js
	const store = createStore((state = {
	   
	}, action) => {
	   
	})
```

## 7.仓库引用

### 创建一个仓库，最终目的就是要生成一个`store`仓库，该仓库有一个`state`存放数据还有一个`action`来触发`state`的更改
####  （1）Provider标签放到全局，将所有组件包起来作为所有组件老爸使用
	这样所有组件就拥有Provider功能
	
####  （2）在Provider标签上添加store={store}

```js
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>
```
#### （3）使用通信组件connect

将`import {connect} from 'react-redux';`复制到需要建立仓库联系的组件，让该组件连接到仓库

```js
使用：
	export default connect()(Forms);
```
```js
	constructor(props) {
		super(props);
		this.props = props;
		console.log(props)
		this.state = {
			cards: []
		}
	}
```	
#### 此时仓库的数据通过props能被找到。
#### 打印props时得到一个{dispatch:f}方法,就是通过这个dispatch这个方法来建立仓库之间数据互传

