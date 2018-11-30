import React, { Component } from 'react';
// import { Route } from "react-router-dom";
import Forms from './Forms.jsx';
class Remen extends Component {
	constructor(props){
		super(props);
		this.props = props;
	}
	render(){
		return (
			<Forms></Forms>
		)
	}
}
export default Remen;