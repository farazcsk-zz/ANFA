import React, {Component} from "react";
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';

class SectionCreator extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	open: false,
	  	section: {
	  		title: ''
	  	},
	  	loading: false,
	  	error: false
	  };

	  this.handleOpen = this.handleOpen.bind(this);
	  this.handleClose = this.handleClose.bind(this);
	  this.onTitleChange = this.onTitleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleErrorRequestClose = this.handleErrorRequestClose.bind(this);
	}

	handleErrorRequestClose()  {
	    this.setState({
	      open: false,
	    });
  	};

	handleSubmit(e) {
		this.setState({loading: true});
		if(this.state.section.title.length > 0) {
			e.preventDefault();
			$.ajax({
		      url: "http://localhost:3000/api/Sections?access_token=TbZ4UnDIN1jbRJ1xzVf5mTbEGkjR2kXZjEEeYVqiwHIwgytpFsjYCklHdIrzxBCW",
		      dataType: 'json',
		      type: 'POST',
		      data: this.state.section,
		      success: function(data) {
		      	this.props.sectionAdded()
		      	this.handleClose()
		      }.bind(this),
		      error: function(xhr, status, err) {
		      	this.setState({
		      		error: true,
		      		loading: false
	      		})
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
	    	});
		} else {
			this.setState({
	      		error: true,
	      		loading: false
      		})
		}
		
	}
	handleOpen() {
    	this.setState({open: true});
 	};

  	handleClose() {
    	this.setState({open: false});
 	};

 	onTitleChange(e) {
		this.setState({section: {title: e.target.value, number: this.props.number, worksheetId: this.props.worksheetId}});
	}

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

		const inputStyles = {
		  underlineStyle: {
		    borderColor: '#36BA93',
		  },
		  floatingLabelFocusStyle: {
		  	color: '#36BA93'
		  }
		};
		
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
		          title="Create Section"
		          modal={false}
		          open={this.state.open}
		          onRequestClose={this.handleClose}
		        >
		          	<TextField 
						underlineFocusStyle={inputStyles.underlineStyle}
						floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
						id="sectionTitle" 
						floatingLabelText="Enter section title" 
						onChange={this.onTitleChange}
				  	/>



				  	{!this.state.loading ?
	    				<div>
	        				 <MuiThemeProvider>
	        					<FlatButton 
									label="Create"
									style={borderStyle}
									rippleColor={buttonStyles.rippleColor} 
									backgroundColor={buttonStyles.backgroundColor} 
									labelStyle={buttonStyles.labelStyle}
									hoverColor={buttonStyles.backgroundColor}
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
					
    			</Dialog>
    			<MuiThemeProvider>
					<Snackbar
			          open={this.state.error}
			          message="Title cannot be left blank."
			          autoHideDuration={4000}
			          onRequestClose={this.handleRequestClose}
					/>
				</MuiThemeProvider>
			</div>
		)
	}
}
export default SectionCreator