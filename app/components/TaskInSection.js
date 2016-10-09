import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link, browserHistory} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class TaskInSection extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		
		return (
			<div>
				<List>
      				<Subheader>Tasks</Subheader>
				    <ListItem
				        primaryText={this.props.name}
				    />
			    </List>
			</div>
		)
	}
}
export default TaskInSection