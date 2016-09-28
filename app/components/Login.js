import React, {Component} from "react";
import {DefaultRoute, RouteHandler, Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Login extends Component {
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


		const loginStyle = {

		}

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
									<TextField id="Username" placeholder="Username"/>
									<br />
									<TextField id="Password" placeholder="Password"/>
								</Col>
							</Row>
						</Grid>
					</Paper>
				</MuiThemeProvider>
				
			</div>
		)
	}
}
export default Login