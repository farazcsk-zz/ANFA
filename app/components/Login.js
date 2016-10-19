import React, {Component} from "react";
import $ from "jquery";
import {DefaultRoute, RouteHandler, Link, browserHistory} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

class Login extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	details: {
	  		username: '',
	  		password: ''
	  	},

	  	error: false,
	  	loading: false

	  };

	  this.onUsernameChange = this.onUsernameChange.bind(this);
	  this.onPasswordChange = this.onPasswordChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleErrorRequestClose = this.handleErrorRequestClose.bind(this);
	}

	handleSubmit(e) {
		this.setState({loading: true});
		e.preventDefault();
		$.ajax({
	      url: "http://localhost:3000/api/Accounts/login",
	      dataType: 'json',
	      type: 'POST',
	      data: this.state.details,
	      success: function(data) {
	      	console.log(data);
	        browserHistory.push('/worksheets');
	      }.bind(this),
	      error: function(xhr, status, err) {
	      	this.setState({
	      		error: true,
	      		loading: false
	      	})
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
    	});
	}

	onUsernameChange(e) {
		this.setState({
			details: {
				username: e.target.value,
				password: this.state.details.password
			},
			error: false
		});
	}

	onPasswordChange(e) {
		this.setState({
			details: {
				username: this.state.details.username,
				password: e.target.value
			},
			error: false
		});
	}

	handleErrorRequestClose()  {
	    this.setState({
	      open: false,
	    });
  	};


	render() {
		const paperStyle = {
		  height: 350,
		  width: 'inherit',
		  margin: 20,
		  marginTop: '25vh',
		  marginBottom: '25vh',
		  paddingTop: '10vh',
		  textAlign: 'center',
		  display: 'inline-block',
		  border: '2px solid #36BA93'
		};

		const circlePaperStyle = {
		  height: 100,
		  width: 100,
		  marginLeft: '5vw',
		  marginTop: '3.8vh',
		  textAlign: 'center',
		  display: 'inline-block',
		  backgroundColor: '#36BA93'
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
						<Col md={10} mdOffset={2}>
							<MuiThemeProvider>
								<Paper style={paperStyle} zDepth={3}>
									<Row className="show-grid">
										<Col md={1}>
											<Paper style={circlePaperStyle} zDepth={1} circle={true} />
										</Col>
										<Col md={6} mdOffset={2}>
											<TextField
												underlineFocusStyle={inputStyles.underlineStyle}
												floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
												id="Username"
												floatingLabelText="Username"
												onChange={this.onUsernameChange}
											/>
											<br />
											<TextField
												underlineFocusStyle={inputStyles.underlineStyle}
												floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
												id="Password"
												type="password"
												floatingLabelText="Password"
												onChange={this.onPasswordChange}
											/>
										</Col>
									</Row>
									<br />

									{!this.state.loading ?
					    				<div>
					        				 <MuiThemeProvider>
					        					<FlatButton
													style={borderStyle}
													rippleColor={buttonStyles.rippleColor}
													backgroundColor={buttonStyles.backgroundColor}
													labelStyle={buttonStyles.labelStyle}
													hoverColor={buttonStyles.backgroundColor}
													label="Login"
													onClick={this.handleSubmit}
												/>

											</MuiThemeProvider>
										</div> :
										<div>
											<MuiThemeProvider>
												<CircularProgress
													size={0.5}
													color='#36BA93'
													style={{marginLeft: 15}}
												/>
											</MuiThemeProvider>
										</div>
									}

								</Paper>
							</MuiThemeProvider>
							<MuiThemeProvider>
								<Snackbar
						          open={this.state.error}
						          message="Username or password is incorrect."
						          autoHideDuration={4000}
						          onRequestClose={this.handleRequestClose}
	        					/>
        					</MuiThemeProvider>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
export default Login
