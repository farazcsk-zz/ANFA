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
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	open: false
	  };

	  this.handleOpen = this.handleOpen.bind(this);
	  this.handleClose = this.handleClose.bind(this);
	}

	handleOpen() {
    	this.setState({open: true});
 	};

  	handleClose() {
    	this.setState({open: false});
 	};

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
				<FlatButton 
					label="Add Section"
					style={borderStyle}
					rippleColor={buttonStyles.rippleColor} 
					backgroundColor={buttonStyles.backgroundColor} 
					labelStyle={buttonStyles.labelStyle}
					hoverColor={buttonStyles.backgroundColor}
					onClick={this.handleOpen}  
				/>
				<Dialog
		          title="Dialog With Actions"
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		          The actions in this window were passed in as an array of React objects.
    			</Dialog>
			</div>
		)
	}
}
export default SetCreator