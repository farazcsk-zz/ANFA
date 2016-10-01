import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link} from "react-router";
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class WorkoutCreator extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	title: '',
	  	desciption: ''
	  };

	  this.onTitleChange = this.onTitleChange.bind(this);
	  this.onAnswerChange = this.onAnswerChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);

	}

	onTitleChange(e) {
		this.setState({title: e.target.value});
	}

	onAnswerChange(e) {
		this.setState({desciption: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		$.ajax({
	      url: "http://localhost:3000/api/Workouts",
	      dataType: 'json',
	      type: 'POST',
	      data: this.state,
	      success: function(data) {
	      	console.log('sucess!!!')
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
    	});
	}

	render() {
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={8} mdOffset={2}>
							<Link to={{pathname:"/workout/test/create"}}>
								<h1>Create Workout</h1>
							</Link>
							<MuiThemeProvider>
								<form>
									<Row className="show-grid">
										<Col md={12}>
				          					<TextField id="Title" placeholder="Enter Workout Title" onChange={this.onTitleChange}/>
				          				</Col>
				          			</Row>
				          			<br />
				          			<br />
				          			<br />
				          			<Row className="show-grid">
				          				<Col md={12}>
				          					<TextField id="Desciption" placeholder="Enter Workout Description" onChange={this.onDesciptionChange}/>
										</Col>

			          				</Row>

									<RaisedButton label="Create" onClick={this.handleSubmit} />
				        		</form>
			        		</MuiThemeProvider>
	        			</Col>
					</Row>
	    		</Grid>
			</div>
		)
	}
}
export default WorkoutCreator