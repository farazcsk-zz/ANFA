import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link, browserHistory} from "react-router";
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
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
		const paperStyle = {
		  height: 350,
		  width: 800,
		  margin: 20,
		  marginTop: '25vh',
		  paddingTop: '10vh',
		  textAlign: 'center',
		  display: 'inline-block',
		  border: '2px solid #36BA93'
		};
		const inputStyles = {
		  underlineStyle: {
		    borderColor: '#36BA93',
		  },
		  floatingLabelFocusStyle: {
		  	color: '#36BA93'
		  }
		};

		const buttonStyles = {
			backgroundColor: 'transparent',
			rippleColor: '#36BA93',
			labelStyle: {
				color: '#36333C',
			}
		}


		const borderStyle = {
			border: '2px solid #36BA93',
			marginLeft: '9vw'
		}
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={8} mdOffset={2}>
							<MuiThemeProvider>
								<Paper style={paperStyle} zDepth={3}>
									<Row className="show-grid">
										<Col md={8} mdOffset={2}>
											<form>
					          					<TextField 
					          						id="Title"
					          						underlineFocusStyle={inputStyles.underlineStyle}
													floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
					          						floatingLabelText="Enter Workout Title" 
					          						onChange={this.onTitleChange}
				          						/>
							          			<br />
							          			<br />
							          			<br />
					          					<TextField 
					          						id="Desciption"
					          						underlineFocusStyle={inputStyles.underlineStyle}
													floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
					          						floatingLabelText="Enter Workout Description" 
					          						onChange={this.onDesciptionChange}
				          						/>	
												<FlatButton 
													label="Create"
													style={borderStyle}
													rippleColor={buttonStyles.rippleColor} 
													backgroundColor={buttonStyles.backgroundColor} 
													labelStyle={buttonStyles.labelStyle}
													hoverColor={buttonStyles.backgroundColor} 
													onClick={this.handleSubmit} 
												/>
							        		</form>
					        			</Col>
									</Row>
					    		</Paper>
				    		</MuiThemeProvider>
			    		</Col>
		    		</Row>
	    		</Grid>
			</div>
		)
	}
}
export default WorkoutCreator