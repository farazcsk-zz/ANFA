import React, {Component} from "react";
import $ from "jquery";
import {DefaultRoute, RouteHandler, Link, browserHistory} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Login extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username: '',
	  	password: ''
	  };

	  this.onUsernameChange = this.onUsernameChange.bind(this);
	  this.onPasswordChange = this.onPasswordChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  
	  this.errorStyle = {
			marginTop: 10,
			display: 'none' 
	   }

	   
	}

	handleSubmit(e) {
		e.preventDefault();
		$.ajax({
	      url: "http://localhost:3000/api/Accounts/login",
	      dataType: 'json',
	      type: 'POST',
	      data: this.state,
	      success: function(data) {
	      	console.log(data);
	        this.setState({data: data});
	        browserHistory.push('/workout');
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
    	});
	}

	onUsernameChange(e) {
		this.setState({username: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	
	render() {
		const paperStyle = {
		  height: 350,
		  width: 800,
		  margin: 20,
		  marginLeft: '30vw',
		  marginTop: '25vh',
		  paddingTop: '10vh',
		  textAlign: 'center',
		  display: 'inline-block',
		};

		const circlePaperStyle = {
		  height: 100,
		  width: 100,
		  marginLeft: '5vw',
		  textAlign: 'center',
		  display: 'inline-block',
		  backgroundColor: '#00bcd4'
		};

		return (
			<div>
				<MuiThemeProvider>
					<Paper style={paperStyle} zDepth={3}>
						<Grid>
							<Row className="show-grid">
								<Col md={1}>
									<Paper style={circlePaperStyle} zDepth={1} circle={true} />
								</Col> 
								<Col md={6}>
									<TextField id="Username" placeholder="Username" onChange={this.onUsernameChange}/>
									<br />
									<TextField id="Password" placeholder="Password" onChange={this.onPasswordChange}/>
								</Col>
							</Row>
						</Grid>
						<RaisedButton label="Login" onClick={this.handleSubmit} />
						<p key={this.errorDisplay} style={this.errorStyle}>Your username or password was incorrect, please try again</p>
					</Paper>
				</MuiThemeProvider>
				
			</div>
		)
	}
}
export default Login