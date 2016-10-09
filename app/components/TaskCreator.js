import React, {Component} from "react";
import $ from "jquery";
import RichTextEditor from './RichTextEditor';
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
	  		name: '',
	  		type: 'Learn',
	  		instructions: '',
	  		answer: '',
	  		wrongAnswers: ['', '', ''],
	  		sectionId: this.props.params.sectionId
	  	}

	  };
	  this.onNameChange = this.onNameChange.bind(this);
	  this.onAnswerChange = this.onAnswerChange.bind(this);
	  this.onWrongChange = this.onWrongChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleTypeChange = this.handleTypeChange.bind(this);
	  this.onInstructionsChange = this.onInstructionsChange.bind(this);

	}

	onInstructionsChange(instructions) {
		this.setState({
				task: {
					name: this.state.task.name,  
					type: this.state.task.type, 
					instructions: instructions, 
					answer: this.state.task.answer, 
					wrongAnswers: this.state.task.wrongAnswers,
					sectionId: this.state.task.sectionId
				}
			});
	}

	onNameChange(e) {
		this.setState({
				task: {
					name: e.target.value,  
					type: this.state.task.type, 
					instructions: this.state.task.instructions, 
					answer: this.state.task.answer, 
					wrongAnswers: this.state.task.wrongAnswers,
					sectionId: this.state.task.sectionId
				}
			});
	}

	onAnswerChange(e) {
		this.setState({
				task: { 
					name: this.state.task.name, 
					type: this.state.task.type, 
					instructions: this.state.task.instructions, 
					answer: e.target.value, 
					wrongAnswers: this.state.task.wrongAnswers,
					sectionId: this.state.task.sectionId
				}
			});
	}

	onWrongChange(e) {
		if (e.target.id === 'wrongAnswer1') {
			this.setState({
				task: {
					name: this.state.task.name,
					type: this.state.task.type, 
					instructions: this.state.task.instructions, 
					answer: this.state.task.answer,
					wrongAnswers: [e.target.value, this.state.task.wrongAnswers[1], this.state.task.wrongAnswers[2]],
					sectionId: this.state.task.sectionId
				}
			});
		} else if (e.target.id === 'wrongAnswer2') {
			this.setState({
				task: {
					name: this.state.task.name,
					type: this.state.task.type, 
					instructions: this.state.task.instructions, 
					answer: this.state.task.answer,
					wrongAnswers: [this.state.task.wrongAnswers[0], e.target.value, this.state.task.wrongAnswers[2]],
					sectionId: this.state.task.sectionId
				}
			});
		} else {
			this.setState({
				task: {
					name: this.state.task.name,
					type: this.state.task.type, 
					instructions: this.state.task.instructions, 
					answer: this.state.task.answer,
					wrongAnswers: [this.state.task.wrongAnswers[0], this.state.task.wrongAnswers[1], e.target.value],
					sectionId: this.state.task.sectionId
				}
			});
		}
	}

	handleTypeChange(value) {
    	this.setState({
      		task: {
      			name: this.state.task.name,
      			type: value,
      			instructions: this.state.task.instructions, 
				answer: this.state.answer, 
				wrongAnswers: this.state.task.wrongAnswers,
				sectionId: this.state.task.sectionId
      		},
    	});
  	};
	
	handleSubmit(e) {
		console.log(this.state.task)
		e.preventDefault();
		$.ajax({
	      url: "http://localhost:3000/api/Tasks",
	      dataType: 'json',
	      type: 'POST',
	      data: this.state.task,
	      success: function(data) {
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
    	});
	}

	render() {
		const tabStyles = {
			inkBarStyle: {
				backgroundColor: '#FFFFFF'
			}
		}
		const titleInputStyle = {
			fontSize: '2.5vh',
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
		          						style={titleInputStyle}
		          						onChange={this.onNameChange}
	          						/>
	          						<hr />
	          						<h4 style={{color: '#BBB9BF'}}>Select task type:</h4>
	          						<Tabs
							          onChange={this.handleTypeChange}
							          value={this.state.task.type}
							          inkBarStyle={tabStyles.inkBarStyle}
							        >
							        	<Tab 
							          		label="Learn" 
							          		value="Learn"
							          		style={{backgroundColor: '#36BA93'}} 
						          	  	/>
							        	<Tab 
							          		label="Questions" 
							          		value="Questions"
							          		style={{backgroundColor: '#36BA93'}} 
						          		/>
        							</Tabs>
								</Paper>
							</MuiThemeProvider>

							<RichTextEditor updateInstructions={this.onInstructionsChange} />

			        		{this.state.task.type != 'Learn' ? <MuiThemeProvider>
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
			        		</MuiThemeProvider> : null }
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