### 1.Redirect重定向用法

用法不明，找不到警告缘由
```js
	<Redirect from='/' to='/remen' />
	<Route path="/remen" component={Remen} />
	<Route path="/xinxian" component={Xinxian} />
	<Route path="/gaoxiao" component={Gaoxiao} />
```
	在此项目中想使用重定向，但按照以上写法但一直报以下警告
	翻阅资料找不到缘由
` Warning: You tried to redirect to the same route you're currently on: "/remen" `

<br>
### 2.并且点击切换路由连续点击同一个路由报警告

` Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack `

<br>
### 3.axios请求如果没有下载依赖包则会报 git is not defined

git数据请求如使用json之类的数据类型请求而不是从网上扒，则需要把文件放在入口处，服务器才能读取到

<br>
### 4.获取到数据后Vue做法是push到空数组中，而React做法

```js
	使用setState（）
	
	this.setState({
		cards:res.data.data.cards
	})
	
	this.setState({传参位置:数据来源})
```
	setState()将合并你提供的对象到当前的状态中。

<br>
### 5.渲染页面遇到的一些问题

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
#### 坑：尾部括号不能忘否则报错：
	Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

#### (2)设置元素HTML

```js
	dangerouslySetInnerHTML={{ __html: item.mblog.text}}
	
	有一点非常直接注意的是:
	{__html: 'First &middot; Second'} 注意标红的地方是双下划线，这个是必须的语法，请注意否则会报错如下：
	Uncaught Error: `props.dangerouslySetInnerHTML` must be in the form `{__html: ...}` 
```