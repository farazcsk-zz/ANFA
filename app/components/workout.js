import React, {Component} from "react";
import SetCreator from './setCreator';
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Workout extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	workout: {
	  		sets: []
	  	}
	  };

	  this.setAdded = this.setAdded.bind(this);
	}

	componentDidMount() {
		$.ajax({
      		url: "http://localhost:3000/api/Workouts/" + this.props.params.id +"?filter=%7B%22include%22%3A%7B%22relation%22%3A%22sets%22%7D%7D&access_token=TbZ4UnDIN1jbRJ1xzVf5mTbEGkjR2kXZjEEeYVqiwHIwgytpFsjYCklHdIrzxBCW",
      		dataType: 'json',
      		success: function(data) {
        		this.setState({workout: data});
        		console.log(this.state.workout.sets);
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error('#GET Error', status, err.toString());
      		}.bind(this)
    	});
	}

	setAdded() {
		console.log('kafjshgdlksjfgh')
		$.ajax({
      		url: "http://localhost:3000/api/Workouts/" + this.props.params.id +"?filter=%7B%22include%22%3A%7B%22relation%22%3A%22sets%22%7D%7D&access_token=TbZ4UnDIN1jbRJ1xzVf5mTbEGkjR2kXZjEEeYVqiwHIwgytpFsjYCklHdIrzxBCW",
      		dataType: 'json',
      		success: function(data) {
        		this.setState({workout: data});
        		console.log('set added');
      		}.bind(this),
      		error: function(xhr, status, err) {
        		console.error('#GET Error', status, err.toString());
      		}.bind(this)
    	});
	}
	render() {

		const paperStyle = {
		  height: '100vh',
		  width: 'inherit',
		  margin: 20,
		  padding: 10,
		  display: 'inline-block',
		  border: '2px solid #36BA93'
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
			marginTop: '2.5vh',
			marginLeft: '5vw',
			width: 'inherit'
		}


		const sectionBorderStyle = {
			border: '2px solid #36BA93',
			
		}

		const redButtonStyles = {
			backgroundColor: 'transparent',
			rippleColor: '#D0021B',
			labelStyle: {
				color: '#36333C',
			}
		}

		const redBorderStyle = {
			border: '2px solid #D0021B',
			marginTop: '0.5vh',
			marginLeft: '5vw',
			width: 'inherit'
		}
		const hrStyle = {
			border: '2px solid #36333C'
		}

		var sets = this.state.workout.sets.map(function(set) {
			return (
				<div key={set.id}>
					 <h1>{set.title}</h1>
    			</div>
      		); 
		});

		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={12}>
							<MuiThemeProvider>
								<Paper style={paperStyle}>
									<Row className="show-grid">
										<Col md={9}>
											<h3>{this.state.workout.title}</h3>
											<hr style={hrStyle} />
											<h6 style={{marginBottom: '10vh'}}>{this.state.workout.description}</h6>
											<Row className="show-grid">
												<Col md={9}>
													<h3>Sets</h3>
												</Col>
												<Col md={3}>
													<SetCreator workoutId={this.state.workout.id} number={0} setAdded={this.setAdded}/>
												</Col>
											</Row>
											
											<hr style={hrStyle} />
											{sets}
										</Col>
										<Col md={3}>
											<FlatButton 
												label="Edit"
												style={borderStyle}
												rippleColor={buttonStyles.rippleColor} 
												backgroundColor={buttonStyles.backgroundColor} 
												labelStyle={buttonStyles.labelStyle}
												hoverColor={buttonStyles.backgroundColor}  
											/>
											<FlatButton 
												label="Delete"
												style={redBorderStyle}
												rippleColor={redButtonStyles.rippleColor} 
												backgroundColor={redButtonStyles.backgroundColor} 
												labelStyle={redButtonStyles.labelStyle}
												hoverColor={redButtonStyles.backgroundColor}  
											/>
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
export default Workout