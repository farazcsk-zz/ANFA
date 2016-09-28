import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class Home extends Component {
	render() {
		return (
			<div>
				<Link to={{pathname: "/workout"}}>
					
				</Link>
			</div>
		)
	}
}
export default Home