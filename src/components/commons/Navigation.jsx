import React from 'react';
import {connect} from 'react-redux';

class Navigation extends React.Component {
	constructor(props) {
		super(props)
		this.props = props;
		console.log(props)
		this.state = {
			nav:0
		}
	}
	navigateTo(index,e){
		this.setState({
			nav:index
		})
	}
	render(){
		return (
			<div  className="lite-nav-sublist m-col-4" style={{position:"fixed",
			top:"84px",
			zIndex:"10",
			display:this.props.isShowNav?"block":"none"}}>
				<ul  className="m-auto-list">
					{
						(() => {
							return this.props.text.map((item,index) => {
								return (
									<li onClick={this.navigateTo.bind(this,index)} key={index} className={index===this.state.nav?"m-auto-box cur":"m-auto-box"}><span  className="m-text-cut">{item.title}</span></li>
								)
							})
						})()
					}
					
				</ul>
			</div>
		)
	}
}
// connet的第一个函数是获取store里面的值返回给组件     (拿)
// 二而第二个函数是定义一个方法给自身使用，而这个方法可以出发store里面的action   （改
export default connect((state) => {
	// console.log(state)
	return state
},(dispatch) => {
	return {
		
	}
})(Navigation);