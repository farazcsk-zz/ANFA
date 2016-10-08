import React, {Component} from "react";
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class TaskCreator extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	task: {
	  		type: '',
	  		instructions: '',
	  		answer: '',
	  		wrongAnswers: ['', '', '']
	  	},
	  	slideIndex: 0
	  };

	  this.onQuestionChange = this.onQuestionChange.bind(this);
	  this.onAnswerChange = this.onAnswerChange.bind(this);
	  this.onWrongChange = this.onWrongChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleTypeChange = this.handleTypeChange.bind(this);


	}

	onQuestionChange(e) {
		this.setState({task: { question: e.target.value}});
	}

	onAnswerChange(e) {
		this.setState({task: { answer: e.target.value}});
	}

	onWrongChange(e) {
		if (e.target.id === 'wrongAnswer1') {
			this.setState({task:{wrongAnswers: [e.target.value, this.state.wrongAnswers[1], this.state.wrongAnswers[2]]}});
		} else if (e.target.id === 'wrongAnswer2') {
			this.setState({task:{wrongAnswers: [this.state.wrongAnswers[0], e.target.value, this.state.wrongAnswers[2]]}});
		} else {
			this.setState({task:{wrongAnswers: [this.state.wrongAnswers[0], this.state.wrongAnswers[1], e.target.value]}});
		}
	}

	handleTypeChange(value) {
    	this.setState({
      		task: {type: value},
    	});
  	};
	
	handleSubmit(e) {
		console.log(this.state)
		e.preventDefault();
		$.ajax({
	      url: "http://localhost:3000/api/Tasks",
	      dataType: 'json',
	      type: 'POST',
	      data: this.state,
	      success: function(data) {
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
    	});
	}

	render() {

		const titleInputStyle = {
			fontSize: '2vh',
		}
		const paperStyle = {
		  height: '100%',
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

		const inputStyles = {
		  underlineStyle: {
		    borderColor: '#36BA93',
		  },
		  floatingLabelFocusStyle: {
		  	color: '#36BA93'
		  }
		};

		const radioStyles = {
		    display: 'flex',

		    radioButton: {
		    	width: 'auto',
		    	marginRight: '15px'
		    },

		    iconStyle: {
		     color: '#36BA93'
		    } 
		};
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col md={10}>
							<MuiThemeProvider>
								<Paper style={paperStyle}>
									<TextField 
		          						id="question" 
		          						floatingLabelText="Enter task name" 
		          						underlineFocusStyle={inputStyles.underlineStyle}
										floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
										underlineShow={false}
		          						onChange={this.onQuestionChange}
		          						style={titleInputStyle}
	          						/>
	          						<hr />
	          						<h6>Select task type:</h6>
	          						<Tabs
							          onChange={this.handleTypeChange}
							          value={this.state.slideIndex}
							        >
							          <Tab label="Learn" value={0} />
							          <Tab label="Questions" value={1} />
        							</Tabs>
								</Paper>
							</MuiThemeProvider>
							<MuiThemeProvider>
								<Paper style={paperStyle}>
									<Row className="show-grid">
										<Col md={12}>
				          					<TextField 
				          						id="question" 
				          						floatingLabelText="Instructions" 
				          						multiLine={true}
				          						underlineFocusStyle={inputStyles.underlineStyle}
												floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle}
				          						onChange={this.onQuestionChange}
			          						/>
				          				</Col>
				          			</Row>
				        		</Paper>
			        		</MuiThemeProvider>

			        		<MuiThemeProvider>
			        			<Paper style={paperStyle}>
			        				<Row className="show-grid">
				          				<Col md={12}>
				          					<Row className="show-grid">
				          						<Col md={6} mdOffset={3}>
						          					<TextField 
						          						id="answer" 
						          						floatingLabelText="Enter Answer"
						          						underlineFocusStyle={inputStyles.underlineStyle}
														floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
						          						onChange={this.onAnswerChange}
					          						/>
				          						</Col>
			          						</Row>
			          						<Row className="show-grid">
				          						<Col md={6} mdOffset={3}>
							          				<TextField 
							          					id="wrongAnswer1" 
							          					floatingLabelText="Enter Wrong Answer"
							          					underlineFocusStyle={inputStyles.underlineStyle}
														floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
							          					onChange={this.onWrongChange}
						          					/>
					          					</Col>
			          						</Row>

			          						<Row className="show-grid">
				          						<Col md={6} mdOffset={3}>
						          					<TextField 
						          						id="wrongAnswer2" 
						          						floatingLabelText="Enter Wrong Answer"
						          						underlineFocusStyle={inputStyles.underlineStyle}
														floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
						          						onChange={this.onWrongChange}
					          						/>
					          					</Col>
			          						</Row>
											
											<Row className="show-grid">
				          						<Col md={6} mdOffset={3}>
							          				<TextField 
							          					id="wrongAnswer3" 
							          					floatingLabelText="Enter Wrong Answer"
							          					underlineFocusStyle={inputStyles.underlineStyle}
														floatingLabelFocusStyle={inputStyles.floatingLabelFocusStyle} 
							          					onChange={this.onWrongChange}
						          					/>
					          					</Col>
				          					</Row>
				          				</Col>
			          				</Row>
			        			</Paper>
			        		</MuiThemeProvider>
	        			</Col>
	        			<Col md={2}>
	        				<MuiThemeProvider>
	        					<FlatButton 
									style={borderStyle}
									rippleColor={buttonStyles.rippleColor} 
									backgroundColor={buttonStyles.backgroundColor} 
									labelStyle={buttonStyles.labelStyle}
									hoverColor={buttonStyles.backgroundColor} 
									label="Save" 
									onClick={this.handleSubmit} 
								/>
							</MuiThemeProvider>
	        			</Col>
					</Row>
	    		</Grid>
			</div>
		)
	}
}
export default TaskCreator