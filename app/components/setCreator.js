import React, {Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class SetCreator extends Component {
	render() {
		const buttonStyles = {
			backgroundColor: 'transparent',
			rippleColor: '#36BA93',
			labelStyle: {
				color: '#36333C',
			}
		}


		const borderStyle = {
			border: '2px solid #36BA93',
			float: 'right'
		}
		return (
			<div>
				<MuiThemeProvider>
					<FlatButton 
						label="Add Section"
						style={borderStyle}
						rippleColor={buttonStyles.rippleColor} 
						backgroundColor={buttonStyles.backgroundColor} 
						labelStyle={buttonStyles.labelStyle}
						hoverColor={buttonStyles.backgroundColor}  
					/>
				</MuiThemeProvider>
			</div>
		)
	}
}
export default SetCreator