import React from "react"
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
class Top extends React.Component {
	constructor(props){
		super(props)//props是继承到爸爸的数据
		this.props = props;
		// console.log(props)
		this.state = {//这是靠自己或者后端axios拿到的数据属于自己
			nav:0,
			navs:[{
				title:"热门",
				href:"/remen",
				channel:""
			},{
				title:"新鲜事",
				href:"/xinxian",
				channel:""
			},{
				title:"搞笑",
				href:"/gaoxiao",
				channel:""
			},{
				title:"情感",
				href:"",
				channel:""
			},{
				title:"明星",
				href:"",
				channel:""
			},{
				title:"社会",
				href:"",
				channel:""
			},{
				title:"数码",
				href:"",
				channel:""
			},{
				title:"体育",
				href:"",
				channel:""
			},{
				title:"电影",
				href:"",
				channel:""
			},{
				title:"游戏",
				href:"",
				channel:""
			}]
		}
	}
	
	navigateTo(index,e){
		this.setState({
			nav:index
		})
		// this.props.history.push(this.state.navs[index].href)
	}
	render() {
		return (
			<div className="lite-topbar main-top">
			                <div className="nav-top">
			                    <div className="nav-left unlogin-logo"></div> <a href="index.html" className="nav-search unlogin-search">
			                        <aside><label className="m-search"><i className="m-font m-font-search"></i>
			                            <div className="m-text-cut"> 大家都在搜：多少人愿与AI谈恋爱</div>
			                        </label></aside>
			                    </a>
			                    <div className="nav-right">
			
			                        <div className="lite-iconf lite-iconf-releas"></div>
			                    </div>
			                </div>
			                <div className="nav-main">
			                    <div className="m-box">
			                        <div className="m-box-col inner-box">
			                            <div className="scroll-box slide-container">
			                                <div className="slide-wrap">
			                                    <ul className="nav_item">	
													{
														(()=>{
															return this.state.navs.map((item,index)=>{
																return (
																	<li onClick={this.navigateTo.bind(this,index)} key={index} 
																	className={index===this.state.nav?"item_li cur":"item_li"
																	}><span><Link to={ {pathname: item.href}}  replace>
																		{item.title}<em ></em></Link></span>
																	</li>
																)
															})
														})()
													}
												 </ul>
											</div>
									</div>


							</div>
							<div onClick={
								this.props.toggleNav.bind(this)
							} className="nav-plus m-box-center m-box-center-a"><i className="m-font m-font-arrow-down"></i></div>
					</div>
			</div>
	</div>
		)
	}						
}
export default connect((state) => {
	//获取到仓库的state
	return state
},(dispatch) => {
	//用dispatch触发仓库中的action
	return {
		toggleNav(){
			dispatch({
				type:"toggleNav",
				isShowNav:!this.props.isShowNav
			})
		}
	}
})(Top);
