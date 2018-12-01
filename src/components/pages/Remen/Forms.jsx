import React from "react"
//与仓库连接
import {connect} from 'react-redux';
class Forms extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		// console.log(props)
		this.state = {
			cards: []
		}
	}
	getIndexInfo() {
		React.axios.get('./jsons/index.json')
			.then((res) => {
				console.log(res);
				this.setState({
					//setState()将合并你提供的对象到当前的状态中。
					cards:res.data.data.cards
				})
			})
			.catch(function (err) {
				console.log(err);
			})
	}
	componentDidMount() {
		this.getIndexInfo();
		
	}
	render() {
		return (
			<div  className="pannelwrap" style={{paddingTop:"84px", paddingBottom:"0px"}}>
				<div  className="wb-item-wrap">
					<div  className="wb-item">
						
					</div>
				</div>
				{
					(() =>{
						return this.state.cards.map((item,index) => {
							return (
								<div key={index}className="wb-item-wrap">
									<div  className="wb-item">
										<div  className="card m-panel card9 f-weibo" >
											<div className="card-wrap">
												<header className="weibo-top m-box">
													<div className="m-avatar-box m-box-center"><a href="/profile/3623353053" className="m-img-box"><img alt="dsd" src={item.mblog.user.avatar_hd} />
															<i className="m-icon m-icon-goldv-static"></i></a></div>
													<div className="m-box-dir m-box-col m-box-center">
														<div className="m-text-box"><a href="/profile/3623353053" className="">
																<h3 className="m-text-cut">{item.mblog.user.screen_name}
																	<i className="m-icon m-icon-vipl7"></i></h3>
															</a>
															<h4 className="m-text-cut"><span className="time">15小时前</span> <span className="from"> 来自 {item.mblog.source}</span>
																
															</h4>
														</div>
													</div>
													<div callback="follow()" className="m-add-box m-followBtn"><span className="m-add-box"><i className="m-font m-font-plus"></i>
															<h4>关注</h4>
														</span></div>
												</header>
											</div>
											<article className="weibo-main">
												<div className="card-wrap">
													<div className="weibo-og">
														<div className="weibo-text" dangerouslySetInnerHTML={{ __html: item.mblog.text}}>
															
														</div>
														<div >
															<div  className="weibo-media-wraps weibo-media f-media media-b">
																<ul  className="m-auto-list">
																	<li  className="m-auto-box2">
																		<div  className="m-img-box m-imghold-4-3">
																			<img alt="sds" src="https://wx3.sinaimg.cn/orj360/d7f7faddly1fxn2soycxfj22qj3ndx6u.jpg"
																			className="f-bg-img" />
																			
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												
											</article>
											<footer className="f-footer-ctrl">
												<div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-report"></i>
													<h4>{item.mblog_buttons[0].actionlog.act_code}万</h4>
												</div>
												<div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-comments"></i>
													<h4>{item.mblog_buttons[1].actionlog.act_code}万</h4>
												</div>
												<div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-like"></i>
													<h4>{item.mblog_buttons[2].actionlog.act_code}</h4>
												</div>
												<aside><i className="m-font m-font-dot-more"></i></aside>
											</footer>
										</div>
									</div>
								</div>
							)
						})
					})()
				}
				
			</div>
			
		)
	}
}
//connet的第一个函数式获取store里面的值返回给组件	（拿）
//第二个函数是定义一个方法给自身使用，而这个方法可以出发store里面的action	（该）
export default connect((state) => {
	return state
},(dispatch) => {
	return {
		
	}
})(Forms);
// export default Forms;//原始写法