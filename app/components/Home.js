import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link} from "react-router";

class Home extends Component {
	render() {
		return (
			<div>
				<Link to={{pathname: "/workout"}}>
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<h1>WORKOUT BRUH</h1>
				</Link>
			</div>
		)
	}
}
export default Home