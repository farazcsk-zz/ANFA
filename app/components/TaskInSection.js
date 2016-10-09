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

		const controlStyle = {
			display: 'inline-block',
			margin: 5,
			cursor: 'pointer'
		}
		
		return (
			<div>
				<List>
      				<Subheader>Tasks</Subheader>
				    <ListItem
				        primaryText={this.props.name}
				    >
				    	<div style={{float: 'right', fontWeight: 'bold'}}>
				    		<Link to={{pathname:"/worksheet/" + this.props.worksheetId + "/section/" +this.props.sectionId + "/task/" + this.props.taskId }}>
				    			<p style={controlStyle}>EDIT</p>
				    		</Link>
				    		<p style={controlStyle}>PREVIEW</p>
				    		<p style={controlStyle}>DELETE</p>
				    	</div>
				    </ListItem>
			    </List>
			</div>
		)
	}
}
export default TaskInSection