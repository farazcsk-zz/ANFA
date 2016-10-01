import React, {Component} from "react";
import $ from "jquery";
import {DefaultRoute, RouteHandler, Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class ViewWorkouts extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	workouts: []
	  };
	}

	componentDidMount() {
		$.ajax({
      		url: "http://localhost:3000/api/Workouts?filter=%7B%22limit%22%3A%20%2210%22%7D&access_token=iTk6s6Boej92VgEFrKNnvg4rqD1uXjZmAUoNtHKgIqOwxi0LpnEToMK8SKYcjXuC",
      		dataType: 'json',
      		success: function(data) {
      			console.log(data)
        		this.setState({workouts: data});
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error('#GET Error', status, err.toString());
      		}.bind(this)
    	});
	}

	render() {

		const paperStyle = {
		  height: 100,
		  width: 550,
		  margin: 5,
		  textAlign: 'center',
		  display: 'inline-block',
		  backgroundColor: 'none',
		  border: '2px solid #36333C'
		};

		const workoutTitleStyle = {
			textTransform: 'uppercase',
			float: 'left',
			marginTop: 70,
			marginLeft: 15
		}

		const viewWorkoutsStyle = {
			marginTop: '5vh'
		}

		const hrStyle = {
			border: '2px solid #36333C'
		}

		const controlStyle = {
			display: 'inline-block',
		}
		var workouts = this.state.workouts.map(function(workout) {
			return (
				<Col md={6} key={workout.id}>
					<MuiThemeProvider>
        				<Paper style={paperStyle}>
        					<div style={{float:'right', marginRight:15}}>
	        					<div style={controlStyle}>
	        						<h5>PREVIEW&nbsp;</h5>
	    						</div>
	    						<div style={controlStyle}>
	        						<h5>DELETE</h5>
	    						</div>
    						</div>
        					<h5 style={workoutTitleStyle}>{workout.title}</h5>
    					</Paper>
    				</MuiThemeProvider> 
    			</Col>
      		); 
		});

		return (
			<div style={viewWorkoutsStyle}>
				<Grid>
					<h1>Workouts</h1>
					<hr style={hrStyle}/>
					<Row className="show-grid">
						{workouts}
					</Row>
				</Grid>
			</div>
		);
	}
}
export default ViewWorkouts