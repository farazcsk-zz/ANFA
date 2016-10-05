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
	  	workout: {}
	  };
	}

	componentDidMount() {
		$.ajax({
      		url: "http://localhost:3000/api/Workouts/" + this.props.params.id + "?access_token=iTk6s6Boej92VgEFrKNnvg4rqD1uXjZmAUoNtHKgIqOwxi0LpnEToMK8SKYcjXuC",
      		dataType: 'json',
      		success: function(data) {
        		this.setState({workout: data});
        		console.log(data);
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
											<h6>{this.state.workout.description}</h6>
											<br />
											<br />
											<br />
											<br />
											<br />
											<Row className="show-grid">
												<Col md={9}>
													<h3>Sections</h3>
												</Col>
												<Col md={3}>
													<SetCreator />
												</Col>
											</Row>
											
											<hr style={hrStyle} />
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