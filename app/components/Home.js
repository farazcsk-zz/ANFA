import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link} from "react-router";

class Home extends Component {
	render() {
		return (
			<div>
				<Link to={{pathname: "/workout/create"}}>
					<h1>WORKOUT BRUH</h1>
				</Link>
			</div>
		)
	}
}
export default Home