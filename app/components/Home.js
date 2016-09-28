import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link} from "react-router";
import Login from "./Login";

class Home extends Component {
	render() {
		return (
			<div>
				<Login />
			</div>
		)
	}
}
export default Home